import React, { useEffect } from 'react'
import '../../Styles/Login.css'
import FormLogin from '../FormLogin/FormLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';


function Login() {

    const history = useHistory()

    const token = JSON.parse(sessionStorage.getItem('token'))
  
    useEffect(() => {
        if (token) return history.push('/Home')
    }, [history, token])

    return (
    
            <FormLogin />
                
    )
}

export default Login
