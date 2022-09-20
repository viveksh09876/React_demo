import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../../services/userService'

const Users = () => {
    const [usersList, setUsersList] = useState([]),
        fetchUsers = () => {
            getAllUsers()
                .then(result => {
                    setUsersList(result)
                })
        }


    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div>
            <div>Users</div>
            <ul>
                {usersList.map(item => {
                    return (
                        <li key={item.id}>
                            <div>Id: {item.id}</div>
                            <div>Name: {item.name}</div>
                            <div>House No.: {item.houseNo}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Users