import React, { useState } from 'react'
import axios from 'axios'
const Register = () => {
    const [username,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const[errors,setErrors] = useState({})
    const [success,setSuccess] = useState(false)
    const handleRegistration = async (e) => {
        e.preventDefault();
        const userData = {
            username,email,password
        }
        

        try{
         const response = await axios.post('http://127.0.0.1:8000/api/v1/register/',userData)
         console.log('response.data==>',response.data)
         console.log("Registration successful")
         setErrors({})
         setSuccess(true)
        }
        catch(error){
            console.error('Registration Error:',error.response.data) 
        }
    }
  return (
    <>
        <div className='container'>
            <div className=''>
                <div className=''>
                    <h3>Create an Account</h3>
                    <form onSubmit={handleRegistration}>
                        <input type='text' className='form-control' placeholder='Enter username' value={username} onChange={(e)=>setUserName(e.target.value)}/>
                        <small></small>
                        <input type='email' className='form-control' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <input type='password' className='form-control' placeholder='Set password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                       
                        <button type='submit' className='btn-info'>Button</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register