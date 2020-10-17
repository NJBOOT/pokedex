import React, { Component } from "react";
import "./Pokedex.css";
import PokeCard from "../Pokecard/Pokecard";

class Pokedex extends Component {
  // transformId = id => {
  //   let OldId = id.toString();
  //   let newId;
  //   switch (OldId.length) {
  //     case 1:
  //       newId = "00" + OldId;
  //       break;
  //     case 2:
  //       newId = "0" + OldId;
  //       break;
  //     default:
  //       newId = OldId;
  //       break;
  //   }
  //   return newId;
  // };

  padNumber = number => (number <= 999 ? `00${number}`.slice(-3) : number);

  render() {
    const { cards, totalExp, isWinner } = this.props;
    const message = isWinner ? (
      <h1 className="Pokedex-message winner">
        Total Experience: {totalExp} WINS!
      </h1>
    ) : (
      <h1 className="Pokedex-message loser">
        Total Experience: {totalExp} LOSES!
      </h1>
    );

    return (
      <div className="Pokedex">
        <div className="Pokedex-cards">
          {cards.map(el => (
            <PokeCard
              id={el.id}
              key={el.id}
              name={el.name}
              image={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.padNumber(
                el.id
              )}.png`}
              type={el.type}
              exp={el.base_experience}
            />
          ))}
        </div>
        {message}
      </div>
    );
  }
}

export default Pokedex;
