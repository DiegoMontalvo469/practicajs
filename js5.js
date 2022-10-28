function operacion(op, n1, n2){
    let res = 0;
    switch (op){
        case "+":
            res = n1 + n2;
            break;

        case "-":
            res = n1 - n2;
            break;

        case "*":
            res = n1 * n2;
            break;

        case "/":
            res = n1 / n2;
            break;
    
        default:
            break;
    }
    return res;
}