

// eslint-disable-next-line react/prop-types
export function BonusMode({ rock, paper, scissors, lizard, spock, yourChoice }) {
    return(

  <div className="pick__container">
    <div className="pick__background--pentagon">
     
    <div className="pick__BonusRock" onClick={() => yourChoice("rock")}>
      <img src={rock} alt="rock" />
    </div>
    <div className="pick__BonusPaper" onClick={() => yourChoice("paper")}>
      <img src={paper} alt="paper" />
    </div>
    <div className="pick__BonusScissors" onClick={() => yourChoice("scissors")}>
      <img src={scissors} alt="scissors" />
    </div>
    <div className="pick__BonusLizard" onClick={() => yourChoice("lizard")}>
      <img src={lizard} alt="lizard" />
    </div>
    <div className="pick__BonusSpock" onClick={() => yourChoice("spock")}>
      <img src={spock} alt="spock" />
    </div>
    </div>
  </div>
    )
}
