
import Triangle from "../../public/images/bg-triangle.svg";
// eslint-disable-next-line react/prop-types
export function ClassicMode({rock,paper,scissors,yourChoice}) {
  return (
    <div className="pick__container">
    <div className="pick__background">
      <img className="triangle" src={Triangle} />
    </div>
    <div className="pick__rock" onClick={() => yourChoice("rock")}>
      <img src={rock} alt="rock" />
    </div>
    <div className="pick__paper" onClick={() => yourChoice("paper")}>
      <img src={paper} alt="paper" value="paper" />
    </div>
    <div className="pick__scissors" onClick={() => yourChoice("scissors")}>
      <img src={scissors} alt="scissors" value="scissors" />
    </div>
  </div>
  )
}

