import React, { useState, useEffect } from 'react'

const UserComponent = (props) => {
    const [visitCount, setVisitCount] = useState(0)
    console.log("child render");
    

    useEffect(() => {
        setVisitCount(props.updateCount())
    }, [props.updateCount])
    return (
        <div>
            <div>UserComponent</div>
            <div>Count: {visitCount}</div>
        </div>
        
    )
}

export default UserComponent