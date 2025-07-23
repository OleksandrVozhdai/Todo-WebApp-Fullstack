import axios from "axios";
import { useState, useEffect } from "react";

axios.get('https://localhost:7052/api/ListTodo').then(result=>(console.log(result)));
    
const Todo =() =>{

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7052/api/ListTodo')
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => {
                console.error("Error fetching todos:", error);
            });
    }, []);
    
    

    return (
    <>
        <div style={{width:"100%", display:"flex", flexDirection:"column"}}>
            <div className="central-container">

            <div style={{display:"flex", flexDirection:"row"}}>
                <input placeholder="Add a new task" className="todo-input" />
                <button className="add-task-button" > + </button>   
            </div>

            <div className="Todo-text-container">
                <h1 className="Todo-text">Tasks to do</h1></div>
                <div className="central-container">
                    <ul>
                        {todos.filter(todo=> !todo.isCompleted).map((todo)=> 
                            <div className="Todo-container" key={todo.id}>
                                <p>{todo.title}</p>
                                <div style={{marginLeft:"auto", marginRight:"25px", marginTop:"auto", marginBottom:"auto"}}>
                                    <button className="Todo-container-button" style={{marginRight:"0"}}> <i class="bi bi-check-lg"></i> </button>
                                    <button className="Todo-container-button"> <i class="bi bi-trash3-fill"></i> </button>
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
                                <button className="Todo-container-button-rotate" style={{marginRight:"0"}}> <i class="bi bi-arrow-repeat"></i> </button>
                                <button className="Todo-container-button"> <i class="bi bi-trash3-fill"></i> </button>
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