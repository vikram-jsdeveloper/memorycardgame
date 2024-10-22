function Card(props){
    const {item, id, handleClick} = props;
    const itemClass = item.stat ? " active " + item.stat : "";

    return (
        <div className={"card" + itemClass} onClick={() => handleClick(id)}>
            <img src={item.img} alt={id} />
        </div>
    );
}

export default Card;