import logo from '../assets/images/shared/desktop/logo.svg';
import hamburger from '../assets/images/shared/mobile/icon-hamburger.svg';

import '../assets/styles/css/header.css'

const Header = () => {
    return ( 
        <header className="header margin-fix">
            <nav className="header__nav">
                <a href='/' ><img src={logo} alt="coffeeroasters" className='header__logo'/></a>
                <img className='header__hamburger' src={hamburger} alt="menu"/>
                <ul className='header__list'>
                    <li className='header__list-item'>Home</li>
                    <li className='header__list-item'>About Us</li>
                    <li className='header__list-item'>Create Your Plan</li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;