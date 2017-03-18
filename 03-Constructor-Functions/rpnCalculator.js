function RPNCalculator(){
    this.inputHistory = [];
    this.currentVal = null;
    this.push = function(num){
        if (this.currentVal !== null){
            this.inputHistory.push(this.currentVal);
        } 
        this.currentVal = num;
    }; 
}

RPNCalculator.prototype.value = function(){return this.currentVal};

RPNCalculator.prototype.plus  = function(){
    if (this.inputHistory[0]){
    this.currentVal += this.inputHistory.pop(); 
    } else { 
    throw "rpnCalculatorInstance is empty";
    }
}
RPNCalculator.prototype.minus = function(){
        if(this.inputHistory[0]){
            var temp = this.currentVal;
            var temp2 = this.inputHistory.pop()
            this.currentVal = temp2 - temp
        } else {
        throw "rpnCalculatorInstance is empty"
    }
}
RPNCalculator.prototype.divide= function(){
        if(this.inputHistory[0]){
            var temp = this.currentVal;
            this.currentVal = this.inputHistory.pop() / temp
        } else {
        throw "rpnCalculatorInstance is empty"
    }
}
RPNCalculator.prototype.times=function(){
    if (this.inputHistory[0]){
        this.currentVal *= this.inputHistory.pop()
    } else {
       throw "rpnCalculatorInstance is empty";
    } 
}

