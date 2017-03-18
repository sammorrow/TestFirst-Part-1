function setPropsOnObj(object){
 object["x"] = 7
 object["y"] = 8
 object.onePlus = function(num){
     return num + 1;
 }
}


function setPropsOnArr(arr){
    arr.push(5)
    arr.full = "stack" 
    arr.hello = function(){
        return "Hello!"
    }
    arr.twoTimes = function(num){
        return num * 2;
    }
}

function setPropsOnFunc(func){
    func()
    func.year = "20??"
    func.divideByTwo = function(num){
        return num / 2
    }
    func.prototype.helloWorld = function(){
        return "Hello World"
    }
}
