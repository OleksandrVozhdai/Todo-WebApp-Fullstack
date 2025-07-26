import React from "react";
import DarkVeil from "./darkVeil/DarkVeil";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <DarkVeil />
            </div>
            <main style={{ position: 'relative', zIndex: 1, color: '#fff', padding: '20px' }}>
                <div className="central-container" style={{backgroundColor:"transparent", width: "500px", height:"500px", marginTop:"150px"}}>
                    <div className="Todo-ico-container" style={{display:"flex", flexDirection:"row", gap:"15px", alignItems: "center",  justifyContent: "center", fontSize:"25px"}}>
                        <i class="bi bi-calendar2-check-fill" style={{color:"#7c3fedff"}}></i>
                        <p>Todo webapp</p>
                    </div>
                    <h1 style={{marginLeft:"auto", marginRight:"auto", fontSize:"65px", fontWeight:"650"}}>Start your day</h1>
                    <div style={{display:"flex", flexDirection:"row", gap:"40px", marginTop:"15px"}}>
                        <button className="Home-menu-button"> Get Started </button>
                        <button className="Home-menu-button" style={{backgroundColor:"rgb(30, 30, 30)", color: "gray"}} onClick={()=> {navigate('/About')}}> Learn More </button>
                    </div>
                   
                </div>
            </main>
        </div>
    );
};

export default Home;