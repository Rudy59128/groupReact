function Destination(props) {
    return (
        <section className="destinationCard">
            <img src={props.destination.imgSrc}
            alt={props.destination.name}
            className="destinationImg"
            />
            <h1>{props.destination.name}</h1>
            <p className="weather">
            {props.destination.weather}
            </p>
            <p className="food">
            {props.destination.food}
            </p>
        </section>
    );
}

export default Destination;