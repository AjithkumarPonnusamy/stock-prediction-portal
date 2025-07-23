import React, { useContext, useState } from "react";

import Button from "./Button";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
function Header() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshtoken')
    setIsLoggedIn(false)
    console.log("Logged out")

    navigate('/login')
  }
  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start">
        <Link className="navbar-brand text-light" to="/">
          Stock Prediction Portal
        </Link>
        <div>
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Button text="Login" url="/login" />
              <Button text="Register" url="/register" />
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
