import React from 'react'
import UserComponent from '../../components/UserComponent/UserComponent'

const Dashboard = () => {
    console.log('Parent render')
    return (
        <div>
            <div>Dashboard</div>
            <UserComponent />
        </div>
        
    )
}

export default Dashboard