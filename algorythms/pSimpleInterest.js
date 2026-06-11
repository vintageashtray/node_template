import {l, isArgumentValid} from '../lib/utilities.js'

export function pSimpleInterest(p, r, t, logLevel=3){
    if (!isArgumentValid(p, ['number']) || !isArgumentValid(r, ['number']) || !isArgumentValid(t, ['number'])){return}

    const simpleInterest = p * r/100 * t/12

    l.success(`16: The Simple Interest is: '${simpleInterest}'`, logLevel)
}