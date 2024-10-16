import logo from '../../assets/sprint4-logo.png'
import './index.css'

const Header = () => {
  return (
    <nav className='header-container'>
        <img src={logo} alt='AMRUTHAM'/>
        <ul className='menu-items'>
            <li className='nav-link'>Home</li>
            <li className='nav-link'>FindDoctors</li>
            <li className='nav-link'>About Us</li>
        </ul>
        <div className='btns-container'>
             <button type="button" className='login-btn'>Login</button>
             <button type="button" className='signup-btn'>Sign-up</button>
        </div>
    </nav>
  )
}

export default Header
