import {l, isArgumentValid} from '../lib/utilities.js'

const _1carStatus = (carObj, mileage) => {
    if(!isArgumentValid(carObj, 'object') || !isArgumentValid(mileage, 'number')){return}

    const newMileage = carObj.mileage + mileage;

    // carObj.mileage += mileage;

    const carUpdate = {...carObj, mileage: +newMileage, ...(newMileage > 100000 && {needsService: true})}

    console.log(`✅  1:`, carUpdate)
}

_1carStatus({ brand: "Honda", mileage: 95000 }, 6000)
//--------------------1



const _2inventoryPriceTotal = (inventory) => {
    if(!isArgumentValid(inventory, 'object')){return}

    let invTotal = 0;

    // for (let x of Object.values(inventory)) invTotal += (x.price * x.quantity)

    for (let x in inventory) {
        const {price:p, quantity:q} = inventory[x] // object destructuring
        console.log(p, q)
        invTotal += p * q // it's possible to use aliases for these
    }

    console.log(`✅  2: The price total of the inventory is: `, invTotal)
}

_2inventoryPriceTotal({ laptop: { price: 1000, quantity: 2 }, mouse: { price: 25, quantity: 5 } })
//--------------------2


const _3filterProps = (obj, criteria) => {
    if(!isArgumentValid(obj, 'object') || !Array.isArray(criteria)){return}

    const props = Object.entries(obj);

    const filter = props.filter(x => criteria.includes(x[0]));

    const filtered = Object.fromEntries(filter);

    // This code is for reference only, as it does not work as intended and is not clean, and also adds co;plexity (needs extra steps to re;ove undefined entries)
    // const filtered = {}
    // for (let key in obj) {
    //     filtered[key] = criteria.includes(key) ? obj[key] : undefined;
    // }

    console.log(`✅  3: The filtered properties: `, filtered)
}

_3filterProps({ a: 1, b: 2, c: 3 }, ["a", "c"])
//--------------------3



const _4wordFrequency = (wordArr) => {
    if(!Array.isArray(wordArr)){return}

    // Approach #1
    const wordFrequency = {}
    const words = new Set(wordArr)

    for (let w of words) {
        wordFrequency[w] = wordArr.filter(x => x === w).length // the 'w' inside .filter() has a different scope than the one in the previous line
    }


    // Approach #2
    // const wordFrequency = {}
    // words.forEach(w => wordFrequency[w] = wordArr.filter(x => x === w).length) // this is better than the previous code (from Hulk POV)

    
    // Approach #3   - supposed to be the most concise BUT the most complex, do not use
    // const wordFrequency = Object.fromEntries([...new Set(wordArr)].map(w => [w,wordArr.filter(x => x === w).length]))
        
    console.log(`✅  4: `, wordFrequency)
}

_4wordFrequency(["apple", "banana", "apple", "cherry", "banana", "apple"])
//--------------------4



const _5invertObject = (inputObj) => {
    if(!isArgumentValid(inputObj, 'object')){return}

    const outputObj = {}

    for (let key in inputObj){
        const value = inputObj[key]
        outputObj[value] = key
    }
    // dummyObj[key] = key                      --> { name: 'name', role: 'role' }
    // dummyObj[inputObj[key]] = inputObj[key]  --> { Alice: 'Alice', Admin: 'Admin' }

    console.log(`✅  5: `, outputObj)
}

_5invertObject({ name: "Alice", role: "Admin" })
//--------------------5



const _6mergeObjects = (objA, objB) => {
    if(!isArgumentValid(objA, 'object') || !isArgumentValid(objB, 'object')){return}

    const merger = {...objA, ...objB}

    console.log(`✅  6: `, merger)
}

_6mergeObjects({ a: 1, b: 2 }, { b: 9, c: 3 })
//--------------------6



const _7addAverage = (studentObj) => {
    if(!isArgumentValid(studentObj, 'object')){return}
    
    const scores = studentObj['scores'];
    
    const avg = scores.reduce((sum, x) => sum += x )/scores.length; // how do these sub-functions (sum, x) work? their order doesn't matter apparently
    
    const studentAvgObj = {...studentObj, average: +avg}
    
    console.log(`✅  7: `, studentAvgObj)
}

_7addAverage({ name: "John", scores: [80, 90, 100] })
//--------------------7



const _8toQueryString = (queryObj) => {
    if(!isArgumentValid(queryObj, 'object')){return}

    let queryStr = JSON.stringify(queryObj);

    queryStr = queryStr.replaceAll('"','');
    queryStr = queryStr.replaceAll(':','=');
    queryStr = queryStr.replaceAll(',','&');
    queryStr = queryStr.replaceAll('{','"');
    queryStr = queryStr.replaceAll('}',`"`);

    console.log(`✅  8: `, queryStr)
}

_8toQueryString({ search: "javascript", page: 2, filter: "recent" })
//--------------------8



const _9highlightMVP = (team) => {
    if(!isArgumentValid(team, 'object')){return}

    const topScore = Math.max(...Object.values(team));
    
    const index = Object.values(team).findIndex(x => x == topScore)
    const MVP = Object.keys(team)[index];
    
    console.log(`✅  9: `, MVP)
}

_9highlightMVP({ Alice: 14, Bob: 22, Charlie: 18 })
//--------------------9



const _10cleanObject = (dirtyObj) => {
    if(!isArgumentValid(dirtyObj, 'object')){return}

    const props = Object.entries(dirtyObj);

    const filter = props.filter(x => x[1] != (null || undefined)); // zith null, loose contradiction (!=) works whereas strict contradiction (!==) doesn't

    const cleanUp = Object.fromEntries(filter);

    console.log(`✅ 10: `, cleanUp);
    }
_10cleanObject({ name: "Alex", age: null, email: undefined, active: true })
//--------------------10



