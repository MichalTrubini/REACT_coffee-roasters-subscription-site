import '../assets/styles/css/hero.css';
import Button from './Button';

const Hero = (props) => {

    const location = window.location.pathname === '/';

    return (
        <section className='hero margin-fix'>
            <div className={props.className + ' hero__main'}>
                <h1 className={props.classNameHeader}>{props.header}</h1>
                <p className="hero__text">{props.text}</p>
                {location && <Button classNameButton="button__hero">Create your plan</Button>}
            </div>
        </section>
     );
}
 
export default Hero;