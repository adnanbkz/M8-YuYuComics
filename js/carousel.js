/*Declarem la constant del document*/
const DERMOESTETICA = "Dermocosmetica.html";
const DIETETICA = "Dietetica.html";
const HIGIENE = "Higiene.html";
const SALUT = "Salut.html";

/*Operacio per trobar en quin document ens trobem*/
let page = window.location.pathname.split("/").pop();
//console.log(page);

/* Una array (tren) agafa las fotos que s'enenyen en el carrousel. El segon array conte la informacio alternatiba de las fotos. Cuan fas una array tot a de ser del mateix format */
let imgArrRoute;
let imgArrAlt;

/*Depenent de la page (operacio anterior) escull un cas per cada pagina*/
switch (page) {
  case DERMOESTETICA:
    imgArrRoute = ["../img/Dermocosmetica1.png", "../img/Dermocosmetica2.png", "../img/Dermocosmetica3.png"];
    imgArrAlt = ["Farmaceutica reponen una estanteria", "Dues farmacèutiques fent una promoció", "Una farmacio moderna"];
    break;
  case DIETETICA:
    imgArrRoute = ["../img/Dietetica1.png", "../img/Dietetica2.png", "../img/Dietetica3.png"];
    imgArrAlt = ["Conjunt de menja saludable", "Un metje amb fruita", "Conjunt de fruita"];
    break;
  case HIGIENE:
    imgArrRoute = ["../img/higiene1.png", "../img/higiene2.png", "../img/higiene3.png"];
    imgArrAlt = ["Una persona relaxada", "Persona pasantse el fil dental", "Persona d'avançada edat dutxant-se"];
    break;
  case SALUT:
  default:
    imgArrRoute = ["../img/Salut1.png", "../img/Salut2.png", "../img/Salut3.png"];
    imgArrAlt = ["Un metge content", "Mapa conceptual del cervell", "Nen a la revisio optica"];
    break;

}

let slideIndex = 0;
/* Aqiesta funcio crida cuan se li dona click en els botons per cambiar la foto, pot ser positio o negatiu. Despres crida a la funcio showSlides per mostrar la diapositiva actualitzada */
function plusSlides(number) {
    slideIndex = slideIndex + number;
    showSlides(slideIndex);
}
/* Aquesta funcio crida cuan se li dona click al control que et porta directament a una diapositiva especifica(botons d'asota), despres crida a showSlides per mostrar aquella diapositiva */
function currentSlide(number) {
    slideIndex = number;
    showSlides(slideIndex);
}
/* Aquesta funcio actualitza la imatge i el seu Alt. Comproba si numbrer esta fora dels limits del array de la imatja ajusta slideIndex en consecuencia
despres actualitza el seu atribut "src" i "alt" del element amb l'id de carousellmg amb la ruta i despricio de la diapositiva actual */
function showSlides(number) {

  let actualSlide = document.getElementById("carouselImg");

  if (number > imgArrRoute.length-1) {
    slideIndex = 0
  }

  if (number < 0) {
    slideIndex = imgArrRoute.length-1;
  }

  console.log(imgArrRoute[slideIndex] + " " + imgArrAlt[slideIndex]);

  actualSlide.setAttribute("src", imgArrRoute[slideIndex]);
  actualSlide.setAttribute("alt", imgArrAlt[slideIndex]);
}