function createCalculator(){
var calculator = {
                    total: 0,
                    value: function(){return this.total},
                    add: function(num){this.total += num},
                    subtract: function(num){this.total -= num},
                    clear: function(){this.total = 0}
                }

return calculator;
}