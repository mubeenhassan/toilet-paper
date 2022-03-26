import { Link, useLocation } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import "../../assets/css/layout.css"

const Header = (props) => {
  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    if (props.isAuth != null) window.location.replace("/")
  }
  const location = useLocation()
  return (
    <nav className="header-bg">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className="links-container">
        <li>
          {props.isAuth != null ? (
            <button onClick={handleLogout}>logout</button>
          ) : location.pathname === "/login" ? (
            <Link to="/register">Register</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Header