import { Link, NavLink } from "react-router-dom"
import { auth, googleProvider } from "../firebase/config";
import { signInWithPopup, signOut } from "firebase/auth";
import Logo from "../assets/logo.png"
import { useState } from "react";


export const Header = () => {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false)

  function handelLogin() {
    signInWithPopup(auth, googleProvider).then((result) => {
      console.log(result)
      setIsAuth(true)
      localStorage.setItem("isAuth", true)
    })
  }

  function handelLogout() {
    signOut(auth)
    setIsAuth(false)
    localStorage.setItem("isAuth", false)
  }

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Write note logo" />
        <span>Write Note</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" >Home</NavLink>
        {isAuth ? (
          <>
            <NavLink to="/create" className="link" >Create</NavLink>
            <button onClick={handelLogout} className="auth"><i className="bi bi-box-arrow-right"></i> Logout</button>
          </>
        ) : (
          <button onClick={handelLogin} className="auth"><i className="bi bi-google"></i> Login</button>
        )}


      </nav>
    </header>
  )
}
