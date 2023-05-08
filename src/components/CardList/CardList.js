import React, { useState } from 'react'
import '../App.css'

export default function CardList({ game }) {
  const { background_image, name, rating } = game

  const esrb = game.esrb_rating === null ? 'Not Rated' : game.esrb_rating.name
  const gameTitle = name.length > 45 ? name.slice(0, 40) + '...' : name

  return (
    <section className="m-4 h-[400px] rounded-md text-white bg-sky-800 shadow-lg shadow-cyan-300/75 outline outline-offset-2 outline-1">
      <div className="h-[60%] w-full">
        <img className="object-cover w-full h-full object-top rounded-t-md" src={background_image} alt={name} />
      </div>
      <div className="px-3 py-2">
        <p id="gameTitle" className="font-medium text-2xl">{gameTitle}</p>
        <p className="text-lg"><strong>Rating: </strong>{rating}</p>
        <button className="bg-gray-700 text-white font-bold py-1 px-4 rounded-full mt-3 mb-2 outline outline-offset-2 outline-1">{esrb}</button>
      </div>
    </section>
  );
}
