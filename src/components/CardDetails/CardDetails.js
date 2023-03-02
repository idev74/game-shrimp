import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './CardDetails.css'

// export default function CardDetails({ data }) {
//     const { id } = useParams()
//     console.log(id)
//     let [game, setGame] = useState(null)

//     useEffect(() => {
//         if (data !== null) {
//             console.log(data)
//         } else {
//             console.log("ERROR")
//         }
//         setGame(data?.results.filter((game) => {
//             console.log(game)
//             return game.id === id
//         }))
//     }, [ data, id ])


//     return (
//         <section className="CardDetails">
//             <p>Hi</p>
//             {game === null ? "loading..." : 
//             (<div>
//                 <img src={game.background_image} alt="game" />
//                 <p className="name">{game.name}</p>
//                 <p className="rating">Rating: {game.rating}</p> 
//             </div> )}
//         </section>
//     )
// };

export default function CardDetails() {
    return(
        <section className="CardDetails">
            <h2>Check Out More Here!</h2>
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
    )
}