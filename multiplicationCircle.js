const PI = Math.PI;
var sin = Math.sin;
var cos = Math.cos;
var tan = Math.tan;

export default class MultiplicationCircle {
  constructor(points, factor) {
    this._points = points;
    this._factor = factor;
    this._lineColor = 'black';
    this._randomColors = false;

    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');

    this.ctx.translate(this.canvas.width/2, this.canvas.width/2);
    this.ctx.rotate(-PI/2);

    this.radius = 0.9 * this.canvas.width/2;
  }

  get points() {
    return this._points;
  }

  set points(newPoints) {
    this._points = newPoints;
    this.draw();
  }

  get factor() {
    return this._factor;
  }

  set factor(newFactor) {
    this._factor = newFactor;
    this.draw();
  }

  get lineColor() {
    if (this.randomColors) {
      if ((!this.randomColorsRed && !this.randomColorsGreen && !this.randomColorsBlue)
        || (this.randomColorsRed && this.randomColorsGreen && this.randomColorsBlue)) {
        return `rgb(${Math.random()*1000%256}, ${Math.random()*1000%256}, ${Math.random()*1000%256})`;
      }
      let red = this.randomColorsRed ? 100 + Math.random()*1000%156 : Math.random()*1000%50;
      let green = this.randomColorsGreen ? 100 + Math.random()*1000%156 : Math.random()*1000%50;
      let blue = this.randomColorsBlue ? 100 + Math.random()*1000%156 : Math.random()*1000%50;
      return `rgb(${red}, ${green}, ${blue})`;
    } else {
      return this._lineColor;
    }
  }

  set lineColor(newColor) {
    this._lineColor = newColor;
    this.draw();
  }

  get randomColors() {
    return this._randomColors;
  }

  set randomColors(isRandom) {
    this._randomColors = isRandom;
    this.draw();
  }

  get randomColorsRed() {
    return this._randomColorsRed;
  }

  set randomColorsRed(includeRed) {
    this._randomColorsRed = includeRed;
    this.draw();
  }

  get randomColorsGreen() {
    return this._randomColorsGreen;
  }

  set randomColorsGreen(includeGreen) {
    this._randomColorsGreen = includeGreen;
    this.draw();
  }

  get randomColorsBlue() {
    return this._randomColorsBlue;
  }

  set randomColorsBlue(includeBlue) {
    this._randomColorsBlue = includeBlue;
    this.draw();
  }

  clear() {
    this.ctx.clearRect(-this.canvas.width/2, -this.canvas.width/2, this.canvas.width, this.canvas.height);
  }

  draw() {
    this.clear();
    // Draw outer circle
    this.ctx.strokeStyle = 'lightgrey';
    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.radius, 0, 2*PI);
    this.ctx.stroke();

    let theta = 2*PI/this.points;

    // Add points
    this.ctx.beginPath();
    this.ctx.fillStyle = 'rgb(147, 105, 217)';
    for (let i = 0; i < this.points; i++) {
      let x = this.radius * cos(i * theta);
      let y = this.radius * sin(i * theta);
      this.ctx.moveTo(x, y);
      this.ctx.arc(x, y, 3, 0, 2*PI);
    }
    this.ctx.fill();

    // Add lines between points
    this.ctx.beginPath();
    for (let i = 0; i < this.points; i++) {
      this.drawLine(i, theta);
    }
    this.ctx.stroke();
  }

  drawLine(i, theta) {
    if (this.randomColors) {
      this.ctx.beginPath();
    }

    this.ctx.strokeStyle = this.lineColor;
    let destPointNumber = (i * this.factor) % this.points;
    let x = this.radius * cos(i * theta);
    let y = this.radius * sin(i * theta);

    let dest_x = this.radius * cos(destPointNumber * theta);
    let dest_y = this.radius * sin(destPointNumber * theta);

    this.ctx.moveTo(x, y);
    this.ctx.lineTo(dest_x, dest_y);

    if (this.randomColors) {
      this.ctx.stroke();
    }
  }
}
