import React, { useState, useEffect } from "react";
import './CardList.css'
 
const apiURL = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY


export default function CardList() {
    const [data, setData] = useState(null)
  
    useEffect(() => {
      async function getStuff() {
        let res = await fetch(`${apiURL}?page=${1}&page_size=40&key=${apiKey}`)
        let json = await res.json()
        console.log(json)
        res = await fetch(`${apiURL}?page=${2}&page_size=40&key=${apiKey}`)
        let update = await res.json()
        json.results.push(...update.results)
        res = await fetch(`${apiURL}?page=${3}&page_size=40&key=${apiKey}`)
        update = await res.json()
        json.results.push(...update.results)
        res = await fetch(`${apiURL}?page=${4}&page_size=40&key=${apiKey}`)
        update = await res.json()
        json.results.push(...update.results)
        res = await fetch(`${apiURL}?page=${5}&page_size=40&key=${apiKey}`)
        update = await res.json()
        json.results.push(...update.results)
        res = await fetch(`${apiURL}?page=${6}&page_size=40&key=${apiKey}`)
        update = await res.json()
        json.results.push(...update.results)
        res = await fetch(`${apiURL}?page=${7}&page_size=40&key=${apiKey}`)
        update = await res.json()
        json.results.push(...update.results)
        res = await fetch(`${apiURL}?page=${8}&page_size=40&key=${apiKey}`)
        update = await res.json()
        json.results.push(...update.results)
        res = await fetch(`${apiURL}?page=${9}&page_size=40&key=${apiKey}`)
        update = await res.json()
        json.results.push(...update.results)
        res = await fetch(`${apiURL}?page=${10}&page_size=40&key=${apiKey}`)
        update = await res.json()
        json.results.push(...update.results)
        console.log(json)
        setData(json)
      }
    getStuff()
  },[]);

    return (
      <section className="CardList">
      {data === null? "loading..." : data.results.map((game) => {
          return <section>
            <img src={game.background_image} alt="game"/>
            <p className="name">{game.name}</p>
            <p className="rating">Rating: {game.rating}</p>
            <p className="released">{game.released}</p>
            </section>
        })}
      </section>
    );
    
  }
  