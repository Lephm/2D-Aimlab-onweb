const menu = () => {
  cursor("pointer");
  const playButton = add([
    text(`Play`),
    pos(width() / 2, height() / 2 - 100),
    origin("center"),
    area(),
  ]);
  //   show tip messages on the screen
  add([
    text(`Tips: You can press Q anytime\n To quit to main menu `),
    pos(width() / 2, height() / 2 + 150),
    origin("center"),
  ]);
  playButton.onClick(() => {
    go("deadlineModeScene");
  });
};

export default menu;
