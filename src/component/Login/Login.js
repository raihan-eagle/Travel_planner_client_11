import React from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInWithGoogle, setUser, setIsLoading } = useAuth();
    const history = useHistory();
    const location = useLocation()

    const url=location.state?.from || '/home'
    
    const handleGoogleSignin = () => {
        signInWithGoogle()
        .then((res) => {
            setIsLoading(true)
            setUser(res.user)
            history.push(url)
            
        })
        .catch(err => console.log(err))
        .finally(()=>{
        setIsLoading(false)
        })
        
    };
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleSignin} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;