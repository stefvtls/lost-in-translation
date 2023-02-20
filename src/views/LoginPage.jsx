import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import { LoginContainer } from "../components/Login/LoginContainer";



const LoginPage = () => {
    return (
        <div>
            <Navbar page="LoginPage"/>
            <LoginContainer />
        </div>
    )
}


export default LoginPage;