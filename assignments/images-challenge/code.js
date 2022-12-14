/*
 * This code is running in an environment the same as simple-draw. Thus you have
 * two variables that will be helpful.
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 * And these methods which do the same thing as in simple-draw.
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *  drawCircle(x, y, radius, color, lineWidth=1)
 *
 *  drawRect(x, y, w, h, color, lineWidth=1)
 *
 *  drawTriangle(x1, y1, x2, y2, x3, y3, color, lineWidth=1)
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *  drawFilledTriangle(x1, y1, x2, y2, x3, y3, color)
 *
 *  clear()
 */



const forlineOfCircles = (radius) => {
  let dif = radius;
  for (let c = 0; c < Math.floor(width / (radius * 2)); c++) {
    drawFilledCircle(dif, height / 2, radius, 'red')
    dif = dif + radius * 2
  }
}

const lineOfCircles = (radius) => {
  let dif = radius;
  let x = 0;
  while (x < Math.floor(width / (radius * 2))) {
    drawFilledCircle(dif, height / 2, radius, 'red')
    x = x + 1
    dif = dif + radius * 2
  }
}

const altLineOfCircles = (radius) => {
  let dif = radius;
  let count = 0;
  let alternate = 0;
  let color = 'red';
  while (count < Math.floor(width / (radius * 2))) {
    drawFilledCircle(dif, height / 2, radius, color);
    count = count + 1;
    dif = dif + radius * 2;
    if (alternate % 2 == 0) {
      color = 'blue';
    }
    if (alternate % 2 == 1) {
      color = 'red';
    }
    alternate = alternate + 1
  }
};
const bigCircle = (count) => {
  let color = 'red';
  let alternate = 0;
  let factor = height / 2;
  drawFilledCircle(width / 2, height / 2, height / 2, color)
  for (let c = 0; c < count + 1; c++) {
    drawFilledCircle(width / 2, height / 2, factor, color)
    if (alternate % 2 == 0) {
      color = 'blue';
    }
    if (alternate % 2 == 1) {
      color = 'red';
    }
    alternate = alternate + 1
    factor = height / 2 - ((height / 2) / count * c)
  }
}

const checkB = (count) => {
  let color = 'red';
  let alternate = 0;
  let size

}

const lineC = (count) => {
  let xaxis = 0;
  let yaxis = 0;
  for (let c = 0; c < count + 1; c++) {
    drawLine(0, yaxis, xaxis, height, 'black', 1)
    xaxis = xaxis + width / count
    yaxis = yaxis + height / count
  }
}

const lineC2 = (count) => {
  let xaxis = 0;
  let yaxis = 0;
  for (let c = 0; c < count + 1; c++) {
    drawLine(0, yaxis + height / count, xaxis + width/count, height, 'black', 1)
  }
}