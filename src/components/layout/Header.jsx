import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import '../../assets/css/layout.css'

const Header = () => {
  return (
    <nav>
      <div className='logo-container'>
        <Link to='/'>
          <img src={logo} alt='' />
        </Link>
      </div>
      <ul className='links-container'>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        {/* <li className='profile'>
          <Link to='/profile'>Profile</Link>
        </li>
        <li className='logout'>
          <a>Logout</a>
        </li> */}
      </ul>
    </nav>
  )
}

export default Header
