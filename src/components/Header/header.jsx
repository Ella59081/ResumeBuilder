import './header.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <>
        <nav>
            <Link to="/" className='logo'  href=""><img src="/src/assets/images/logo-resume-now.svg" alt="" /></Link>
            <div className='links'>
            <a href="">Contact us</a>
            <a href="">Login</a>
            </div>
        </nav>
        </>
    )
}

export default Header
