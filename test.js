// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("One dollar should be 127.9 Yenes", function(){
    //import the function from app.js
    const {fromDollarToYen} = require('./app.js')
    expect(fromDollarToYen(3.5)).toBe(447.65);
})

test("One Yen should be 0.8 Pounds", function(){
    //import the function from app.js
    const {fromYenToPound} = require('./app.js')
    expect(fromYenToPound(3.5)).toBe(2.8);
})