import React, { useState, useEffect } from 'react'
import { checkLogin, logoutUser, loginUser } from '../../services/userService'

const UserComponent = () => {
    console.log("child render");
    const [isLoggedIn, setIsLoggedIn] = useState(false),
        checkLoginStatus = () => {
            checkLogin().then(result => {
                setIsLoggedIn(result.loggedIn);
            })
        },
        logout = () => {
            logoutUser().then(result => {
                console.log(result)
            })
        },
        login = () => {
            loginUser().then(result => {
                console.log(result)
            })
        }

    useEffect(() => {
        const interval = setInterval(() => {
            checkLoginStatus();
        }, 5000);
        return () => clearInterval(interval)
    }, [])
    return (
        <div>
            <div>UserComponent</div>
            <div>Is Logged In: {isLoggedIn ? 'true' : 'false'}</div>
            <div><button onClick={logout}>Logout</button></div>
            <div><button onClick={login}>Login</button></div>
        </div>
        
    )
}

export default UserComponent