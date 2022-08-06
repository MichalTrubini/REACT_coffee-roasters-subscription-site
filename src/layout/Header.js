import React from 'react';
import {useDispatch} from 'react-redux';
import { visibilityActions } from '../store';

import logo from '../assets/images/shared/desktop/logo.svg';
import { Link } from 'react-router-dom';

import '../assets/styles/css/header.css'

const Header = (props) => {
   
    const dispatch = useDispatch();

    const showMenuHandler = () => {
        dispatch (visibilityActions.isVisible())
    }

    return ( 
        <header className={props.className + " header"}>
            <nav className="header__nav">
                <Link to={'/'}><img src={logo} alt="coffeeroasters" className='header__logo'/></Link>
                <img className='header__hamburger' src={props.src} alt="menu" onClick={showMenuHandler}/>
                <ul className='header__list'>
                    <li><Link to={'/'} className='header__list-item'>Home</Link></li>
                    <li><Link to={'/about'} className='header__list-item'>About Us</Link></li>
                    <li><Link to={'/subscription'} className='header__list-item'>Create Your Plan</Link></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default React.memo(Header);