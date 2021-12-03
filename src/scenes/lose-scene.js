const loseScene = ({ score, highscore, beatHighscore }) => {
  const scoreDisplay = add([
    text(`Score: ${score}`),
    pos(width() / 2, height() / 2),
    origin("center"),
  ]);
  const highscoreDisplay = add([
    text(`Highscore: ${highscore}`),
    pos(width() / 2, height() / 2 + 80),
    origin("center"),
  ]);
  beatHighscore
    ? add([
        text("Congrats you have beaten your highscore"),
        pos(width() / 2, height() / 2 - 80),
        origin("center"),
      ])
    : null;
  const backToMenuButton = add([
    text("Go back to main menu"),
    pos(width() / 2, highscoreDisplay.pos.y + 80),
    origin("center"),
    "backToMenuButton",
    area(),
  ]);

  backToMenuButton.onClick(() => {
    go("menu");
  });
};

export default loseScene;
