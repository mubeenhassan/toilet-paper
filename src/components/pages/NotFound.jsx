import { Link } from "react-router-dom"
import "../../assets/css/notFound.css"

const NotFound = (props) => {
  return (
    <div className="notfound-container">
      <div className="ncontainer">
      <div className="lefthand-side">
        <h1>Oops, this page was not found</h1>
        <br />
        <br />
        <p>
          We could not find the page you were looking for. Try going
          {" "}<Link to="/">Home</Link>
        </p>
      </div>
      <div className="righthand-side">
        <span>404</span>
        <h1>Not Found</h1>
      </div>
      </div>
    </div>
  )
}

export default NotFound
