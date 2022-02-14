import { Link } from "react-router-dom"
import "../../assets/css/loginRegister.css"
import { useNavigate } from "react-router-dom"

import { useEffect, useState } from "react"
import TextInput from "../layout/TextInput"
import { LoginAPI } from "../api/actions"

const Login = (isAuth) => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    if((isAuth == null)){
      navigate("/profile")
    console.log("is login", isAuth)
  }})

  function Logina() {
    LoginAPI(username, password)
   navigate("/profile")

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
    </section>
  )
}

export default Login
