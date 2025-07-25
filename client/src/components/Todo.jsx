import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShinyText from './shinyText/ShinyText'
import DarkVeil from './darkVeil/DarkVeil';

const apiLink = 'https://localhost:7052/api/ListTodo';

//axios.get(apiLink).then(result=>(console.log(result))); 
    
const Todo =() =>{

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState([]);
    const [completedValue, setCompletedValue] = useState(0);
    const [uncompletedValue, setuncompletedValue] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        getTasks();
    }, []);

    useEffect(() => {
        calculateCompletedTask();
        calculateUncompletedTask();
    }, [todos])

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
                getTasks();
            }).catch (error => {
                console.log('Cannot put. Error: ' + error);
            })
    }

    const calculateCompletedTask = () => {
        setCompletedValue(todos.filter(todo => !todo.isCompleted).length);
    }

    const calculateUncompletedTask = () => {
        setuncompletedValue(todos.filter(todo => todo.isCompleted).length);
    }

    const uncompleteClick = (id, OriignalTitle, OriginalDesc) => {
        axios.put(apiLink + '/' + id, {
                id : id,
                title: OriignalTitle,
                description: OriginalDesc,
                isCompleted: false
            }).then(() => {
               getTasks();
            }).catch (error => {
                console.log('Cannot put. Error: ' + error);
            })
    }

    const getTasks = () =>
    {
        axios.get(apiLink).then(response => setTodos(response.data)).catch(error => {
                console.error("Error fetching todos:", error);
            });
    }

    const createTaskClick = () => {    
    if(!inputValue)
    {
         alert('Enter name of the task')
    } else {
    axios.post(apiLink, {
            id: 0,
            title: inputValue,
            description: "What you are goin to do?",
            isCompleted: false
        }).catch(error => {
            console.log(error);
        }).then(() => {
            axios.get(apiLink).then(response => setTodos(response.data));   
        }).then(() => {setInputValue("")});  
        }       
    }

    return (
    <>
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflowX: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <DarkVeil />
        </div>
        <main style={{ position: 'relative', zIndex: 1 }}> 
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>

                <div style={{width:"100%", display:"flex", flexDirection:"column"}}>
                   
                    <div className="central-container" style={{backgroundColor: ""}}>

                    <div style={{display:"flex", flexDirection:"row"}}>
                        <input placeholder="Add a new task!" className="todo-input" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                        <button className="add-task-button" onClick = {() => createTaskClick()} > + </button>   
                    </div>

                    <div className="Todo-text-container" style={{height:"20px"}}></div>
                        <ShinyText text={`Tasks to do - ${completedValue}`} disabled={false} speed={3} className='custom-class' />
                        <div className="central-container">
                            <ul>
                                {todos.filter(todo => !todo.isCompleted).map((todo)=> 
                            
                                    <div className="Todo-container" key={todo.id}  onClick={() => navigate(`/todos/${todo.id}`)}>
                                        <p>{todo.title}</p>
                                        <div style={{marginLeft:"auto", marginRight:"25px", marginTop:"auto", marginBottom:"auto"}}>
                                            <button className="Todo-container-button" onClick={(event) => {event.stopPropagation(); completeClick(todo.id, todo.title, todo.description)}} style={{marginRight:"0"}}> <i class="bi bi-check-lg"></i> </button>
                                            <button className="Todo-container-button" onClick={(event) => {event.stopPropagation(); deleteClick(todo.id)}}> <i class="bi bi-trash3-fill"></i> </button>
                                        </div>
                                    </div>
                            
                                )}
                            </ul>  
                        </div>
                        <ShinyText text={`Done - ${uncompletedValue}`} disabled={false} speed={3} className='custom-class' />
                        <ul>
                            {todos.filter(todo=> todo.isCompleted).map((todo)=>
                                <div className="Todo-container" key={todo.id} onClick={() => navigate(`/todos/${todo.id}`)}>
                                    <p className="completed-text">
                                        <span className="no-strike">
                                            <i className="bi bi-check-circle-fill"></i>
                                        </span>
                                        {todo.title}
                                    </p>
                                    <div style={{marginLeft:"auto", marginRight:"25px", marginTop:"auto", marginBottom:"auto"}}>
                                        <button className="Todo-container-button-rotate" style={{marginRight:"0"}}  onClick={(event) => { event.stopPropagation(); uncompleteClick(todo.id, todo.title, todo.description)}}> <i class="bi bi-arrow-repeat"></i> </button>
                                        <button className="Todo-container-button" onClick={(event) => {event.stopPropagation(); deleteClick(todo.id)}}> <i class="bi bi-trash3-fill"></i> </button>
                                    </div>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    </div>
    </>
    );
}

export default Todo;