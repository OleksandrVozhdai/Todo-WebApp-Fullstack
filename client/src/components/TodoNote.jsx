import React, { useEffect, useState } from "react";
import DarkVeil from "./darkVeil/DarkVeil";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const TodoNote = () =>
{
    const { id } = useParams();
    const navigate = useNavigate();
    const [noteTitle, setNoteTitle] = useState()
    const [noteDesc, setNoteDesc] = useState()
    const [todoData, setTodoData] = useState(null)

    useEffect(() => {
    console.log(id);
    axios.get(`https://localhost:7052/api/ListTodo/${id}`)
    .then(result  => {
        console.log(result.data);
        setNoteTitle(result.data.title);
        setNoteDesc(result.data.description);
        setTodoData(result.data)
    })
    .catch(error => {
        console.error( error.response?.data || error.message);
    });
    }, [id])

    const saveClick = () => {
        axios.put(`https://localhost:7052/api/ListTodo/${id}`,{
            ...todoData,
            title: noteTitle,
            description: noteDesc,
        }).catch(error => {console.log(error)}).then(navigate('/todos'));
    }

    const deleteClick = () => {
        axios.delete(`https://localhost:7052/api/ListTodo/${id}`).then(res=> {
            console.log(res)
            navigate('/todos');
    })
    }

    return(
        <>
           <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                    <DarkVeil />
                </div>
                <main style={{ position: 'relative', zIndex: 1, color: '#fff', padding: '20px', width:"100%", height:"100%" }}>
                    <div className="Note-container" style={{height:"90%", width:"97%", display:"flex", flexDirection:"column"}}>
                        <div style={{width:"100%", height:"10%", display:"flex", flexDirection:"row"}}>
                            <input value={noteTitle} onChange={(e)=> {(setNoteTitle(e.target.value))}} autoComplete="new-password" className="todo-input-noscale" style={{  marginTop: "10px", width:"50%", marginRight:"10px", marginLeft:"10px", color:"white"}}/>

                           {todoData ? (todoData.isCompleted ? <><p style={{color:"rgba(0, 255, 13, 0.4)", cursor:"default"}}>Completed</p></> : <><p style={{color:"rgba(255, 0, 0, 0.64)", cursor:"default"}}>Uncompleted</p></>) : <></>}

                            {/*<button className="add-task-button" style={{marginTop: "10px", width:"30px", marginLeft:"10px", marginRight:"0px", color:"white", backgroundColor:"transparent", color:"#9E78CF"}}> <i class="bi bi-pen-fill"></i>  </button>*/}
                            <button onClick={()=> deleteClick()} className="add-task-button" style={{marginTop: "10px", width:"30px", marginLeft:"10px", color:"white", backgroundColor:"transparent", color:"#9E78CF"}}> <i class="bi bi-trash3-fill"></i>  </button>
                            <p className="Reg-text-button" style={{textDecoration:"none", color: "white", marginLeft:"auto", marginTop:"10px", marginRight:"10px", fontSize:"20px"}} onClick={()=>navigate('/todos')}><i class="bi bi-arrow-bar-left"></i>Back </p>
                            <button onClick={()=>saveClick()} className="add-task-button" style={{marginTop: "10px", width:"60px", marginLeft:"10px", marginRight:"15px" , color:"#f2e9ffff"}}> save  </button>
                        </div>
                        <div style={{width:"100%", height:"80%"}}>
                            <textarea onChange={(e)=> {(setNoteDesc(e.target.value))}} value={noteDesc} autoComplete="new-password" className="todo-input-noscale" style={{ resize:"none", paddingTop:"10px", marginTop: "30px", marginLeft:"10px", width:"97%", height:"100%", marginRight:"auto", color:"white"}}/>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default TodoNote;