import React from "react";
import "./App.css";
import update from "immutability-helper";
import Room from "./components/Room";
import Intro from "./components/Intro";
import Start from "./components/Start";
import CharacterSelection from "./components/CharacterSelection";

class App extends React.Component {
  state = {
    currentScreen: "room",
    playerName: "",
    gender: ""
  };

  switchScreen(destination, props) {
    let newScreen, newProps;
    switch (destination) {
      case "start":
        newScreen = "start";
        break;
      case "characterSelection":
        newScreen = "characterSelection";
        break;
      case "intro":
        if (props.name && props.gender) {
          newScreen = "intro"
          newProps = {playerName: props.name, gender: props.gender}
        }
        break;
      case "room":
        newScreen = "room";
        break;
      case "end":
        break;
    }
    if (newScreen) {
      this.setState({ currentScreen: newScreen, ...newProps });
    }
  }

  // handleStart() {
  //   this.setState({ currentScreen: "characterSelection" });
  // }

  // handleIntroStart(gender, name) {
  //   if (gender && name) {
  //     this.setState({
  //       currentScreen: "intro",
  //       playerName: name,
  //       gender: gender
  //     });
  //   } else {
  //     console.log("missing information");
  //   }
  // }

  // handleIntroEnd() {
  //   this.setState({ currentScreen: "room" });
  // }

  render() {
    return (
      <div className="App">
        {this.state.currentScreen == "start" ? (
          <Start nextScreen={() => this.switchScreen("characterSelection")} />
        ) : null}
        {this.state.currentScreen == "characterSelection" ? (
          <CharacterSelection
            nextScreen={(gender, name) => this.switchScreen("intro", {gender, name})}
          />
        ) : null}
        {this.state.currentScreen == "intro" ? (
          <Intro
            playerName={this.state.playerName}
            nextScreen={() => this.switchScreen("room")}
          />
        ) : null}
        {this.state.currentScreen == "room" ? (
          <Room playerName={this.state.playerName} gender={this.state.gender} />
        ) : null}
      </div>
    );
  }
}

export default App;
