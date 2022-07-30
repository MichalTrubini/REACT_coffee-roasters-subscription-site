import logo from '../assets/images/shared/desktop/logo.svg';
import hamburger from '../assets/images/shared/mobile/icon-hamburger.svg';

import '../assets/styles/css/header.css'

const Header = () => {
    return ( 
        <header className="header padding">
            <nav className="header__nav">
                <a href='/'><img src={logo} alt="coffeeroasters" className='header__logo'/></a>
                <img src={hamburger} alt="menu"/>
            </nav>
        </header>
     );
}
 
export default Header;