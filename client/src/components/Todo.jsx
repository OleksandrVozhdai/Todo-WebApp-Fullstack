import axios from "axios";
import { useState, useEffect } from "react";

const apiLink = 'https://localhost:7052/api/ListTodo';

axios.get(apiLink).then(result=>(console.log(result))); //remove after
    
const Todo =() =>{

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState([]);

    useEffect(() => {
        axios.get(apiLink)
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => {
                console.error("Error fetching todos:", error);
            });
    }, []);

    const deleteClick = (id) => {
        axios.delete(apiLink + '/' + id)
            .then(res => {
                console.log(res);
                //alert('Task deleted');
                setTodos(prevTodo => (prevTodo.filter(todo => (todo.id !== id))));
            })
            .catch(error => {
                console.log('Cannot delete. Error: ' + error);
        });
    };


    const completeClick = (id, OriignalTitle, OriginalDesc) => {
        axios.put(apiLink + '/' + id, {
                id : id,
                title: OriignalTitle,
                description: OriginalDesc,
                isCompleted: true
            }).then(() => {
                axios.get(apiLink).then(response => setTodos(response.data));
            }).catch (error => {
                console.log('Cannot put. Error: ' + error);
            })
    }

    const uncompleteClick = (id, OriignalTitle, OriginalDesc) => {
        axios.put(apiLink + '/' + id, {
                id : id,
                title: OriignalTitle,
                description: OriginalDesc,
                isCompleted: false
            }).then(() => {
                axios.get(apiLink).then(response => setTodos(response.data));
            }).catch (error => {
                console.log('Cannot put. Error: ' + error);
            })
    }

    const createTaskClick = () => {
    axios.post(apiLink, {
            id: 0,
            title: inputValue,
            description: "What you are goin to do?",
            isCompleted: false
        }).catch( error => {
        alert('Enter name of the task')
        console.log(error);
        })    
    }

    return (
    <>
        <div style={{width:"100%", display:"flex", flexDirection:"column"}}>
            <div className="central-container">

            <div style={{display:"flex", flexDirection:"row"}}>
                <input placeholder="Add a new task" className="todo-input" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                <button className="add-task-button" onClick = {() => createTaskClick()} > + </button>   
            </div>

            <div className="Todo-text-container">
                <h1 className="Todo-text">Tasks to do</h1></div>
                <div className="central-container">
                    <ul>
                        {todos.filter(todo => !todo.isCompleted).map((todo)=> 
                            <div className="Todo-container" key={todo.id}>
                                <p>{todo.title}</p>
                                <div style={{marginLeft:"auto", marginRight:"25px", marginTop:"auto", marginBottom:"auto"}}>
                                    <button className="Todo-container-button" onClick={() => completeClick(todo.id, todo.title, todo.description)} style={{marginRight:"0"}}> <i class="bi bi-check-lg"></i> </button>
                                    <button className="Todo-container-button" onClick={() => deleteClick(todo.id)}> <i class="bi bi-trash3-fill"></i> </button>
                                </div>
                            </div>
                        )}
                    </ul>  
                </div>
                <h1 className="Todo-text">Done</h1>
                <ul>
                    {todos.filter(todo=> todo.isCompleted).map((todo)=>
                        <div className="Todo-container" key={todo.id}>
                            <p className="completed-text">
                                <span className="no-strike">
                                    <i className="bi bi-check-circle-fill"></i>
                                </span>
                                {todo.title}
                            </p>
                            <div style={{marginLeft:"auto", marginRight:"25px", marginTop:"auto", marginBottom:"auto"}}>
                                <button className="Todo-container-button-rotate" style={{marginRight:"0"}}  onClick={() => uncompleteClick(todo.id, todo.title, todo.description)}> <i class="bi bi-arrow-repeat"></i> </button>
                                <button className="Todo-container-button" onClick={() => deleteClick(todo.id)}> <i class="bi bi-trash3-fill"></i> </button>
                            </div>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    </>
    );
}

export default Todo;