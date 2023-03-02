import { useParams } from "react-router-dom";
import './CardDetails.css'

export default function CardDetails({ data }) {
    const { id } = useParams()
    const game = data.results.filter((game) => {
        return game.id == id
    })[0]

    return (
        <section className="CardDetails">
            {game === null ? "loading..." :
                (<div>
                    <p className="title">{game.name} Details</p>
                    <img src={game.background_image} alt="game" />
                    <section className="CardDetails">
                        <a href="https://store.steampowered.com/">
                            <img src="https://cdn-icons-png.flaticon.com/512/3670/3670382.png" alt="steam" />
                        </a>

                        <a href="https://www.playstation.com/en-us/">
                            <img src="https://cdn-icons-png.flaticon.com/512/1241/1241001.png" alt="ps" />
                        </a>

                        <a href="https://www.xbox.com/en-us/">
                            <img src="https://cdn-icons-png.flaticon.com/512/250/250562.png" alt="xbox" />
                        </a>
                    </section>
                </div>)}
        </section>
    )
};
