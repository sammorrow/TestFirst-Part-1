function repeat(str, iterations){
    var outputStr = "";
    for (var i = 0; i < iterations; i++){
        outputStr += str
    }
    return outputStr;
}

function sum(array){
    var outputInt = 0;
    for (var i = 0; i < array.length; i++){
        outputInt += array[i]
    }
    return outputInt;
}

function join(array, delimiter){
    var outputStr = "";
    for (var i = 0; i < array.length; i++){
        for (var j = 0; j < array[i].length; j++){
            outputStr += array[i][j];
        }
    if (delimiter && i !== array.length -1){
        outputStr += delimiter;
        }
    }
    return outputStr;
}

function gridGenerator(num){
    var outputGrid = "";
    for (var i = 0; i < num; i++){
        for (var j = 0; j < num; j++){
            if (i % 2){
              if (j % 2){
                  outputGrid += "#"
              } else {
                  outputGrid += " "
              }
            } else {
              if (j % 2){
                outputGrid += " "
              } else {
                outputGrid += "#"
              }
            }
        }
        outputGrid += "\n"
    }
    return outputGrid
}

function paramify(obj){
    var storageArray = [];
    for (var key in obj){
        if (obj.hasOwnProperty(key)){
            storageArray.push(key + "=" +obj[key]);
        }
    }
    return storageArray.sort().join("&")
}

function paramifyObjectKeys(obj){
    var storageArray = [];
    var checkerArray = Object.keys(obj)
    for (var key in obj){
      if (checkerArray.indexOf(key) > -1)
        storageArray.push(key + "=" + obj[key])
    }
    return storageArray.sort().join("&")
}

function renameFiles(array){
    var outputArray = []
    for (var i = 0; i < array.length; i++){
        var toggle = true, count = 1;
        while (toggle){
            if (outputArray.indexOf(array[i]) === -1){
              outputArray.push(array[i])
              toggle = false; 
            } else if (outputArray.indexOf(array[i] + "(" + count + ")") === -1){
              outputArray.push(array[i] + "(" + count + ")")
              toggle = false;
            } else {
              count++
            }
        }
    }
 return outputArray       
}
