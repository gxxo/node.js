var fs = require('fs');

//readFileSync
/*
console.log('A');
var result = fs.readFileSync('syntax/sample.txt','utf8');
console.log(result);
console.log('C');
*/

console.log('A');
fs.readFile('syntax/sample.txt','utf8', function(err, result){
    console.log(result);
});           //call back(파일을 읽은 후, 나중에 함수를 실행시키는 것)
console.log('C');