import MultiplicationCircle from './multiplicationCircle.js';

export default function initialize() {
  console.log('intiizlizing');
  let pointsInput = document.getElementById('points');
  let factorInput = document.getElementById('factor');

  let multiplicationCircle = new MultiplicationCircle(pointsInput.value, factorInput.value);
  document.getElementsByClassName('container')[0].style.width = multiplicationCircle.canvas.width + 'px';

  pointsInput.addEventListener('change', (e) => { multiplicationCircle.points = pointsInput.value; });
  factorInput.addEventListener('change', (e) => { multiplicationCircle.factor = factorInput.value; });

  let pointsDelta = document.getElementById('pointsDelta');
  let factorDelta = document.getElementById('factorDelta');
  pointsDelta.addEventListener('change', (e) => { pointsInput.step = pointsDelta.value;});
  factorDelta.addEventListener('change', (e) => { factor.step = factorDelta.value;});

  let randomColors = document.getElementById('randomColors');
  randomColors.addEventListener('change', (e) => multiplicationCircle.randomColors = randomColors.checked);

  let randomColorsRed = document.getElementById('randomColorsRed');
  randomColorsRed.addEventListener('change', (e) => multiplicationCircle.randomColorsRed = randomColorsRed.checked);

  let randomColorsGreen = document.getElementById('randomColorsGreen');
  randomColorsGreen.addEventListener('change', (e) => multiplicationCircle.randomColorsGreen = randomColorsGreen.checked);

  let randomColorsBlue = document.getElementById('randomColorsBlue');
  randomColorsBlue.addEventListener('change', (e) => multiplicationCircle.randomColorsBlue = randomColorsBlue.checked);

  multiplicationCircle.draw();
}
