import React from "react";
import { useNavigate } from "react-router-dom";


export const isAuthenticated = () => {
  const token = localStorage.getItem("token");

  return !!token;
}

export const getUserNameFromToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const payloadBase64 = token.split('.')[1];
    const payload = JSON.parse(atob(payloadBase64));

    return payload.sub; 
}

export const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const payloadBase64 = token.split('.')[1];
    const payload = JSON.parse(atob(payloadBase64));

    return payload.id
};






