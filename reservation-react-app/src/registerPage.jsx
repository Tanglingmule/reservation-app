import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputButton from "./components/button";
import InputField from "./components/input-field"

function RegisterPage (){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    let navigate = useNavigate();

    const generateRecovery = () => {
        let recovery = '';
        const length = 10;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            recovery += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return recovery;
    }
    

    const getFields = () => {

        if (username === '') {
           alert('Username must be filled out');
            return false;
         }

            if (password === '') {
                alert('Password must be filled out');
                return false;
            }

            if (email === '') {
                alert('Email must be filled out');
                return false;
            }
        

        // If all fields are filled out, you can do whatever you need with the values
        const recovery = generateRecovery();
        console.log(username, password, email, recovery);
        alert('Your Recovery key is '+recovery)
        alert("Successfully Registered")

        // If the registration is successful, redirect to the main page
        navigate('/login');
    }

    return(
        <div>
        <h1>Register</h1>


        <InputField id = 'email' name='Email' value={email} onChange={e => setEmail(e.target.value)} />
        <InputField id='username' name='Username' value={username} onChange={e => setUsername(e.target.value)} />
        <InputField id='password' name='Password' value={password} onChange={e => setPassword(e.target.value)} />
        <InputButton functionToDo={getFields} text={'Register Now'}/>
        </div> 

    )


}

export default RegisterPage
