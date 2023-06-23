/* eslint-disable react/prop-types */
export function Footer({btnRules, modeGame}){
  return  (
        <footer className="footer__container">
        <div className="footer__btn--content">
          <button className="footer__btn" onClick={btnRules}>
            Rules
          </button>
          <button className="footer__btn" onClick={modeGame}>
            Mode
          </button>
        </div>

        <div className="footer__attr">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Franco Ricci</a>.
        </div>
      </footer>
    )
}