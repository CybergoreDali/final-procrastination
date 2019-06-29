import React, { Component } from "react";
import BedSvg from "./SVGs/BedSvg";
import Moonlight from "./Moonlight";
import bedSideMask from "./Masks/bed-mask-side-bw.png";
import bedTopMask from "./Masks/bed-mask-top-bw.png";
import Player from "./Player"

class Bed extends Component {
  render() {
    const { onClick, hasPlayer, time } = this.props;
    let sleepSlower = 20

    return (
      <div className={"bed"}>
        {hasPlayer ? (
            <Player gender={"boy"} action={"sleep"} tiredness={"rested"} />
        //   <img
        //     src={time % sleepSlower > sleepSlower / 2 ? sleepgirl1 : sleepgirl2}
        //     className={"bed-girl"}
        //   />
        ) : null}
        <Moonlight time={time} mask={bedTopMask} selector={"bed-top"} />
        <Moonlight
          time={time}
          mask={bedSideMask}
          selector={"bed-side"}
          vertical={true}
        />
        <Moonlight
          time={time}
          mask={bedSideMask}
          selector={"bed-side"}
          vertical={true}
        />
        <BedSvg onClick={onClick} />
      </div>
    );
  }
}

export default Bed;
