//import your dependencies if needed 
import { l, isArgumentValid } from '../lib/utilities.js'

const pascalTriangle = [[1]]; /// 0 1 pascalTriangle[1]
let row = [];

export function rPascalTriangle(n, logLevel=3) {
    if (!isArgumentValid(n, 'number')) { return }

    let x;
    let y;
    l.info("-------------", logLevel)
    l.info(`18: 2^0 = ${1} - ${pascalTriangle[0].join(', ')}`, logLevel)
    for (x = 2; x <= n; x++) {
        for (y = 0; y < x; y++) {
            row.push(sequencerA(x, y) + sequencerB(x, y))
        }
        pascalTriangle.push(row)
        l.info(`18: 2^${x-1} = ${row.reduce((sum,current)=>sum+=current)} - ${row.join(', ')}`, logLevel)
        row = []
    }

}

function rowStacker(n) {
    return
}

function rowFiller(n) {
    return
}

function sequencerA(x, y) {
    let seq = pascalTriangle[x - 2][y - 1]
    if (!seq) { return 0 }
    return seq
}

function sequencerB(x, y) {
    let seq = pascalTriangle[x - 2][y]
    if (!seq) { return 0 }
    return seq
}

function spacePadding() {
    return
}

// prevRow = f(pascalTriangle[0], x2, y1) -> [1,1]
// prevRow = f(prevRow, x3, y2) -> [1,2,1]
// prevRow = f(prevRow, x4, y3) -> [1,3,3,1]
// 