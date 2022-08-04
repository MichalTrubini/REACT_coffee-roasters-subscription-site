import React from 'react';

import '../assets/styles/css/button.css';

const Button = (props) => {
    return ( 
        <button className={props.classNameButton + " button"} onClick={props.onClick}>{props.children}</button>
     );
}
 
export default React.memo(Button);