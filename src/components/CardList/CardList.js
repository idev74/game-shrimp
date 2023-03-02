import '../App.css'
import './CardList.css'

export default function CardList({game}) {
  const {id, background_image, name, rating, released, stores, publishers, genres, esrb_rating} = game



    return (
      <section className="CardList">
        <div className='GameImage'>
            <img src={background_image} className="pic" alt="game"/>
        </div>
            <p className="name"><strong>{name}</strong></p>
            <p className="rating"><strong>Rating: </strong>{rating}</p>
            <p className="released">{released}</p>
      </section>
    );
    
  }
  