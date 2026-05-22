
// variables principales

// separación entre cada letra de la grilla
let espacio = 12;

// tamaño del texto
let tam = 14;

// movimiento horizontal generado por el mouse
let movimiento = 0;


// variable que almacena el color actual del sistema
let colorRandom;



function setup() {

  createCanvas(550, 550);
  
  // generación del color inicial aleatorio
   colorRandom = color(
    random(0, 255),
    random(0, 255),
    random(0, 255)
  );

  // centra horizontal y verticalmente las letras
  textAlign(CENTER, CENTER);

  // define tamaño del texto
  textSize(tam);

}



function draw() {

  
  background(0);
  
  


  // transforma la posición del mouse en desplazamiento horizontal
  movimiento = map(mouseX, 0, width, -120, 120);


  // bucles
  // recorren filas y columnas de la grilla

  for (let y = 0; y < height; y += espacio) {

    for (let x = 0; x < width; x += espacio) {

      // ejecuta la función en cada posición
      dibujarTexto(x, y);

    }

  }

}



  // función 
  // controla comportamiento visual de cada letra

  function dibujarTexto(x, y) {

  // calcula distancia entre mouse y letra
  let d = dist(mouseX, mouseY, x, y);


  // genera movimiento ondulado continuo
  let onda = sin(frameCount * 0.03 + y * 0.05) * 40;


  // letra inicial del sistema
  let letra = "E";


  // condición 1
  // cambia letra dependiendo de distancia
    
  if (d > 320) {

    letra = "T";

  } else {

    letra = "Y";

  }


  // condición 2
  // si el mouse está muy cerca, la letra cambia nuevamente
  if (d < 150) {

    letra = "P";

  }


  // aplica color actual a las letras
  fill(colorRandom);

  // movimiento depende de distancia al mouse
  let mover = map(d, 0, width, 60, 0);


  // output visual
  // dibuja letra con deformación y movimiento
  text(
    letra,
    x + onda + mover,
    y
  );

}



  // función
  // cada click genera un nuevo color aleatorio
function mousePressed() {

  colorRandom = color(
    random(0, 255),
    random(0, 255),
    random(0, 255)
  );


}