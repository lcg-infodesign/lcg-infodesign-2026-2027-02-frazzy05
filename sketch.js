function preload() {
  // put preload code here
}

function setup() {
    //disegno glifi
    let numeroGlifi = 180;
    let numeroColonne = ceil(sqrt(numeroGlifi));
    let numeroRighe = ceil(numeroGlifi / numeroColonne);
    let dimCella = 160;

    let dimColonna= windowWidth / numeroColonne;
    let dimRiga = dimColonna * 1.2;

    let larghezzaTotale = numeroColonne * dimCella;
    let altezzaTotale = numeroRighe * dimCella;

    createCanvas(larghezzaTotale, altezzaTotale);
    background('midnightblue');

    let xCorrente = 0;
    let yCorrente = 0;

   for (let g = 0; g < numeroGlifi; g++) {
    mioGlifo(xCorrente + dimCella / 2, yCorrente + dimCella / 2, dimCella * 0.7);
    xCorrente = xCorrente + dimCella;

    // Se arrivi a fine riga, vai a capo
    if (xCorrente >= larghezzaTotale) {
      xCorrente = 0;
      yCorrente = yCorrente + dimCella;
    }
  }
}

function draw() {
}

function mioGlifo(_x, _y, _size) {
push()
  translate(_x, _y);
  angleMode (DEGREES);

  const colorePianeta = random(['deeppink', 'red', 'orange', 'teal', 'aqua', 'lavander', 'cyan', 'lime', 'magenta', 'dodgerblue', 'darkorchid', 'sienna', 'chocolate', 'indigo', 'mediumseagreen']);
  const coloreAnello = random(['khaki', 'darkkhaki', 'lightgreen', 'turquoise', 'mediumpurple', 'hotpink', 'orangered', 'gold', 'coral', 'sienna', 'chocolate', 'indigo', 'mediumseagreen']);
  const circleSize = random(0.4, 0.9) * _size;


  // Rotazione casuale 
  rotate(random(0, 360)); 
 
  //anello
  noFill();
  stroke(coloreAnello);
  ellipse(0, 0, _size * 1.2, _size * 0.5);

  //  pianeta
  noStroke();
  fill(colorePianeta);
  circle(0, 0, circleSize);





  //variabile  satelliti attorno al pianeta
  for (let i = 0; i < 4; i++) {
    const angoloSatellite = i * 100; 
    const coloreSatellite = random(['deeppink', 'red', 'orange', 'teal', 'aqua', 'lavander', 'cyan', 'lime', 'magenta', 'dodgerblue', 'darkorchid','sienna', 'chocolate', 'indigo', 'mediumseagreen']);

    push();
    rotate(angoloSatellite);
    translate(_size * 0.55, 0);
    fill(coloreSatellite);
    circle(0, 0, _size * 0.15);
    pop();
  }

  pop();
}