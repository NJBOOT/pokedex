import React, { Component } from "react";
import Pokedex from "../Pokedex/Pokedex";

class Pokegame extends Component {
  state = {
    firstHand: [],
    secondHand: [],
    firstHandTotal: 0,
    secondHandTotal: 0,
  };

  shuffleArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  calculateExp = hand => {
    const total = hand.reduce((acc, el) => {
      return acc + el.base_experience;
    }, 0);
    return total;
  };

  initializeHands = () => {
    let array = [...this.props.data];
    let shuffled = this.shuffleArray(array);
    const handOne = shuffled.slice(0, 4);
    const handTwo = shuffled.slice(4);
    const handOneTotal = this.calculateExp(handOne);
    const handTwoTotal = this.calculateExp(handTwo);
    this.setState({
      firstHand: handOne,
      secondHand: handTwo,
      firstHandTotal: handOneTotal,
      secondHandTotal: handTwoTotal,
    });
  };

  componentDidMount() {
    this.initializeHands();
  }

  render() {
    return (
      <div className="Pokegame">
        <Pokedex
          cards={this.state.firstHand}
          totalExp={this.state.firstHandTotal}
          isWinner={this.state.firstHandTotal > this.state.secondHandTotal}
        />
        <Pokedex
          cards={this.state.secondHand}
          totalExp={this.state.secondHandTotal}
          isWinner={this.state.secondHandTotal > this.state.firstHandTotal}
        />
      </div>
    );
  }
}

export default Pokegame;
