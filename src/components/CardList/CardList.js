import '../App.css'
import './CardList.css'

export default function CardList({game}) {
  const {id, background_image, name, rating, released, stores, publishers, genres, esrb_rating} = game

    return (
      <section className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-pink-300 dark:border-gray-700">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={background_image} className="pic" alt="game"/>
        </div>
            <p className="name"><strong>{name}</strong></p>
            <p className="rating"><strong>Rating: </strong>{rating}</p>
            <p className="released">{released}</p>

      </section>
    );
  }
  