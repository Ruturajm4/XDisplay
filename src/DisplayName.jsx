import React, {useState} from 'react'

const DisplayName = ()=>{

    const [firstName, setFirstName]=useState()
    const [lastName, setLastName]=useState()

    const [display, setDisplay]=useState(false)

    const handleFirstName=(e)=>{
        setFirstName(e.target.value)
    }

    const handleLastName=(e)=>{
        setLastName(e.target.value)
    }

    const show=()=>{
        setDisplay((prev)=>!prev)
    }

    return(
        <div>
            <h3>Full Name Display</h3>

            <h6>First Name : <input onChange={handleFirstName}></input></h6> 
            <h6>Last Name :  <input onChange={handleLastName}></input></h6>

            <button onClick={show}>Submit</button>

            <p>{display && `${firstName} ${lastName}`}</p>

        </div>
    )
}

export default DisplayName