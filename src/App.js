import { useState } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import MobileMenu from "./layout/MobileMenu";
import Home from "./pages/Home";

import hamburger from './assets/images/shared/mobile/icon-hamburger.svg';
import close from './assets/images/shared/mobile/icon-close.svg';

function App() {
  
  const [showMenu, setShowMenu] = useState(false);

  const ShowMenuHandler = () => {
    setShowMenu(prevValue => !prevValue)
  }

  showMenu === true ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";

  return (

    <>
      {showMenu && <MobileMenu src={close} ShowMenuHandler={ShowMenuHandler}/>}
      <Header src={hamburger} ShowMenuHandler={ShowMenuHandler}/>
      <Home />
      <Footer />
    </>
  
  );
}

export default App;
