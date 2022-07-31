import logo from "../assets/images/shared/desktop/logo-light.svg";
import facebook from "../assets/images/shared/desktop/icon-facebook.svg";
import twitter from "../assets/images/shared/desktop/icon-twitter.svg";
import instagram from "../assets/images/shared/desktop/icon-instagram.svg";

import { Link } from 'react-router-dom';

import "../assets/styles/css/footer.css";

const Footer = () => {
  const menuItems = [
    {
      page: 'home',
      path: '/'
    },
    {
      page: 'about us',
      path: '/about'
    },
    {
      page: 'create your plan',
      path: '/subscription'
    }
  ]

  return (
    <footer className="footer margin-fix">
      <div className="footer__container ">
        <img src={logo} alt="coffeeroasters" className="footer__logo" />
        <ul className="footer__list">
          {menuItems.map((item) => (
            <Link to={item.path} key={item.page} className="footer__list-item">
              {item.page}
            </Link>
          ))}
        </ul>
        <div className="footer__social">
          <img src={facebook} alt="facebook" className="footer__social-icon" />
          <img src={twitter} alt="twitter" className="footer__social-icon" />
          <img
            src={instagram}
            alt="instagram"
            className="footer__social-icon"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
