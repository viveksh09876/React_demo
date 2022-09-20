const BASE_API_URL = 'http://localhost:3000';
const getAllUsers = () => {
        return fetch(`${BASE_API_URL}/users`).then(response => response.json())
    },
    checkLogin = () => {
        return fetch(`${BASE_API_URL}/session`).then(response => response.json())
    },
    logoutUser = () => {
        return fetch(`${BASE_API_URL}/session`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                loggedIn: false
            })
        }).then(response => response.json())
    },
    loginUser = () => {
        return fetch(`${BASE_API_URL}/session`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                loggedIn: true
            })
        }).then(response => response.json())
    }



export {
    getAllUsers,
    checkLogin,
    logoutUser,
    loginUser
}