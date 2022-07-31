import Hero from "../components/Hero";

import '../assets/styles/css/about.css';
import '../assets/styles/css/hero.css';

import commitment from '../assets/images/about/mobile/image-commitment.jpg';
import quality from '../assets/images/about/mobile/image-quality.jpg';

const About = () => {

    const locations = [
        {
            id: 1,
            src: './images/about/desktop/illustration-uk.svg',
            country: 'United Kingdom',
            street: '68 Asfordby Rd',
            city: 'Alcaston',
            zip: 'SY6 1YA',
            phone: '+44 1241 918425'
        },
        {
            id: 2,
            src: './images/about/desktop/illustration-canada.svg',
            country: 'Canada',
            street: '1528 Eglinton Avenue',
            city: 'Toronto  Ontario',
            zip: 'M4P 1A6',
            phone: '+1 416 485 2997'
        },
        {
            id: 3,
            src: './images/about/desktop/illustration-australia.svg',
            country: 'Australia',
            street: '36 Swanston Street',
            city: 'Kewell',
            zip: 'Victoria',
            phone: '+61 4 9928 3629'
        }
    ]

    return ( 
        <main>
            <Hero 
                className="hero__about"
                header="About us"
                text="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
            />
            <section className='commitment margin-fix'>
                <div className='commitment__img-container'>
                    <img src={commitment} alt='commitment' className="commitment__img"/>
                </div>
                <div className="commitment__content">
                    <h2 className="commitment__header">Our commitment</h2>
                    <p className="commitment__text">We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
                </div>
            </section>
            <section className="quality margin-fix">
                <img src={quality} alt='quality' className="quality__img"/>
                <div className="quality__content">
                    <h2 className="quality__header">Uncompromising quality</h2>
                    <p className="quality__text">Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
                </div>
            </section>
            <section className="locations margin-fix">
                <h2 className="locations__header">Our headquarters</h2>
                <div className="locations__items">
                    {locations.map(item => 
                        <div className="locations__item" key={item.id}>
                            <img className="locations__img" src={item.src} alt={item.country} />
                            <h3 className="locations__item-header">{item.country}</h3>
                            <div className="locations__address-container">
                                <p className="locations__item-address">{item.street}</p>
                                <p className="locations__item-address">{item.city}</p>
                                <p className="locations__item-address">{item.zip}</p>
                                <p className="locations__item-address">{item.phone}</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
     );
}
 
export default About;