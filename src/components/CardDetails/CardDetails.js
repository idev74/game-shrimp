import { useParams } from "react-router-dom";
import App from "../App";
import './CardDetails.css'

export default function CardDetails({ data }) {
    const apiURL = process.env.REACT_APP_API_URL
    const apiKey = process.env.REACT_APP_API_KEY
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
                    <p className="name"><strong>ESRB Rating: </strong>{apiURL}</p>
                    <p className="rating">Rating: {}</p>
                </div>)}
        </section>
    )
};
