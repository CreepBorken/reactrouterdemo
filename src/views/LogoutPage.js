import React from 'react';
import { useAuth } from '../utils/auth';

function LogoutPage() {
    const auth = useAuth();

    const logout = (e) =>{
        e.preventDefault();
        auth.logout();
    };

    return (<>
        <h1>LogoutPage</h1> 

        <form onSubmit={logout}>
            <label>Listo para salir?</label>
            
            <button type='submit'>Salir</button>
        </form>
    </>
    );
}

export default LogoutPage;