import React from 'react'
import './Regisetr.css'
import { useState } from 'react'
function Register() {
const [err, setErr] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  const displayName = e.target[0].value;
  const email = e.target[1].value;
  const password = e.target[2].value;

  try {
    // const res = await 
    
  } catch (error) {
    alert(error);
    console.log(error);
    
  }
}




  return (
    <div className='formContainer'>
    <div className="formWrapper">
        <span className="title">Register</span>
        <form className='elements' onSubmit={handleSubmit} >
            <input type="text"  placeholder='display name'/>
            <input type="email"  placeholder='email' />
            <input type="number"  placeholder='phone number' />
            <input type="password"  placeholder='password' />

            <button>Sign in!</button>
        </form>
    </div>
    
</div>
    
  )
}

export default Register