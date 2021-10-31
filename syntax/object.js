var members = ['gaga', 'haha', 'nana']; //배열
console.log(members[1]);    //haha
var i =0;
while(i<members.length){
    console.log('array loop', members[i]);
    i++;
}

var roles = {   //객체(각각의 데이터마다 고유한 이름을 부여)
    'programmer':'gaga',
    'designer' : 'haha',
    'manager' : 'nana'
}
console.log(roles.designer);    //haha

for(var name in roles){
    console.log('object=> ',name, 'value => ', roles[name]);      //name엔 key값
}

