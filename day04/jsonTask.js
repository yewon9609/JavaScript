//상품명과 가격을 JSON으로 만든다.
//위 JSON을 Object객체로 변환한다.
//각각의 프로퍼티를 출력한다. 
//JSON으로 변환한 뒤 출력한다.


let p1JSON = '{"name" : "사과" , "price" : 3000}';
//JSON 을 object로 변환
let p2=JSON.parse(p1JSON);
console.log(p2.name);
console.log(p2.price+"원");

p1JSON =JSON.stringify(p1JSON);
console.log(p1JSON);


