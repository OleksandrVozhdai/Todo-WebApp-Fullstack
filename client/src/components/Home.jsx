import React from "react";
import DarkVeil from "./darkVeil/DarkVeil";
import { useNavigate } from "react-router-dom";
import SplitText from "./splitText/splitText";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <DarkVeil />
            </div>
            <main style={{ position: 'relative', zIndex: 1, color: '#fff', padding: '20px' }}>
                <div className="central-container" style={{backgroundColor:"transparent", width: "500px", height:"500px", marginTop:"150px"}}>
                    <div className="Todo-ico-container" onClick={() => window.open('https://github.com/OleksandrVozhdai/Todo-WebApp-Fullstack')} style={{display:"flex", flexDirection:"row", gap:"15px", alignItems: "center",  justifyContent: "center", fontSize:"25px"}}>
                        <i class="bi bi-calendar2-check-fill" style={{color:"#7c3fedff"}}></i>
                        <p>Todo webapp</p>
                    </div>
                    <SplitText style={{marginLeft:"auto", marginRight:"auto", fontSize:"65px", fontWeight:"650"}} text="Start your day!" delay={100} duration={0.6} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-100px" textAlign="center" />
                    <div style={{display:"flex", flexDirection:"row", gap:"40px", marginTop:"15px"}}>
                        <button className="Home-menu-button" onClick={()=>navigate('/Registration')}> Get Started </button>
                        <button className="Home-menu-button" style={{backgroundColor:"rgb(30, 30, 30)", color: "gray"}} onClick={()=> {navigate('/About')}}> Learn More </button>
                    </div>
                   
                </div>
            </main>
        </div>
    );
};

export default Home;