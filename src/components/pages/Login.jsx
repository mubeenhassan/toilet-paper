import { Link } from "react-router-dom"
import "../../assets/css/loginRegister.css"
import { SuccessToast, FailedToast } from "../Toast"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useEffect, useState } from "react"
import TextInput from "../layout/TextInput"
import { LoginAPI} from '../api/actions'
import axios from "axios"

const Login = () => {
  const [success, setSuccess] = useState(false)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  
  function Logina() {
    setSuccess(!success)
    LoginAPI()
    success ? SuccessToast() : FailedToast()

  }
  return (
    <section className="login-register-content">
      <h1 className="titleLayout__title">Login</h1>
      <TextInput
        name="username"
        labelName={"Username/Email"}
        className="y-center"
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        name="password"
        labelName={"Password"}
        className="y-center"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <p className="newuser-link">
        New to Toilet-Paper-Tycoon?
        <br /> Register <Link to="/register">here</Link>
      </p>
      <button className="login-register-btn" onClick={Logina}>
        Login
      </button>
      <ToastContainer />
    </section>
  )
}

export default Login
