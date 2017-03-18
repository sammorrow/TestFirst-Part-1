function concatString(){
    var args = [].slice.call(arguments)
    return args.join("")
};

function yourFunctionRunner(func){
    var output = "";
    for (var i = 0; i < arguments.length; i++){
        output += arguments[i]();
    }
    return output;
};

function makeAdder(num){
    return function(num2){return num + num2};
};

function once(func){
  var toggle = true; 
  return function(){if (toggle){toggle = false; func()}}
}

function createObjectWithClosures(){
    var value = null, newObj = {
        oneIncrementer: function(){value += 1},
        tensIncrementer: function(){value += 10},
        getValue: function(){return value},
        setValue: function(num){value = num}
        }
    return newObj

}

function guestListFns(guestListArray, secretCode){
    var outputArray = [];
    function secretArrayAdd(value){
      return function(attempt){
          if (attempt === secretCode){
            return value
          } else {
            return "Secret-Code: Invalid"
          }
      }
    }
    for (var i = 0; i < guestListArray.length; i++){
        outputArray.push(secretArrayAdd(guestListArray[i]));
    }
    return outputArray;
}

function generateGuestList(codedList, code){
    outputArr = [];
    for (var i = 0; i < codedList.length; i++){
        outputArr.push(codedList[i](code))
    }
    return outputArr;
}