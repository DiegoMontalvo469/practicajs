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

ejemplo(f1,f2,f3)

console.log("Total divisores", divisores(32));
console.log("Total divisores", divisoresV2(32));