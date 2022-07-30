import logo from "../assets/images/shared/desktop/logo-light.svg";
import facebook from "../assets/images/shared/desktop/icon-facebook.svg";
import twitter from "../assets/images/shared/desktop/icon-twitter.svg";
import instagram from "../assets/images/shared/desktop/icon-instagram.svg";

import "../assets/styles/css/footer.css";

const Footer = () => {
  const menuItems = ["home", "about us", "create your plan"];

  return (
    <footer className="footer padding">
      <div className="footer__container ">
        <img src={logo} alt="coffeeroasters" className="footer__logo" />
        <ul className="footer__list">
          {menuItems.map((item) => (
            <li className="footer__list-item">{item}</li>
          ))}
        </ul>
        <div className="footer__social">
          <img src={facebook} alt="facebook" className="fotter__social-icon" />
          <img src={twitter} alt="twitter" className="fotter__social-icon" />
          <img
            src={instagram}
            alt="instagram"
            className="fotter__social-icon"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
