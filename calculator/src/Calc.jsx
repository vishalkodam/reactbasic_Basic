
function add(a,b){
    let sum = a+b;
    return sum;
}

function sub(a,b){
    let sub = a-b;
    return sub;
}

function product(a,b){
    let product = a*b;
    return product;
}

function division(a,b){
    let division = a/b;
    division = division.toFixed(2);
    return division;
}

export {add,sub,product,division};