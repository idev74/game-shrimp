import '../App.css'

export default function CardList({ game }) {
  const { id, background_image, name, rating, released } = game

  return (
    <section className="m-4 h-[400px] rounded-md text-white bg-gradient-to-br from-purple-900 to-teal-700 shadow-lg">
      <div className="h-[60%] w-full">
        <img className="object-cover w-full h-full object-top rounded-t-md" src={background_image} alt={name} />
      </div>
      <div className='px-3 py-2'>
        <p className="name"><strong>{name}</strong></p>
        <p className="rating"><strong>Rating: </strong>{rating}</p>
        <p className="released">{released}</p>
      </div>
    </section>
  );
}
