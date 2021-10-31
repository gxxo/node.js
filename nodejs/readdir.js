var testFolder = './data'; //nodejs는 파일리스트를 배열로 저장
var fs = require('fs');

fs.readdir(testFolder,function(error, filelist){
    console.log(filelist);
});