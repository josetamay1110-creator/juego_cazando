let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");


const ANCHO_GATO=40
const ALTURA_GATO=80
const ANCHO_COMIDA=35
const ALTURA_COMIDA=40
let gatoX=250
let gatoY=200
let comidaX=0
let comidaY=460

function iniciarJuego(){
    graficarComida();
    graficarGato();
}
function graficarGato(){
    dibujarRectangulo();
}

function graficarComida(){
    dibujarRectangulo();
}
function dibujarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle="black";
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTURA_GATO);
    ctx.fillStyle="red";
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTURA_COMIDA);
}