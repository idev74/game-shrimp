import '../App.css'
import './CardList.css'

export default function CardList({game}) {
  const {id, background_image, name, rating, released} = game

    return (
      <section className="mx-auto grid grid-cols-1 gap-4 max-w-xl p-10 text-white">
        <div className="bg-gradient-to-br from-purple-900 to-teal-700 rounded-lg shadow-lg overflow-hidden w-full h-48 transition-all transform hover:scale-105 hover:bg-aquamarine-500">
            <img src={background_image} className="pic" alt={name}/>
        </div>
            <p className="name"><strong>{name}</strong></p>
            <p className="rating"><strong>Rating: </strong>{rating}</p>
            <p className="released">{released}</p>
      </section>
    );
  }
  