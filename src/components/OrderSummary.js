import Button from "./Button";

import "../assets/styles/css/orderSummary.css";
import useWindowDimensions from "../services/functions/WindowDimensions";
import React, { useContext } from "react";
import SiteContext from "../services/context/site-context";

const OrderSummary = (props) => {
  const price = "$14.00 / mo";

  const { width } = useWindowDimensions();

  const tabletScreen = width > 767;

  const {checkoutHandler} = useContext(SiteContext);

  return (
    <div className="order-summary">
      <div className="order-summary__overlay"></div>
      <div className="order-summary__container">
        <h2 className="order-summary__header">Order Summary</h2>
        <div className="order-summary__wrapper">
          <p className="order-summary__summary">
            “I drink my coffee as{" "}
            <span className="order-summary__choice">Filter</span>, with a{" "}
            <span className="order-summary__choice">Decaf</span> type of bean.{" "}
            <span className="order-summary__choice">250g</span> ground ala{" "}
            <span className="order-summary__choice">Cafetiére</span>, sent to me{" "}
            <span className="order-summary__choice">Every Week</span>.”
          </p>
          <p className="order-summary__notice">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <div className="order-summary__checkout">
            {tabletScreen && <p className="order-summary__price">{price}</p>}
            <Button onClick={checkoutHandler} classNameButton="order-summary__button">{tabletScreen ? "Checkout" : "Checkout-" + price}</Button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default React.memo(OrderSummary);
