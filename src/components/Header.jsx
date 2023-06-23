// eslint-disable-next-line react/prop-types
export function Header({Logo, score}){
return(
     <main className="main__container">
    <div className="main__title">
      <img src={Logo} alt="rock, paper scissors game" />
    </div>
    <div className="main__score">
      <span className="main__score--text">Score </span>
      <span className="main__score--total">{score}</span>
    </div>
  </main>
)   
}