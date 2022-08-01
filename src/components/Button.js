import '../assets/styles/css/button.css';

const Button = (props) => {
    return ( 
        <button className={props.classNameButton + " button"}>{props.children}</button>
     );
}
 
export default Button;