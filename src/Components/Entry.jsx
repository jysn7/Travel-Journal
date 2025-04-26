export default function Entry(props){
    return(
        <section>
            <div className="image-container">
                <img className="image"
                src={props.entry.img.src}
                alt={props.entry.img.alt} />
            </div>
            <div className="text">
                <div className="location">
                    <div className="place">
                        <img src="src\assets\location.png" alt="pin image" />
                        <span>{props.entry.country}</span>
                    </div>
                    <a href={props.entry.link}>View on Google Maps</a>
                </div>
                <h1 className="title">{props.entry.title}</h1>
                <h2 className="date">{props.entry.date}</h2>
                <p className="info">
                    {props.entry.text}
                </p>
            </div>
        </section>
        
    )
}