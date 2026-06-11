import chalk from 'chalk'

const log = console.log;

// formerly logger.js
export const l = {
    info: function(msg,logLevel=3) { if (logLevel === 3) log(chalk.cyan(`ℹ️  ${msg}`)); },
    success: function(msg,logLevel=3) { if (logLevel === 3) log(chalk.green(`✅ ${msg}`)); },
    warn: function(msg,logLevel=3) { logLevel !== 0 && logLevel !== 2 ? log(chalk.yellow(`⚠️  ${msg}`)) : void 0; },
    fail: function(msg,logLevel=3) { if (logLevel !== 0) log(chalk.red(`❌ ${msg}`)); },
}

export function isArgumentValid (value, types){
        // ['string','number'].some((t)=>t !==)
    const valueType = typeof value;
    
    if(!types.includes(valueType)){
        l.fail(`Type mismatch error: argument '${value}' of type '${typeof value}' must be of type${types.length == 1 ? '' : 's'} [${types.join(', ')}]`)
        return false
    }
    return true
}
// isValueTypeOneOf(true, ['string','number'])


export function isArgumentValidOld (n, type){
    if (typeof n !== type){
        l.fail(`Invalid argument ${n} of type '${typeof n}'. A '${type}' type is required.`)
        return false
    }
    return true
}

export function isArgumentInvalid (n, type){
    if (typeof n === type){
        return false
    }
    l.fail(`Invalid argument ${n} of type '${typeof n}'. A '${type}' type is required.`)
    return true
}


// 0: no logging; 
// 1: warnings and errors; 
// 2: errors only; 
// 3: all kinds (inc. informative & success)
// logging that only concerns the coder is considered sensitive data, thus not exposed to the user generally (loosely speaking, to discuss later on)
