import React from "react";
import DarkVeil from "./darkVeil/DarkVeil";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return (
        <>
        <div style={{ width: '100vw', height: '100vh', position: 'relative', overflowX: 'hidden',  overflowY: 'auto'}}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <DarkVeil />
            </div>
           <main style={{ position: 'relative', zIndex: 1, color: '#fff', padding: 20 }}>
            <p className="Reg-text-button-noscale" style={{marginLeft:"auto", marginRight:"auto", fontSize:"25px"}} onClick={()=>navigate('/Home')}><i class="bi bi-arrow-90deg-left"></i> Home page </p>
  <section style={{maxWidth: 800, padding: 20, fontFamily: 'Arial, sans-serif', lineHeight: 1.6, color: 'white',}}>
    <h1>About This Project</h1>
    <p>
      Welcome to my <strong>ToDo Web App</strong> — a simple, functional task
      manager built with a modern tech stack.
    </p>
    <ul>
      <li>
        <strong>Frontend</strong>: React (with Hooks, Axios, functional
        components)
      </li>
      <li>
        <strong>Backend</strong>: ASP.NET Core Web API (C#)
      </li>
      <li>
        <strong>API</strong>: RESTful, JSON-based
      </li>
      <li>
        <strong>Database</strong>: SQL (Azure)
      </li>
    </ul>


    <h2>GitHub Repository</h2>
    <p>You can explore the source code here:</p>
    <p>
      <a href="https://github.com/OleksandrVozhdai/Todo-WebApp-Fullstack" target="_blank" rel="noopener noreferrer"><strong>Todo-WebApp-Fullstack</strong></a>
    </p>

    <h2>License</h2>
    <p> This project is open source and licensed under the <strong>MIT License</strong>. </p>
    <p> You are free to use, modify, and distribute this project — just keep the license notice.</p>

    <h2>Resources Used</h2>
    <p>Some of the tools and references that helped build this app:</p>
    <ul>
      <a href="https://reactbits.dev/" target="_blank" rel="noopener noreferrer"><strong>reactbits.dev</strong></a>
    </ul>

    <h2>Author :</h2>
   <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start" }}>
        <p className="Reg-text-button-noscale" onClick={()=> window.open('https://github.com/OleksandrVozhdai')} ><strong>Oleksandr Vozhdai <i class="bi bi-github"></i></strong></p>
    </div>
    </section>
</main>

        </div>
        </>
    )
}

export default About;