/* eslint-disable react/prop-types */
export function RulesModal({mode, imgRules, rulesBonus, setRules}){
    return(
    <div className="rules__modal">
        <div className="rules__container">
          <div className="rules__title">
            <h2>Rules</h2>
            <h2 className="rules__close" onClick={() => setRules(null)}>
              X
            </h2>
          </div>
          <img src={mode ? imgRules : rulesBonus} alt="rules" />
        </div>
      </div>
    )
}