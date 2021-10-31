//파일 읽는 법
var fs = require('fs');

fs.readFile('sample.txt', 'utf8', function(err, data){
    console.log(data);
});