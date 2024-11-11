import React from "react";
import "../App.css";

function Cards({characters = []}) {
    console.log("Personajes recibidos en Cards:", characters);
    return(
        <div>
            <div className="header">
                <h1 className="cardTitle">Personajes de Rick and Morty</h1>
            </div>
            <div className="main">
                {characters.map((character, index) => (
                    <div key={index} className="characterCard">
                        <img className="img" src={character.image} alt={character.name} />
                        <div className="characterInfo">
                            <h2>{character.name}</h2>
                            <p>Species: {character.species}</p>
                            <p>Status: {character.status}</p>
                            <p>Género: {character.gender}</p>
                        </div>
                    </div>
                ))}
            </div> 
            <footer>
                
            </footer>
        </div>
    )
}

export default Cards