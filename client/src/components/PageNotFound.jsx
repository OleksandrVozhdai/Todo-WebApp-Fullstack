import React, { use } from "react";
import DarkVeil from "./darkVeil/DarkVeil";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const naviate = useNavigate();

    return (
        <>
        <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <DarkVeil />
            </div>
            <main style={{ position: 'relative', zIndex: 1, color: '#fff', height:'100%' }}>
                <div style={{height:"100%", width:"100%", display: "flex", flexDirection:"column"}}>
                    <h1 style={{marginLeft:"auto", marginRight:"auto", marginTop:"200px", marginBottom:"10px", fontSize:"65px", fontWeight:"650"}}>Oops..</h1>
                    <h1 style={{marginLeft:"auto", marginRight:"auto", marginTop:"0px", marginBottom:"", fontSize:"65px", fontWeight:"650"}}>Error 404 - Page not found</h1>
                    <p className="Reg-text-button" style={{marginLeft:"auto", marginRight:"auto", fontSize:"25px"}} onClick={()=>naviate('/Home')}> Home page </p>
                </div>
            </main>
        </div>
        </>
    )
}

export default PageNotFound;