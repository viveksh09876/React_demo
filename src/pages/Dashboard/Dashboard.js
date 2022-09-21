import React, { useState } from 'react'
import { checkLogin, logoutUser, loginUser } from '../../services/userService'
import UserComponent from '../../components/UserComponent/UserComponent'

const Dashboard = () => {
    const [count, setCount] = useState(0),
    checkLoginStatus = () => {
        checkLogin().then(result => {
            return result.loggedIn;
        })
    },
    logout = () => {
        logoutUser().then(result => {
            console.log(result.loggedIn)
            return result.loggedIn;
        })
    },
    login = () => {
        loginUser().then(result => {
            console.log(result.loggedIn)
            return result.loggedIn;
        })
    },
    updateCount = () => {
        setCount(prevCount => prevCount + 1)
    }
    console.log('Parent render')

    return (
        <div>
            <div>Dashboard</div>
            <UserComponent 
                login={login}
                logout={logout}
                checkLoginStatus={checkLoginStatus}
            />
            <div>Count: {count}</div>
            <button onClick={updateCount}>Update Count</button>
        </div>
        
    )
}

export default Dashboard