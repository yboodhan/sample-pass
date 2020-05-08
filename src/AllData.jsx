import React from 'react'
import {Link} from 'react-router-dom'

const AllData = props => {
    var handleUpdate = props.setNewPerson;
    let listOfAllPeeps = props.people.map( (person, index) => {
        return(
            <div key={index}>
                <Link to="/show" onClick={() => handleUpdate(person)}>{person.name}, {person.age}</Link>
            </div>
        )
    })

    return (
        <div>
            <h1>List of all peeps</h1>
            {listOfAllPeeps}
        </div>
    )
}

export default AllData