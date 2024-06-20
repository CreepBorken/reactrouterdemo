import React, { useState } from 'react';
import { useAuth } from './auth';
import { Navigate } from 'react-router-dom';

function LoginPage() {
    const auth = useAuth();
    const [userName, setUserName] = useState('');    

    const login = (e) =>{
        e.preventDefault();
        auth.login(userName);
    };

    if(auth.user){
        return <Navigate to='/profile'/>
    }

    return (<>
        <h1>LoginPage</h1> 

        <form onSubmit={login}>
            <label>Username</label>
            <input valuie={userName} onChange = {e => setUserName(e.target.value)}></input>

            <button type='submit'>Entrar</button>
        </form>
    </>
    );
}

export default LoginPage;