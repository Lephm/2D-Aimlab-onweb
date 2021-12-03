import kaboom from "kaboom";
import deadlineMode from "./src/scenes/deadline-mode";
import loseScene from "./src/scenes/lose-scene";
import menuScene from "./src/scenes/menu";
kaboom({
  background: [37, 30, 62],
  debug: true,
});
scene("loseScene", loseScene);
scene("menu", menuScene);
scene("deadlineModeScene", deadlineMode);
go("deadlineModeScene");
