/*
function nombre(){}
const nombre = function(){};
const nombre = () => {};
*/

function divisores(numero){
    let total = 0;

    for(let i=1; i <=numero; i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
}



const divisoresV2 = function(numero){
    let total = 0;

    for(let i=1; i <=numero; i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
};

function f1(){

}

function f2(){

}

/* Llevar acordeón */

const divisoresV3 = (numero) => {
    let total = 0;

    for(let i=1; i <=numero; i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
};

function calcular(){
    let numero = 
    parseInt(document.getElementById("numero").value)
    /* console.log(numero); */
    let resultado = 
    document.getElementById("resultado");

    /* resultado.value = numero; */
    resultado.value = divisores(numero);

    
}

console.log("Total divisores", divisores(32));
console.log("Total divisores", divisoresV2(32));
console.log("Total divisores", divisoresV3(32));

/* Imagen */