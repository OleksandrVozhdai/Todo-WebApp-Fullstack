import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import DarkVeil from "./darkVeil/DarkVeil";
import ShinyText from "./shinyText/ShinyText";
import axios from "axios";


const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const [usersName, setUserNameValue] = useState([]);
    const [usersPassword, setUserPassword] = useState([]);
    const [passInputVisibility, setPassInputVisibility] = useState("password");
    const [eyeInputStyle, setEyeInputStyle] = useState("bi-eye-slash-fill");

    const loginClick = async () =>
    {
        try{
            const response = await axios.post('https://localhost:7052/api/Auth/login', {
                userName: usersName,
                password: usersPassword
            });

            localStorage.setItem("token", response.data.token);

            setIsAuth(true);

            alert('Logined successfuly');
            navigate('/Todos'); 
        }
        catch (error){
            if(error.response?.data === "User not found")
                alert('User not found');
            if(error.response?.data === "Invalid credentials")
                alert('Wrong password');
        }
    }

    const changePassVisibility = () => {
        if(passInputVisibility === "password")
        {
            setPassInputVisibility("text");
        } else 
        {
            setPassInputVisibility("password");
        }   
    }

    const changeEyeStyle = () =>
    {
        if(eyeInputStyle === "bi-eye-slash-fill")
        {
            setEyeInputStyle("bi-eye-fill");
        } else
        {
            setEyeInputStyle("bi-eye-slash-fill");
        }
    }

    return (
        <>
        <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <DarkVeil />
            </div>
           <main style={{ position: 'relative', zIndex: 1, color: '#fff', padding: '20px' }}>
                <div className="central-container" style={{backgroundColor:"transparent", maxWidth: "500px", height:"500px", marginTop:"100px"}}>
                   <p className="Reg-text-button-noscale" onClick={()=> navigate('/Home')}><i class="bi bi-arrow-left"></i> Go back</p>
                   
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <ShinyText text="User Name" disabled={false} speed={3} className='custom-class'/>
                        <input autoComplete="new-password" placeholder="Enter your user name" className="todo-input" style={{marginTop: "10px", width:"50%", marginRight:"auto", marginLeft:"auto"}}
                        value={usersName} onChange={(e) => setUserNameValue(e.target.value)}/>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"20px"}}>
                        <ShinyText text="Password" disabled={false} speed={3} className='custom-class'/>
                        <div style={{width:"84%", display:"flex", alignItems:"center"}}>
                            <input type={passInputVisibility} autoComplete="new-password" placeholder="Enter your password" className="todo-input" style={{marginTop: "10px", marginLeft:"auto", width:"50%", zIndex:"1", marginRight:"0px"}}
                            value={usersPassword} onChange={(e)=>setUserPassword(e.target.value)}/>
                            <button className="Todo-container-button" onClick={() =>  {changePassVisibility(); changeEyeStyle()}} style={{zIndex:"2", marginRight:"auto"}}> <i className={`bi ${eyeInputStyle}`}></i> </button>
                        </div>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"20px"}}>
                        <button className="Reg-button" onClick={()=> loginClick()}> Log In </button>
                        <p className="Reg-text-button" onClick={() => navigate('/Registration')}>Register?</p>
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}

export default Login;