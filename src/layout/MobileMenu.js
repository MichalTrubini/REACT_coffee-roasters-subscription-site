import '../assets/styles/css/mobileMenu.css';
import Header from './Header';

const MobileMenu = (props) => {
    return ( 
        <>
        <div className="mobile-menu">
            <Header src={props.src} ShowMenuHandler={props.ShowMenuHandler}/>
            <ul className='mobile-menu__list'>
                <li className='mobile-menu__list-item'>Home</li>
                <li className='mobile-menu__list-item'>About Us</li>
                <li className='mobile-menu__list-item'>Create Your Plan</li>
            </ul>
        </div>
        <div className='mobile-menu__overlay'></div>
        </>

     );
}
 
export default MobileMenu;