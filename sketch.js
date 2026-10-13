function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);

    background(220);
    //disegno glifi
    let numeroGlifi = 110;
    let numeroColonne = ceil(sqrt(numeroGlifi));
    let numeroRighe = sqrt(numeroGlifi);
    let dimColonna= windowWidth / numeroColonne;
    let dimRiga = windowHeight / numeroRighe;

    let xCorrente = 0;
    let yCorrente = 0;

    for (let g = 0; g < numeroGlifi; g++) {

      mioGlifo(xCorrente + dimColonna/2, yCorrente + dimRiga/2, dimRiga*0.8);
      xCorrente = xCorrente + dimColonna;

      if (xCorrente >= windowWidth) {
        xCorrente = 0;
        yCorrente = yCorrente + dimRiga;
      }
    }
}

function draw() {
}

function mioGlifo(_x, _y, _size) {
push()
  translate(_x, _y);
  circle(0, 0, _size);

  //disegno il secondo pallino, faccio rotazione casuale 
  for (let i = 0; i < 4; i++) {
  angleMode(DEGREES);
  const mioRotazione = random(0, 360);
  const mioRaggio = random(_size / 10, _size / 3);
  push()
  rotate(mioRotazione);
  translate(_size/2, 0);
  circle(0, 0, mioRaggio);
  pop()
  }
  pop()

}