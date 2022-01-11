import React from 'react'
import { Route, Redirect } from 'react-router'


function PrivateRoute(props) {

    const user = sessionStorage.getItem('token')
    
    if (user === null || user === undefined) return <Redirect to="/" />

    return (
        <Route  {...props}/>
    )
}

export default PrivateRoute
