import { Link } from 'react-router-dom';
import '../assets/styles/css/mobileMenu.css';
import Header from './Header';

const MobileMenu = (props) => {
    return ( 
        <>
        <div className="mobile-menu">
            <Header src={props.src} ShowMenuHandler={props.ShowMenuHandler}/>
            <ul className='mobile-menu__list'>
                <Link to={'/'} className='mobile-menu__list-item' onClick={props.ShowMenuHandler}>Home</Link>
                <Link to={'/about'} className='mobile-menu__list-item' onClick={props.ShowMenuHandler}>About Us</Link>
                <Link to={'/subscription'} className='mobile-menu__list-item' onClick={props.ShowMenuHandler}>Create Your Plan</Link>
            </ul>
        </div>
        <div className='mobile-menu__overlay'></div>
        </>

     );
}
 
export default MobileMenu;