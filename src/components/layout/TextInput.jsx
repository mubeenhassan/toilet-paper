const TextInput = (props) => {
  return (
    <div className={"textInputForm " + props.className}>
      <input
        name={props.name}
        type={props.type}
        className={"textInputForm__input"}
        placeholder=" "
        autoComplete={props.autoComplete}
        required={props.required}
        onChange={props.onChange}
      />
      <label className="textInputForm__label">
        {props.labelName ? props.labelName : props.name}
        {props.required ? "*" : ""}
      </label>
      {props.usernameError && <span className="error-msg">{props.usernameError}</span>}
      {props.emailError && <span className="error-msg">{props.emailError}</span>}
    </div>
  )
}
export default TextInput
