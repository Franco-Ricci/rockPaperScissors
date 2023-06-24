import "./index.css";
// import svg from "./assets/react-svg"
import Logo from "../public/images/logo.svg";
import rock from "../public/images/icon-rock.svg";
import paper from "../public/images/icon-paper.svg";
import scissors from "../public/images/icon-scissors.svg";
import lizard from "../public/images/icon-lizard.svg";
import spock from "../public/images/icon-spock.svg";

import imgRules from "../public/images/image-rules.svg";
import rulesBonus from "../public/images/image-rules-bonus.svg";
import { UseGameLogic } from "./logic/gameLogic";
import { Header } from "./components/Header";
import { ClassicMode } from "./components/ClassicMode";
import { BonusMode } from "./components/BonusMode";
import { ShowResults } from "./components/ShowResults";
import { RulesModal } from "./components/RulesModal";
import { Footer } from "./components/Footer";

function App() {
  const {
    score,
    match,
    results,
    setMatch: playAgain,
    mode,
    modeGame,
    rules,
    setRules,
    btnRules,
    yourChoice,
    colorUser,
    colorPc,
    pcImgChosen,
    userImgChosen,
  } = UseGameLogic({ rock, paper, scissors, lizard, spock });

  return (
    <div className="container">
      <Header Logo={Logo} score={score} />

      {match && (
        <ShowResults
          results={results}
          colorUser={colorUser}
          colorPc={colorPc}
          userImgChosen={userImgChosen}
          pcImgChosen={pcImgChosen}
          playAgain={playAgain}
        />
      )}

      {!match && mode && (
        <ClassicMode
          yourChoice={yourChoice}
          rock={rock}
          paper={paper}
          scissors={scissors}
        />
      )}

      {!match && !mode && (
        <BonusMode
          yourChoice={yourChoice}
          rock={rock}
          paper={paper}
          scissors={scissors}
          lizard={lizard}
          spock={spock}
        />
      )}

      {rules && (
        <RulesModal
          mode={mode}
          imgRules={imgRules}
          rulesBonus={rulesBonus}
          setRules={setRules}
        />
      )}
      {!match && <Footer btnRules={btnRules} modeGame={modeGame} />}
    </div>
  );
}

export default App;
