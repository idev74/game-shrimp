import React, { useState, useEffect } from "react";
import './CardList.css'
import CardLayout from "../CardLayout/CardLayout";

const apiUrl="https://api.rawg.io/api/games?key=32de51e296df41328d00a906b8ce6b29"

export default function CardList() {
    const [data, setData] = useState(null)
  
    useEffect(() => {
      async function getStuff() {
        const res = await fetch(apiUrl)
        const json = await res.json()
        console.log(json)
        setData(json)
      }
    getStuff()
  },[]);

    return (
        <>
      <div className="CardList">
        {data === null? "loading..." : data.results.map((game) => {
          return <p>{game.name}</p>
        })}
      </div>
      <CardLayout />
        </>
      
    );
  }
  