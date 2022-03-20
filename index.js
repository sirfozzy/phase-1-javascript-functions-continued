// code your solution here
function saturdayFun(act='roller-skate'){
    return `This Saturday, I want to ${act}!`;
}

function mondayWork(act1='go to the office'){
    return `This Monday, I will ${act1}.`

}

function wrapAdjective(defaul='*'){
    return function inner(special='*'){
        return `You are ${defaul}${special}${defaul}!`
    }
}

wrapAdjective("||")("a dedicated programmer")