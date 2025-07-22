import axios from "axios";
import { useState, useEffect } from "react";

axios.get('https://localhost:7052/api/ListTodo').then(res=>console.log(res.data));

const Todo =() =>{
    return(
        <>
        
        </>
    )
}

export default Todo;