import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './components/input-field';
import InputButton from './components/button';
import CompanyHeader from './components/company-header';
import './components/loginPage.css'

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [recovery, setRecovery] = useState('');

    let navigate = useNavigate();

    const getFields = () => {
        if (!username && !password && !recovery) {
            alert('Recovery Key must be filled out if Username and Password are not filled');
            return false;
        }

        if (!recovery) {
            if (username === '') {
                alert('Username must be filled out');
                return false;
            }

            if (password === '') {
                alert('Password must be filled out');
                return false;
            }
        }

        // If all fields are filled out, you can do whatever you need with the values
        console.log(username, password, recovery);

        // If the login is successful, redirect to the main page
        navigate('/main');
    }

    const moveRegister = () =>{
        navigate('/register')
    }

    return (
        <div>
            <div id = 'companyHead'> 
             <CompanyHeader name = 'Tesco' />
            </div>
            <div id = 'form'>
                <InputField id='username' name='Username' value={username} onChange={e => setUsername(e.target.value)} />
                <InputField id='password' name='Password' value={password} onChange={e => setPassword(e.target.value)} />
                <InputField id='recovery' name='Recovery Key' value={recovery} onChange={e => setRecovery(e.target.value)} />
                <InputButton functionToDo={getFields} text={'Login Now'} />
                <p>OR</p>
                <InputButton functionToDo={moveRegister} text={'Register Now'} />
            </div>
        </div>
    );
}

export default LoginPage;
