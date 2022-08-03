import Hero from "../components/Hero";

import "../assets/styles/css/subscription.css";
import "../assets/styles/css/hero.css";
import Steps from "../components/Steps";
import ChoicesSingle from "../components/ChoiceSingle";
import Button from "../components/Button";
import { useState } from "react";

const Subscription = () => {
  const choicesLong = [
    {
      id: 'id-1',
      header: "How do you drink your coffee?",
      content: [
        {
          type: "Capsule",
          text: "Compatible with Nespresso systems and similar brewers",
        },
        {
          type: "Filter",
          text: "For pour over or drip methods like Aeropress, Chemex, and V60",
        },
        {
          type: "Espresso",
          text: "Dense and finely ground beans for an intense, flavorful experience",
        },
      ],
    },
    {
      id: 'id-2',
      header: "What type of coffee?",
      content: [
        {
          type: "Single Origin",
          text: "Distinct, high quality coffee from a specific family-owned farm",
        },
        {
          type: "Decaf",
          text: "Just like regular coffee, except the caffeine has been removed",
        },
        {
          type: "Blended",
          text: "Combination of two or three dark roasted beans of organic coffees",
        },
      ],
    },
    {
      id: 'id-3',
      header: "How much would you like?",
      content: [
        {
          type: "250g",
          text: "Perfect for the solo drinker. Yields about 12 delicious cups.",
        },
        {
          type: "500g",
          text: "Perfect option for a couple. Yields about 40 delectable cups.",
        },
        {
          type: "1000g",
          text: "Perfect for offices and events. Yields about 90 delightful cups.",
        },
      ],
    },
    {
      id: 'id-4',
      header: "Want us to grind them?",
      content: [
        {
          type: "Wholebean",
          text: "Best choice if you cherish the full sensory experience",
        },
        {
          type: "Filter",
          text: "For drip or pour-over coffee methods such as V60 or Aeropress",
        },
        {
          type: "Cafetiére",
          text: "Course ground beans specially suited for french press coffee",
        },
      ],
    },
    {
      id: 'id-5',
      header: "How often should we deliver?",
      content: [
        {
          type: "Every week",
          text: "$7.20 per shipment. Includes free first-class shipping.",
        },
        {
          type: "Every 2 weeks",
          text: "$9.60 per shipment. Includes free priority shipping.",
        },
        {
          type: "Every month",
          text: "$12.00 per shipment. Includes free priority shipping.",
        },
      ],
    },
  ];

  const choicesShort = [
    {
      id: "01",
      type: "Preferences",
    },
    {
      id: "02",
      type: "Bean Type",
    },
    {
      id: "03",
      type: "Quantity",
    },
    {
      id: "04",
      type: "Grind Option",
    },
    {
      id: "05",
      type: "Deliveries",
    },
  ];

  const [clickedID, setClickedID] = useState([]);

  const expandHandler = (event) => {

    let old = [...clickedID];

    setClickedID(() => {
      const index = old.indexOf(event.target.id);

      index ===  -1  ? old.push(event.target.id) : old.splice(index,1);

      return old;
    })

    
  }

  return (
    <main>
      <Hero
        className="hero__subscription"
        classNameHeader="hero__subscription-header"
        header="Create a plan"
        text="Build a subscription plan that best fits your needs. We offer an assortment of the best 
                artisan coffees from around the globe delivered fresh to your door."
      />
      <section className="plan">
        <Steps classNameHeader="plan__header" classNamePar="plan__text" />
      </section>
      <div className="plan__wrapper margin-fix">
        <div className="plan__container-left">
          {choicesShort.map((item) => (
            <div className="plan__item" key={item.id}>
              <p className="plan__item-number">{item.id}</p>
              <p className="plan__item-text">{item.type}</p>
            </div>
          ))}
        </div>
        <div className="plan__container-right">
          <section className="choices">
            {choicesLong.map((item) => (
              <div className="choices__container" key={item.id}>
                <div className="choices__row">
                  <h2 className={clickedID.includes(item.id) ? "choices__header choices__header-selected" : "choices__header"} id={item.id} onClick={expandHandler}>{item.header}</h2>
                </div>
                <div className={clickedID.includes(item.id) ? "choices__items choices__items-selected" : "choices__items"}>
                  {item.content.map((choice) => (
                    <ChoicesSingle
                      key={choice.type}
                      header={choice.type}
                      text={choice.text}
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>
          <section className="summary margin-fix">
            <div className="summary__content">
              <p className="summary__title">Order Summary</p>
              <p className="summary__summary">
                “I drink my coffee as{" "}
                <span className="summary__choice">Filter</span>, with a{" "}
                <span className="summary__choice">Decaf</span> type of bean.{" "}
                <span className="summary__choice">250g</span> ground ala{" "}
                <span className="summary__choice">Cafetiére</span>, sent to me{" "}
                <span className="summary__choice">Every Week</span>.”
              </p>
            </div>
            <Button>Create my plan!</Button>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Subscription;
