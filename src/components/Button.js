import React from 'react';

import '../assets/styles/css/button.css';

const Button = (props) => {
    return ( 
        <div className={props.classNameButton + " button"} onClick={props.onClick}>{props.children}</div>
     );
}
 
export default React.memo(Button);