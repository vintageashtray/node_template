import {l, isArgumentValid, pretty} from '../lib/utilities.js'

function _1arrayMultiplier(arr, mult, logLevel=3){
    if(!Array.isArray(arr) || !isArgumentValid(mult, 'number')){return}
    
    if(!arr.every(x=>Number.isFinite(x))){
        l.fail(` 1: Array items all need to be numbers!`)
    }

    // const multiplied = arr.forEach(n=>n * mult) // does not mutate array
    const multiplied = []

    for(let i = 0; i < arr.length; i++){
        const x = arr[i] * mult;
        multiplied.push(x);
    }

    l.success(` 1: The array multiplied by '${mult}' is: [${multiplied}]`, logLevel)
}

_1arrayMultiplier([1,2,3,4], 3)
//------------------1



function _2vipFilter(arr, logLevel=3){
    if(!Array.isArray(arr)){return}

    const chkPremium = arr.filter(x => x.premium);
    
    console.log(`✅  2: `, chkPremium)
}

_2vipFilter([{name: "Alice", premium: true}, {name: 'Bob', premium: false}])
//------------------2



function _2isDivisibleBy(arr, n, logLevel=3){
    if(!Array.isArray(arr) || !isArgumentValid(n, 'number')){return}
    
    if(!arr.every(x=>Number.isFinite(x))){
        l.fail(` 2bis: Array items all need to be numbers!`)
    }

    const divisible = arr.filter(x=>x % 3 == 0);

    l.success(` 2bis: The numbers [${divisible}] are divisible by '${n}'`, logLevel)
}

_2isDivisibleBy([1,8,123,4151, 443, 53535, 900], 3)
//------------------2bis



function _3totalPriceSum(arr, logLevel=3){
    if(!Array.isArray(arr) || !arr.every(x => typeof x == 'object')){return}
    
    let total = 0;

    const spread = arr.forEach(x => total = total + x.price )

    l.success(` 3: The sum total of prices from the shopping cart: '${total}`, logLevel)
}

_3totalPriceSum([{item: "Book", price: 15}, {item: "Pen", price: 5}])
//------------------3



function _4idMatchFinder(arr, id){
    if(!Array.isArray(arr) || !arr.every(x => typeof x == 'object') || !isArgumentValid(id, ['number', 'string'])){return}

    const match = arr.filter(x => x.id == id);

    console.log(`✅  4: `, ...match)
}

_4idMatchFinder([{id: 101, name: "Shirt"}, {id: 202, name: "Shoes"}], '202')
//------------------4



function _5inventoryCheck(arr){
    if(!Array.isArray(arr) || !arr.every(x => typeof x == 'object')){return}

    const allAvailable = arr.every(x => x.inStock)

    l.success(` 5: '${allAvailable}'`)
}

_5inventoryCheck([{name: "Laptop", inStock: true}, {name: "Mouse", inStock: false}])
//------------------5



function _6flattenNestedArray(arr, logLevel=3){
    if(!Array.isArray(arr)){return}

    const flattened = arr.flat();

    l.success(` 6: The flattened nested array: [${flattened}]`, logLevel)
}

_6flattenNestedArray([1, [2, 3], [4, [5]]])
//------------------6



function _7rosterOrganizer(arr, logLevel=3){
    if(!Array.isArray(arr)){return}

    const sorted = arr.sort();

    l.success(` 7: The alphabetically sorted roster: [${sorted}]`, logLevel) // doesn't output values with quotes, it probably shouldn't.
}

_7rosterOrganizer(["Zack", "Alex", "Mia", "Chris"])
//------------------7



function _8arrayMirror(arr, logLevel=3){
    if(!Array.isArray(arr)){return}

    const mirrored = arr.toReversed();

    l.success(` 8: The reversed array: [${mirrored}]`)
}

_8arrayMirror(["a", "b", "c"])
//------------------8



function _9indexMatcher(arr, target, logLevel=3){
    if(!Array.isArray(arr) || !isArgumentValid(target, ['string', 'number'])){return}

    const index = arr.findIndex(x=>x == target);

    l.success(` 9: The index position of the entry is: '${index}'`, logLevel)
}

_9indexMatcher(['apple', 'banana', 'cherry'], 'banana')
//------------------9



function _10arraySlicer(arr, start, length, logLevel=3){
    if(!Array.isArray(arr) || !isArgumentValid(start, 'number') || !isArgumentValid(length, 'number')){return}

    const slice = arr.slice(start, length+1);

    l.success(`10: The sliced array: [${slice}]`, logLevel)
}

_10arraySlicer(["gold", "silver", "bronze", "platinum"], 1, 2)
//------------------10



