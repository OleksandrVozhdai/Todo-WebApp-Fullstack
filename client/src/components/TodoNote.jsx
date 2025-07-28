import React, { useEffect, useState } from "react";
import DarkVeil from "./darkVeil/DarkVeil";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { getUserIdFromToken } from "./actions/Auth";

const TodoNote = () =>
{
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentUserId, setCurrentUserId] = useState();
    const [noteTitle, setNoteTitle] = useState();
    const [noteDesc, setNoteDesc] = useState();
    const [todoData, setTodoData] = useState(null);

    useEffect(() => {
        
    },[])

    useEffect(() => {
    axios.get(`https://localhost:7052/api/ListTodo/${id}`)
    .then(result  => {
        console.log(result.data.userId?.toString());

        if(result.data.userId?.toString() ===  getUserIdFromToken()?.toString() && result)
        {
            console.log(result.data);
            setNoteTitle(result.data.title);
            setNoteDesc(result.data.description);
            setCurrentUserId(result.data.userId);
            setTodoData(result.data);
        } else {
            setNoteTitle("Hey!");
            setNoteDesc("This is not yours!");
            setTodoData(result.data);
        }
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
                <main style={{ position: 'relative', zIndex: 1, color: '#fff', padding: '20px', maxwidth:"100%", height:"100%" }}>
                    <div className="Note-container" style={{height:"90%", maxWidth:"2000px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                        <div className="Note-upper-panel">
                            <input value={noteTitle} onChange={(e)=> {(setNoteTitle(e.target.value))}} autoComplete="new-password" className="todo-input-noscale Notes-title-input"/>
                            <div style={{display:"flex", flexDirection:"row"}}>
                                { getUserIdFromToken()?.toString() === currentUserId?.toString() ? (<>
                                {todoData ? (todoData.isCompleted ? <><p style={{color:"rgba(0, 255, 13, 0.4)", cursor:"default"}}>Completed</p></> : <><p style={{color:"rgba(255, 0, 0, 0.64)", cursor:"default"}}>Uncompleted</p></>) : <></>}
                                <button onClick={()=> deleteClick()} className="add-task-button Note-bin-button"> <i class="bi bi-trash3-fill"></i>  </button>
                                </>) : (<></>)}
                            </div>
                            <div className="Save-back-container">
                                <p className="Reg-text-button" style={{textDecoration:"none", color: "white", marginLeft:"auto", marginTop:"10px", marginRight:"10px", fontSize:"20px"}} onClick={()=>navigate('/todos')}><i class="bi bi-arrow-bar-left"></i>Back </p>
                                { getUserIdFromToken()?.toString() === currentUserId?.toString() ? (<>
                                <button onClick={()=>saveClick()} className="add-task-button" style={{marginTop: "10px", width:"60px", marginLeft:"10px", marginRight:"15px" , color:"#f2e9ffff"}}> save  </button>
                                </>) : (<></>)}
                            </div>
                           
                        </div>
                        
                            <textarea onChange={(e)=> {(setNoteDesc(e.target.value))}} value={noteDesc} autoComplete="new-password" className="todo-input-noscale Notes-text-area"/>
                       
                    </div>
                </main>
            </div>
        </>
    )
}

export default TodoNote;