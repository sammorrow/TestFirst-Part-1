function doubler(num){return num * 2;}

function map (array, func){
    outputArr = [];
    for (var i = 0; i < array.length; i++){
        outputArr.push(func(array[i]))
    }
    return outputArr;
}

function filter(array, func){
    outputArr = [];
    for (var i = 0; i < array.length; i++){
        if (func(array[i])){
            outputArr.push(array[i])
        }
    }
    return outputArr;
}

function contains(obj, testVal){
    for (var key in obj){
        if (obj[key] === testVal){
            return true;
        }
    }
    return false;
}

function countWords(str){
    var count = 1;
    for (var i = 0; i < str.length; i++){
        if (str[i] === " "){
            count++
        }
    }
    return count;
}

function countWordsInReduce(count, index){
    count++
    for(var j = 0; j < index.length; j++){
        if (index[j] === " "){
            count++;
        }
    }
    return count;
};

function reduce(array, startVal, func){
    if (!startVal){
        startVal = 0;
    }
    for (var i = 0; i < array.length; i++){
        startVal = func(startVal, array[i]);
    }
    return startVal;
}

function sum(array){return reduce(array, 0, function(a ,b){return a + b})}

function every(array, filterFunc){
    if (!(reduce(array, 0, function(a,b){return a + filterFunc(b)}) % array.length)){
        return true;
    }
    return false;
}

function any(array, filterFunc){
    if (reduce(array, 0, function(a,b){return a + filterFunc(b)}) > 0){
        return true;
    }
    return false;
}