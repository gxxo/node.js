var o ={    //객체에 여러 연관된 데이터와 함수를 저장해놓기
    v1:'v1',
    v2:'v2',
    f1:function (){
        console.log(this.v1);
    },
    f2:function (){
        console.log(this.v2);
    }
}

o.f1();
o.f2();