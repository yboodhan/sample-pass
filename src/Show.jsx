import React from 'react'

const Show = props => {
    return (
        <div>
            <h1>This is a show page</h1>
            <h1>{props.person.name}</h1>
            <p>{props.person.age}</p>
            <small>{props.person.location}</small>
        </div>
    )
}

export default Show