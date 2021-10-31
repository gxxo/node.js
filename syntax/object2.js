var f = function(){
    console.log(1+1);
    console.log(1+2);
}   //변수에 대입이 가능하므로 함수는 값임.
var a = [f];
a[0]();

var o = {
    func:f
}
o.func();

// var i = if(true){console.log(1)};    
// var w = while(true){console.log(1)};