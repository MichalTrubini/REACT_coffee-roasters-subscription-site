import '../assets/styles/css/hero.css';
import Button from './Button';

const Hero = (props) => {

    return ( 
        <section className='hero margin-fix'>
            <div className={props.className}>
                <h1 className="hero__header">{props.header}</h1>
                <p className="hero__text">{props.text}</p>
                {<Button>Create your plan</Button>}
            </div>
        </section>
     );
}
 
export default Hero;