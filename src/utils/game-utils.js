const targetHeight = 100;
const targetWidth = 100;

const targetAliveTime = 2;
const spawnTarget = () => {
  const randomPos = rand(
    // Plus 24 in height because that's where the UI is
    vec2(0 + targetWidth, 0 + targetHeight + 24),
    vec2(width() - targetWidth, height() - targetHeight)
  );
  let newTarget = add([
    pos(randomPos.x, randomPos.y),
    rect(targetHeight, targetWidth),
    area(),
    color(222, 195, 195),
    origin("center"),
    "target",
  ]);

  wait(targetAliveTime, () => {
    destroy(newTarget);
  });
  return newTarget;
};

export { spawnTarget };
