import { Link } from "react-router-dom"
import "../../assets/css/loginRegister.css"
import { SuccessToast, FailedToast } from "../Toast"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useState } from "react"
import TextInput from "../layout/TextInput"

const Register = () => {
  const [success, setSuccess] = useState(false)
  const Login = () => {
    setSuccess(!success)
    success ? SuccessToast() : FailedToast()
  }
  return (
    <section className="login-register-content">
      <h1 className="titleLayout__title">Register</h1>
      <TextInput
        name="username"
        labelName={"Username"}
        className="y-center"
      />
      <TextInput
        name="email"
        labelName={"Email"}
        className="y-center"
      />
      <TextInput
        name="password"
        labelName={"Password"}
        className="y-center"
        type="password"
      />
     <p className="newuser-link">Already have a Toilet-Paper-Tycoon account?<br />
Login <Link to="/login">here</Link> </p>
      <button className="login-register-btn" onClick={Login}>Register</button>
      <ToastContainer />
    </section>
  )
}

export default Register

 