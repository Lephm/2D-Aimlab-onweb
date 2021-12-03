import { spawnTarget } from "../utils/game-utils";
// This is the time of this mode in seconds
let timeAllowed = 60;
let currentScore = 0;
const spawnRate = 0.5;
let deadlineMode = () => {
  cursor("crosshair");
  const score = add([text("Score: 0"), pos(24, 24)]);
  const timeLeft = add([
    text(`TimeLeft: ${timeAllowed}`),
    pos(width() / 2, 24),
    color(255, 255, 255),
  ]);
  //Decrease time
  loop(1, () => {
    timeAllowed--;

    timeLeft.text = `TimeLeft: ${timeAllowed}`;
    if (timeAllowed <= 0) {
      let hasBeatenHighscore = false;
      // Game over
      let highscore = currentScore;
      if (window.localStorage.getItem("deadlineModeHighscore")) {
        highscore = window.localStorage.getItem("deadlineModeHighscore");
        if (highscore < currentScore) {
          window.localStorage.setItem("deadlineModeHighscore", currentScore);
          highscore = currentScore;
          hasBeatenHighscore = true;
        }
      } else {
        // Set highscore for the first time
        window.localStorage.setItem("deadlineModeHighscore", currentScore);
      }
      go("loseScene", {
        score: currentScore,
        highscore: highscore,
        beatHighscore: hasBeatenHighscore,
      });
    }
  });
  loop(spawnRate, () => {
    spawnTarget();
  });
  onClick("target", (target) => {
    currentScore++;
    addKaboom(target.pos);
    score.text = `Score: ${currentScore}`;
    destroy(target);
  });
};

export default deadlineMode;
