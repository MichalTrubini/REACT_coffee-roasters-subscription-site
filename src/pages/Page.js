import { Route, Routes } from "react-router-dom";
import React, { Suspense, useContext } from "react";

import Footer from '../layout/Footer';
import Header from "../layout/Header";
import MobileMenu from "../layout/MobileMenu";

import hamburger from '../assets/images/shared/mobile/icon-hamburger.svg';
import close from '../assets/images/shared/mobile/icon-close.svg';
import OrderSummary from "../components/OrderSummary";
import {useSelector} from 'react-redux';

import SiteContext from "../services/context/site-context";

const Page = () => {

    //const {showMenu} = useContext(SiteContext);
    const {showSummary} = useContext(SiteContext);
    const showMenu = useSelector(state => state.visibility.showElement);

    showMenu === true ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
    //showSummary === true ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
  
    const Home = React.lazy(() => import('./Home'));
    const About = React.lazy(() => import('./About'));
    const Subscription = React.lazy(() => import('./Subscription'));

    return ( 
        <Suspense fallback={<p>Loading...</p>}>
            <div className="page">
                {showMenu && <MobileMenu src={close}/>}
                {showSummary && <OrderSummary/>}
                {!showMenu&& <Header src={hamburger} className={showSummary && 'header__position-fix'}/>}
                <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/subscription" element={<Subscription />}></Route>
                </Routes>
                <Footer />
            </div>
        </Suspense>
     );
};

export default React.memo(Page);