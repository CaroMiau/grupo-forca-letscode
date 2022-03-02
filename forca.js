let tent = 6;
let listaDinamica = [];
let categoriaPalavraSecreta;
let palavraSecretaRandomizada;

const elementos = [
    palavra001 = {
        nome: "Alligator",
        categoria: "Animals"
    },
    palavra002 = {
        nome: "Chimpanzee",
        categoria: "Animals"
    },
    palavra003 = {
        nome: "Elephant",
        categoria: "Animals"
    },
    palavra004 = {
        nome: "Hippopotamus",
        categoria: "Animals"
    },
    palavra005 = {
        nome: "Kangaroo",
        categoria: "Animals"
    },
    palavra006 = {
        nome: "Otter",
        categoria: "Animals"
    },
    palavra007 = {
        nome: "Peacock",
        categoria: "Animals"
    },
    palavra008 = {
        nome: "Turtle",
        categoria: "Animals"
    },
    palavra009 = {
        nome: "Raccoon",
        categoria: "Animals"
    },
    palavra010 = {
        nome: "Wolf",
        categoria: "Animals"
    }
 ]

 function randomizarPalavraSecreta() {
     let indice = parseInt(Math.random() * elementos.length);

     categoriaPalavraSecreta = elementos[indice].categoria;
     palavraSecretaRandomizada = elementos[indice].nome;
 }
 randomizarPalavraSecreta();

 function mostrarNoBrowser() {
     let categoria = document.querySelector(".categoria");
     categoria.innerHTML = categoriaPalavraSecreta;

     let palavra = document.querySelector(".palavra-secreta");
     palavra.innerHTML = "";

     for(i = 0; i < palavraSecretaRandomizada.length; i++) {
         if(listaDinamica[i] == undefined) {
             listaDinamica[i] = "&nbsp;"
             palavra.innerHTML = palavra.innerHTML + `<div class="letras">${listaDinamica[i]}</div>`
         } else {
            palavra.innerHTML = palavra.innerHTML + `<div class="letras">${listaDinamica[i]}</div>`
         }
     }
 }
 mostrarNoBrowser();

 function verificarLetra(letra) {
     if (tent > 0) {
        mudarEstilo("tecla-" + letra);
        comparaListas(letra);
 }

 function comparaListas(letra) {
     const posicao = palavraSecretaRandomizada.indexOf(letra);
     if (posicao < 0) {
         tent--
         // aparecer imagem
         // se tent = 0 >> mostrar mensagem
     } else {
         for(i = 0; i < palavraSecretaRandomizada.length; i++) {
             if(palavraSecretaRandomizada[i] == letra) {
                 listaDinamica[i] = letra;
             }
         }
     }
     let vitoria = true;
     for (i = 0; palavraSecretaRandomizada.length; i++) {
         
     }
 }

function mudarEstilo(tecla) {
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";
}