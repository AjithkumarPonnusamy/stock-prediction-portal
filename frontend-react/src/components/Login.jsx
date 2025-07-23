import React, { useContext, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { AuthContext } from "../AuthProvider";
const Login = () => {
  const [username, setUserName] = useState("");

  const [password, setPassword] = useState("");
  const [error,setError] = useState('')

  const navigate = useNavigate()
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
      username,password
    }
    console.log('userdata==>',userData)

    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/',userData)
      localStorage.setItem('accessToken',response.data.access)
      localStorage.setItem('refreshToken',response.data.refresh)
      console.log("Login Successful")
      navigate('/')
      setIsLoggedIn(true)
    }
    catch(error){
      console.error('Invalid Credentials')
      setError("Invalid Credentials")
    }
  }
  return (
    <>
      <div className="container">
        <div className="">
          <div className="">
            <h3>Login to Portal</h3>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />

              <input
                type="password"
                className="form-control"
                placeholder="Set password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit" className="btn-info">
                Button
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
