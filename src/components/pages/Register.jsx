import { Link } from "react-router-dom"
import "../../assets/css/loginRegister.css"
import { useState } from "react"
import TextInput from "../layout/TextInput"
import { RegisterAPI } from "../api/actions"
import EmailVarification from "../layout/EmailVarification"

const Register = () => {
  const [success, setSuccess] = useState(false)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [emailError, setEmailError] = useState()
  const [usernameError, setUsernameError] = useState()

  async function  RegisterUser () {
   let res=await RegisterAPI(username, email, password, handleError)
  }

  const handleError=(e)=>{
    if(e.status==="SUCCESS") {
      setSuccess(true)
    }
    else {
      setEmailError(e.errors.email_error)
      setUsernameError(e.errors.username_error)
    }
  }

  return (
    <section className="login-register-content">
      <h1 className="titleLayout__title">Register</h1>
      {!success ? (
        <>
          <TextInput
            name="username"
            labelName={"Username"}
            className="y-center"
            onChange={(e) => setUsername(e.target.value)}
            usernameError={usernameError}
          />
          <TextInput
            name="email"
            labelName={"Email"}
            className="y-center"
            onChange={(e) => setEmail(e.target.value)}
            emailError={emailError}
          />
          <TextInput
            name="password"
            labelName={"Password"}
            className="y-center"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="newuser-link">
            Already have a Toilet-Paper-Tycoon account?
            <br />
            Login <Link to="/login">here</Link>
          </p>
          <button className="login-register-btn" onClick={RegisterUser}>
            Register
          </button>
        </>
      ) : (
        <EmailVarification email={email} />
      )}
    </section>
  )
}

export default Register
