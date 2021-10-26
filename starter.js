////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE


///////////////////////
////// PET STORE //////
///////////////////////

// const dogProducts = [
//     {
//       name: 'leash',
//       colors: ['red', 'blue', 'green'],
//       category: 1,
//       inventory: 30,
//       basePrice: 13.99, 
//       displayPrice: 13.99
//     }, 
//     {
//       name: 'chew toy',
//       colors: ['brown'],
//       category: 2,
//       inventory: 120,
//       basePrice: 6.00, 
//       displayPrice: 6.00
//     }, 
//     {
//       name: 'rope',
//       colors: ['blue & green', 'red & yellow'],
//       category: 2,
//       inventory: 75,
//       basePrice: 4.99, 
//       displayPrice: 4.99
//     }
// ]

// const catProducts = [
//   {
//     name: 'mouse toy', 
//     colors: ['pink', 'grey', 'black'], 
//     category: 2, 
//     inventory: 125, 
//     basePrice: 2.50, 
//     displayPrice: 2.50
//   },
//   {
//     name: 'cat sweater',
//     colors: ['black'],
//     category: 1,
//     inventory: 15,
//     basePrice: 10.00, 
//     displayPrice: 10.00
//   }, 
//   {
//     name: 'straching post',
//     colors: ['tan'],
//     category: 2,
//     inventory: 40,
//     basePrice: 22.99, 
//     displayPrice: 22.99
//   }
// ]

// // CODE HERE
// // write a callback function called addDiscounts which takes in 2 parameters an object representing a discount and discount. 

// const applyPercentDiscount = (product, discount) => {
//     return product.basePrice -= product.basePrice * (discount/100)
// };

// const applyFlaterateDiscount = (product, discount) => {
//     return product.basePrice -= discount;
// };

// const applyDiscounts = (arr, callback, discount) => {
//     arr.forEach((product) => {
//         return callback(product, discount);
//     })
// }

// applyDiscounts(dogProducts, applyFlaterateDiscount, 2)
// applyDiscounts(dogProducts, applyPercentDiscount, 2)


// applyDiscounts(catProducts, applyFlaterateDiscount, 2)
// applyDiscounts(catProducts, applyPercentDiscount, 2)


////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE



////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        const splitStr = str.split(' ')
        let camelCaseStr = ''
        
        for (let x = 0; x < splitStr.length; x++) {
            let word = splitStr[x]

            word = word.toLowerCase()

            if (x !== 0) {
                word = word.charAt(0).toUpperCase() + word.slice(1)
            }

            camelCaseStr += word
        }

        newArr.push(camelCaseStr)
    }

    return newArr
}

const copyArrToSnakeCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        str = str.toLowerCase()
        const splitStr = str.split(' ')
        const snakeCaseStr = splitStr.join('_')
        newArr.push(snakeCaseStr)
    }

    return newArr
}
  
// CODE HERE

console.log(copyArrToSnakeCase(lotr))
console.log(copyArrToCamelCase(lotr))

////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']

 const mappedColors  = colors.map(() => 'pink')

 console.log(mappedColors)

/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = names => {
    // CODE HERE
    return formalNames.map((names) => `Hello, ${names}`)
}

// Call formalGreeting passing in the formalNames array
 console.log(formalGreeting(formalNames))

// //// FILTER ////

// /*
//     Pass a callback to filter that will return
//     only strings that begin with the letter A
// */

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']

 const placesThatStartWithA = places.filter((places) => {
    return places[0] === 'A'
 })

console.log(placesThatStartWithA)
// /*
//     Create a function called identifier that uses the filter higher order 
//     array method to filter over the provided jobs array of objects

//     The function should return the object of the person with a job as a programmer
    
//     Make sure to use the arrow function in conjunction with the filter method
    
//     Your returned value should be a single object, not an array with one object inside of it
    
//     Use arrow functions and the filter method
// */

// Do not edit the code below.
let jobs = [
	{ receptionist: "James" },
	{ programmer: "Steve" },
	{ designer: "Alicia" },
];

// Do not edit the code above.

// CODE HERE
const identifier = jobs.filter((arr) => {
  return arr.programmer
});

console.log(identifier)

//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = numbers => {
    // Code here
    return numsToReduce.reduce((acc, curr) => acc + curr)
}

// CODE HERE

console.log(productOfArray(numsToReduce))

// call productOfArray passing in numsToReduce


// /*
//     Pass a callback and an initial value to reduce 
//     that will subtract all the expenses in the array
//     from the initial budget

//     This will allow us to see how much we have left
//     in the budget after these expenses
// */

const budget = 2000

const expenses = [
    {
        title: 'rent', 
        amount: 1000
    }, 
    {
        title: 'car payment', 
        amount: 250
    }, 
    {
        title: 'food', 
        amount: 300
    }
]

 const remaining  = expenses.reduce((acc, curr) => acc - curr.amount, budget)

 console.log(remaining)