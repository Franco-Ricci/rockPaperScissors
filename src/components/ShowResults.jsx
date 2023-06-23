// eslint-disable-next-line react/prop-types
export function ShowResults({results, colorUser,colorPc,userImgChosen,pcImgChosen,playAgain}){
    return(
        <div className="chosen__container">
        {" "}
        <div className="chosen__match">
          <div className="chosen__user">
            <p className="chosen__text">You picked</p>

            <div
              className={
                results == "you win"
                  ? `chosen__winner--${colorUser}`
                  : `chosen__${colorUser}`
              }
            >
              <img src={userImgChosen} />
            </div>
          </div>

          <div className="chosen__result">
            <p>{results}</p>
          </div>
          <div className="chosen__pc">
            <p className="chosen__text">the house picked</p>
            <div
              className={
                results == "you lose"
                  ? `chosen__winner--${colorPc}`
                  : `chosen__${colorPc}`
              }
            >
              <img src={pcImgChosen} />
            </div>
          </div>
        </div>
        <div className="chosen__result--mobile">
            <p>{results}</p>
          </div>
        <button className="chosen__btn" onClick={() => playAgain(null)}>
          Play again
        </button>
      </div>
    )
}