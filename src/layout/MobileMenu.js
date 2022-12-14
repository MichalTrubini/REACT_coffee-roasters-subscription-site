import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/css/mobileMenu.css';
import Header from './Header';

import {useDispatch} from 'react-redux';
import { visibilityActions } from '../store';

const MobileMenu = (props) => {

    const dispatch = useDispatch();

    const showMenuHandler = () => {
        dispatch (visibilityActions.isVisible())
    }

    return ( 
        <>
            <div className="mobile-menu">
                <Header src={props.src}/>
                <ul className='mobile-menu__list'>
                    <li><Link to={'/'} className='mobile-menu__list-item' onClick={showMenuHandler}>Home</Link></li>
                    <li><Link to={'/about'} className='mobile-menu__list-item' onClick={showMenuHandler}>About Us</Link></li>
                    <li><Link to={'/subscription'} className='mobile-menu__list-item' onClick={showMenuHandler}>Create Your Plan</Link></li>
                </ul>
            </div>
            <div className='mobile-menu__overlay'></div>
        </>
     );
}
 
export default React.memo(MobileMenu);