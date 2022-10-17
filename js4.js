function divisores(numero){
    let total = 0;

    for(let i=1; i <=numero; i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
}
