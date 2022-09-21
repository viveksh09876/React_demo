import React, { useState, useEffect } from 'react'

const UserComponent = (props) => {
    const {
        login, logout, checkLoginStatus
    } = props,
    [isLoggedIn, setIsLoggedIn] = useState(false),
    loginUser = () => {
        setIsLoggedIn(login())
    },
    logoutUser = () => {
        setIsLoggedIn(logout())
    }
    console.log("child render");
    

    useEffect(() => {
        console.log('useEffect run')
        setIsLoggedIn(checkLoginStatus());
        // const interval = setInterval(() => {
        //     const loginStatus = checkLoginStatus();
        //     setIsLoggedIn(loginStatus)
        // }, 5000);
        // return () => clearInterval(interval)
    }, [checkLoginStatus])
    return (
        <div>
            <div>UserComponent</div>
            <div>Is Logged In: {isLoggedIn ? 'true' : 'false'}</div>
            <div><button onClick={logoutUser}>Logout</button></div>
            <div><button onClick={loginUser}>Login</button></div>
        </div>
        
    )
}

export default UserComponent