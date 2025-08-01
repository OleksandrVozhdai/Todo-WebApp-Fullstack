import React from "react";
import DarkVeil from "./darkVeil/DarkVeil";
import { useNavigate } from "react-router-dom";
import SplitText from "./splitText/splitText";
import { isAuthenticated } from "./actions/Auth";


const Home = () => {
    const navigate = useNavigate();

    const GetStartedClick = () =>
    {
        if(isAuthenticated())
        {
            navigate('/Todos');
        } else 
        {
             navigate('/Registration');
        }
    }

    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <DarkVeil />
            </div>
            <main style={{ position: 'relative', zIndex: 1, color: '#fff', padding: '20px', minWidth:"100px" }}>
                <div className="central-container" style={{backgroundColor:"transparent", height:"500px", marginTop:"150px"}}>
                    <div className="Todo-ico-container" onClick={() => window.open('https://github.com/OleksandrVozhdai/Todo-WebApp-Fullstack')} style={{display:"flex", flexDirection:"row", gap:"15px", alignItems: "center",  justifyContent: "center", fontSize:"25px"}}>
                        <i class="bi bi-calendar2-check-fill" style={{color:"#7c3fedff"}}></i>
                        <p>Todo webapp</p>
                    </div>
                    <SplitText  className="Home-split-text" text="Start your day!" delay={100} duration={0.6} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-100px" textAlign="center" />
                    <div className="Home-button-group">
                        <button className="Home-menu-button" onClick={()=>GetStartedClick()} style={{marginRight:"0px"}}> Get Started </button>
                        <button className="Home-menu-button" style={{backgroundColor:"rgb(30, 30, 30)", color: "gray",marginLeft:"0px"}} onClick={()=> {navigate('/About')}}> Learn More </button>
                    </div>
                   
                </div>
            </main>
        </div>
    );
};

export default Home;