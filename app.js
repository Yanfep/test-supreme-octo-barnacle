// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to Yenes
    let valueInYen = valueInDollar * 127.9;
    //return the Yenes value
    // 1 multiplico valueinyen x 100 y lo transformo a entero (parsInt) y finalmente lo divido por 100.
    return parseInt(valueInYen * 100)/100;
    
}

const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to Yenes
    let valueInPound = valueInYen * 0.8;
    //return the Yenes value
    // 1 multiplico valueinyen x 100 y lo transformo a entero (parsInt) y finalmente lo divido por 100.
    return parseInt(valueInPound * 100)/100;
  
}


// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

