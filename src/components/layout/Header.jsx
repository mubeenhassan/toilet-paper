import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import "../../assets/css/layout.css"
import { useNavigate } from "react-router-dom"

const Header = (props) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("accessToken")
   if(props.isAuth !=null)
    navigate("/")
  }
  console.log(props.navbarBg)
  return (
    <nav className={`header-bg ${props.navbarBg ? "nav-bg" : ""}`}>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className="links-container">
        <li>
          {props.isAuth != null ? (
            <button onClick={handleLogout}>logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Header
