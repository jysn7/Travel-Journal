import Entry from "./Components/Entry"
import Header from "./Components/Header"
import data from "./data"


export default function App(){
    const entryElement = data.map((id) => {
        return ( 
            <Entry 
                key={id.id}
                entry={id}
                // img={id.img}
                // country={id.country}
                // title={id.title}
                // link={id.link}
                // date={id.date}
                // text={id.text}
            />
        )
    })
    return(
        <>
            <Header />
            {entryElement}
        </> 
    )
}

{/* <Entry 
                img={{
                    src: "src\assets\Rectangle 77.png",
                    alt: "Mount Fuji"
                }}
                country="JAPAN" 
                title="Mount Fuji"
                link="https://g.co/kgs/vMEmS2Q"
                date="12 Jan, 2023 - 24 Jan, 2023"
                text="Mount Fuji is the tallest mountain in Japan, 
                    standing at 3,776 meters (12,380 feet). Mount 
                    Fuji is the single most popular tourist site in 
                    Japan, for both Japanese and foreign tourists."
            /> */}