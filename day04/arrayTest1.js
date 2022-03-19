//코어객체
//JS의 Array객체는 길이를 설정하지 않아도
//원하는 인덱스에 원하는 값을 바로 추가할 수 있다.
//또한 타입이 지정되어 있지 않기 때문에 다양한 타입도 동시에 담을 수 있다. 

// var datas=[];
// datas[0] = 10;
// console.log(datas);
// datas[3]=20;
// console.log(datas);

//-----------------------------------------------------------------------------------------

var datas =[20, 5, 6, 12, 10];
//java 의 arraylist 의 add랑 비슷함 :push()
//.push : 가장 마지막에 값 추가 
datas.push(19);
console.log(datas);
console.log(datas[3]);  
//-------------------------------------------------------------------------------------------

//.join() : 각각의 요소를 가지고 올때 그 사이의 구분점을 전달한다. 
//.join() : 원하는 구분점을 문자열로 전달하여 각 요소를 전달한 구분점으로 구분한 뒤 문자열로 리턴 
console.log(datas.join(":"));
//.slice: begin index , end index(포함되지 않음) 두개를 전달한다. 
//.slice(begin, end) :원하는 부분을 추출하기 위해 시작 인덱스 (inclusive)와, 마지막 인덱스 (exclusive)를 전달한다. 
//.slice(begin):하나만 전달시 begin부터 마지막 까지 추출한다. 
datas.slice(1,3);
console.log(datas.slice(1,3));
console.log(datas.slice(1));

//--------------------------------------------------------------------------------------------

//foreach(콜백함수(변수){실행할문장;})
datas.forEach(function(value){console.log(value);});

//foreach(콜백함수(값, 인덱스, Array객체){실행할 문장;})
datas.forEach(function(value, index, ar){
    ar[index] = value * value;
});

console.log(datas);

//indexOF(값) : 값을 해당 Array에서 찾은 뒤 인덱스 번호리턴(못 찾을 경우 -1 리턴)
console.log(datas.indexOf(100));

//map(콜백함수(요소){return 변경된 값; })

datas.map(function(v){return v*2;}).forEach(function(v){console.log(v);});











