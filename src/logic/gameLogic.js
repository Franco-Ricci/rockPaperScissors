import { useState } from "react";

export function UseGameLogic({ rock, paper, scissors, lizard, spock }) {
  const [score, setScore] = useState(0);

  const [mode, setMode] = useState(true);
  const [colorUser, setColorUser] = useState();

  const [colorPc, setColorPc] = useState();
  const [rules, setRules] = useState(null);

  const [results, setResults] = useState();
  const [match, setMatch] = useState(null);

  const [userImgChosen, setUserImgChosen] = useState();

  const [pcImgChosen, setPcImgChosen] = useState();

  const subtractScore = () => {
    if (score === 0) return;
    setScore(score - 1);
  };

  const addScore = () => {
    setScore(score + 1);
  };

  const modeGame = () => {
    setMode((current) => !current);
  };

  const colorsPicks = (userChoice, pc) => {
    setColorUser(userChoice);
    setColorPc(pc);
  };
  const yourChoice = (userChoice) => {
    let picks = ["rock", "paper", "scissors"];
    if (mode == false) {
      picks = ["rock", "paper", "scissors", "lizard", "spock"];
    }

    let pc = picks[Math.floor(Math.random() * picks.length)];
    console.log(pc);

    const checkMatch = () => {
      if (userChoice === pc) {
        setPcImgChosen(`/public/images/icon-${pc}.svg`);
        setUserImgChosen(`/public/images/icon-${userChoice}.svg`);
        colorsPicks(userChoice, pc);
        setResults("Draw");
        return "empate";
      } else if (userChoice == "rock" && (pc == "paper" || pc == "spock")) {
        setUserImgChosen(rock), setPcImgChosen(`/public/images/icon-${pc}.svg`);
        subtractScore();
        colorsPicks(userChoice, pc);
        setResults("you lose");
        return "pc wins";
      } else if (userChoice == "rock" && (pc == "scissors" || pc == "lizard")) {
        setUserImgChosen(rock), setPcImgChosen(`/public/images/icon-${pc}.svg`);
        addScore();
        colorsPicks(userChoice, pc);
        setResults("you win");
        return "user win";
      } else if (userChoice == "paper" && (pc == "rock" || pc == "spock")) {
        setUserImgChosen(paper), setPcImgChosen(`/public/images/icon-${pc}.svg`);
        addScore();
        colorsPicks(userChoice, pc);
        setResults("you win");
        return "user win";
      } else if (
        userChoice == "paper" &&
        (pc == "scissors" || pc == "lizard")
      ) {
        setUserImgChosen(paper), setPcImgChosen(`/public/images/icon-${pc}.svg`);

        subtractScore();
        colorsPicks(userChoice, pc);
        setResults("you lose");
        return "pc win";
      } else if (
        userChoice == "scissors" &&
        (pc == "lizard" || pc == "paper")
      ) {
        setUserImgChosen(scissors), setPcImgChosen(`/public/images/icon-${pc}.svg`);
        addScore();
        colorsPicks(userChoice, pc);
        setResults("you win");
        return "user win";
      } else if (userChoice == "scissors" && (pc == "rock" || pc == "spock")) {
        setUserImgChosen(scissors), setPcImgChosen(`/public/images/icon-${pc}.svg`);
        subtractScore();
        colorsPicks(userChoice, pc);
        setResults("you lose");
        return "pc win";

        /*bonus*/
      } else if (userChoice == "lizard" && (pc == "spock" || pc == "paper")) {
        setUserImgChosen(lizard), setPcImgChosen(`/public/images/icon-${pc}.svg`);
        addScore();
        colorsPicks(userChoice, pc);
        setResults("you win");
        return "user win";
      } else if (userChoice == "lizard" && (pc == "rock" || pc == "scissors")) {
        setUserImgChosen(lizard), setPcImgChosen(`/public/images/icon-${pc}.svg`);
        subtractScore();
        colorsPicks(userChoice, pc);
        setResults("you lose");
        return "pc win";
      } else if (userChoice == "spock" && (pc == "scissors" || pc == "rock")) {
        setUserImgChosen(spock), setPcImgChosen(`/public/images/icon-${pc}.svg`);
        addScore();
        colorsPicks(userChoice, pc);
        setResults("you win");
        return "user win";
      } else if (userChoice == "spock" && (pc == "paper" || pc == "lizard")) {
        setUserImgChosen(spock), setPcImgChosen(`/public/images/icon-${pc}.svg`);
        subtractScore();
        colorsPicks(userChoice, pc);
        setResults("you lose");
        return "pc win";
      }
    };

    const resultsOfMatch = checkMatch;
    setMatch(resultsOfMatch);
    console.log(match);
  };

  const btnRules = () => {
    setRules(true);
  };
  console.log(results);
  return {
    btnRules,
    yourChoice,
    modeGame,
    colorUser,
    colorPc,
    rules,
    pcImgChosen,
    userImgChosen,
    score,
    match,
    setMatch,
    setRules,
    results,
    mode,
  };
}

