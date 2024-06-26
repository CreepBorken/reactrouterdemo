import React, { createContext, useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

function AuthProvider ({ children }){
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const adminList = ['creepborken'];
    const editorList = ['editionuser'];
    const rolelist = [{isAdmin:0,isEditor:0}];

    const login = (username) =>{
        const isAdmin = adminList.find(admin => admin === username); 
        const isEditor = editorList.find(editor => editor === username); 
        
        rolelist[0].isAdmin = isAdmin;
        rolelist[0].isEditor = isEditor;

        setUser({username, rolelist});
        navigate('/profile')
    }

    const logout = () =>{
        setUser(null);
        navigate('/')
    }

    const auth = {user, login, logout};

    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth (){
    const auth = useContext(AuthContext);
    return auth;
}

function AuthRoute(props) {
    
    const auth = useAuth();

    if(!auth.user){
        return <Navigate to={'/login'}></Navigate>
    }

    return props.children;
}

export {
    AuthProvider,
    useAuth,
    AuthRoute,
};