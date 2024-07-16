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

    // const show=()=>{
        
    // }

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        setDisplay((prev)=>!prev)
    
    };

    return(
        <div>
            <div>
            <form onSubmit={handleSubmit}>
                <h3>Full Name Display</h3>

                <h6>First Name : <input type="text" onChange={handleFirstName} required="required"></input></h6> 
                <h6>Last Name :  <input type="text" onChange={handleLastName} required="required"></input></h6>

                <button type='submit'>Submit</button>

                
            </form>
            </div>
            <p>Full Name : {display && `${firstName} ${lastName}`}</p>
        </div>
    )
}

export default DisplayName