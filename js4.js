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

    let resultado =
    document.getElementById("result");

    resultado.value = divisores(numero);

}

console.log("Total divisores", divisores(32));
console.log("Total divisores", divisoresV2(32));
console.log("Total divisores", divisoresV3(32));