const drawFrame = (time) => {
  drawFilledCircle((time / 5) % width, height, 500, 'purple');
  drawFilledCircle((time / 5) % width - 20, height, 500, 'white');
}
animate(drawFrame);