const EmailVarification = (props) => {
  return (
    <div className="center registerEmailVerification">
      <h1>Almost Done!</h1>
      <br />
      <p>
        Please verify your email address we send a email to {props.email}. Please
        look to your "postfach" and verify your email by clicking the link.
      </p>
    </div>
  )
}
export default EmailVarification
