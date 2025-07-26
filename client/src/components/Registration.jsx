import React from "react";
import DarkVeil from "./darkVeil/DarkVeil";
import { useNavigate } from "react-router-dom";
import ShinyText from "./shinyText/ShinyText";

const Registration = () => {
    const navigate = useNavigate();

    return (
        <>
        <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <DarkVeil />
            </div>
           <main style={{ position: 'relative', zIndex: 1, color: '#fff', padding: '20px' }}>
                <div className="central-container" style={{backgroundColor:"transparent", width: "500px", height:"500px", marginTop:"100px"}}>
                   <p className="Reg-text-button-noscale" onClick={()=> navigate('/Home')}><i class="bi bi-arrow-left"></i> Go back</p>
                   
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <ShinyText text="User Name" disabled={false} speed={3} className='custom-class'/>
                        <input placeholder="Create user name" className="todo-input" style={{marginTop: "10px", width:"50%", marginRight:"auto", marginLeft:"auto"}}/>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"20px"}}>
                        <ShinyText text="Password" disabled={false} speed={3} className='custom-class'/>
                        <input placeholder="Create password" className="todo-input" style={{marginTop: "10px", width:"50%", marginRight:"auto", marginLeft:"auto"}}/>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"20px"}}>
                        <button className="Reg-button" style={{}}> Register </button>
                        <p className="Reg-text-button" onClick={() => navigate('/Login')}>Have an account?</p>
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}

export default Registration;