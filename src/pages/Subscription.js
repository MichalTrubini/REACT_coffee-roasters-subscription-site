import Hero from "../components/Hero";

import '../assets/styles/css/subscription.css';
import '../assets/styles/css/hero.css';
import Steps from "../components/Steps";

const Subscription = () => {
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
                <Steps classNameHeader="plan__header" classNamePar="plan__text"/>
            </section>

        </main>
     );
}
 
export default Subscription;