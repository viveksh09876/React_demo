import React, { useState, useCallback } from 'react'
import { checkLogin, logoutUser, loginUser } from '../../services/userService'
import UserComponent from '../../components/UserComponent/UserComponent'
import './dashboard.css'

const Dashboard = () => {
    const [count, setCount] = useState(0),
        [lightTheme, setLightTheme] = useState(true),
        updateCount = () => {
            console.log('Update count called');
            return count+1;
        },
        updateTheme = () => {
            console.log('Update theme called');
            setLightTheme(!lightTheme);
        }
    
    console.log('Parent render')

    return (
        <div className={lightTheme ? 'light': 'dark'}>
            <div>Dashboard</div>
            <button onClick={updateTheme}>Update Theme</button>
            <UserComponent 
                updateCount={updateCount}
            />
        </div>
        
    )
}

export default Dashboard