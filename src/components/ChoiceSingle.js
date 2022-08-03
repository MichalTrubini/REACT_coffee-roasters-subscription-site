const ChoiceSingle = (props) => {
    return ( 
        <div className="choices__card">
            <h3 className="choices__card-header">{props.header}</h3>
            <p className="choices__card-text">{props.text}</p>
        </div>
     );
}
 
export default ChoiceSingle;