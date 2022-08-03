import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import MobileMenu from "./layout/MobileMenu";

import hamburger from './assets/images/shared/mobile/icon-hamburger.svg';
import close from './assets/images/shared/mobile/icon-close.svg';

function App() {
  
  const [showMenu, setShowMenu] = useState(false);

  const ShowMenuHandler = () => {
    setShowMenu(prevValue => !prevValue)
  }

  showMenu === true ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";

  const Home = React.lazy(() => import('./pages/Home'));
  const About = React.lazy(() => import('./pages/About'));
  const Subscription = React.lazy(() => import('./pages/Subscription'));

  return (

    <Suspense fallback={<p>Loading...</p>}>
      <div className="page">
        {showMenu && <MobileMenu src={close} ShowMenuHandler={ShowMenuHandler}/>}
        <Header src={hamburger} ShowMenuHandler={ShowMenuHandler}/>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/subscription" element={<Subscription />}></Route>
          </Routes>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
