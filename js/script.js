
// preparare un array di immagini

let images = [
    'img/nature1.png',
    'img/nature2.png',
    'img/nature3.png',
    'img/nature4.png',
    'img/nature5.png',
  ];


// preparare gli elementi in js corrispondenti agli elementi html
let arrowTopEl = document.getElementById('arrowTop');
let arrowBottomEl = document.getElementById('arrowBottom');
let imgEl = document.getElementById('img');
let dotContainerEl = document.getElementById('dotContainer');

// genero i pallini 
for(let i = 0; i < images.length; i++) {
// genero un elemento html di tag <div>
let newDot = document.createElement('div');
// aggiungo la classe "dot", necessaria per la stilizzazione
newDot.classList.add('dot');
// lo imposto come figlio di dotContainerEl
dotContainerEl.append(newDot);
}



// memorizzare una variabile di indice
let index = 0;

// inserendo dentro il parametro src il valore della prima immagine dall'array
imgEl.src = images[index];


// prendo tutti i dot
let dotEl = document.querySelectorAll('.dot');

// aggiungo al primo la classe "active"
dotEl[index].classList.add('active');


arrowTopEl.addEventListener('click', function () {
    // aumento il valore dell'indice di un'unità
    index++;
    dotEl[index].classList.add('active');
    

    // mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
    imgEl.src = images[index];


    // aggiungiamo la classe active al pallino corrispondente all'indice
    dotEl[index -1].classList.remove('active');

});


arrowBottomEl.addEventListener('click', function () {
    // diminuisco il valore dell'indice di un'unità
    index--;
    dotEl[index].classList.add('active');
    

    // mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
    imgEl.src = images[index];


    // aggiungiamo la classe active al pallino corrispondente all'indice
    dotEl[index + 1].classList.remove('active');

});