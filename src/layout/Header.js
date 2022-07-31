import logo from '../assets/images/shared/desktop/logo.svg';
import { Link } from 'react-router-dom';

import '../assets/styles/css/header.css'

const Header = (props) => {
    return ( 
        <header className="header margin-fix">
            <nav className="header__nav">
                <Link to={'/'}><img src={logo} alt="coffeeroasters" className='header__logo'/></Link>
                <img className='header__hamburger' src={props.src} alt="menu" onClick={props.ShowMenuHandler}/>
                <ul className='header__list'>
                    <Link to={'/'} className='header__list-item'>Home</Link>
                    <Link to={'/about'} className='header__list-item'>About Us</Link>
                    <Link to={'/subscription'} className='header__list-item'>Create Your Plan</Link>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;