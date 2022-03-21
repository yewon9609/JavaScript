

const button=document.querySelector("input[type='button']");
const input=document.getElementById('number');
const answer=document.querySelector("div p");

button.addEventListener("click", function (){
    var number=input.value;
     var hangle="공일이삼사오육칠팔구";
    var result="";
  
    
    if(number.includes(".")){
      var dot=number.indexOf(".");
    }
    
    number=number.replace(".",'');
    

    for(let i in number){
      if(i==dot){
        result+="점";
      }
      result+= hangle[number.charAt(i)];
    }
    
    if(result.includes("unde")){
      answer.innerHTML="숫자만 입력해주세요";
    }else{ answer.innerHTML=result;}
    



})




// function changeToHangle(number){
//   var hangle="공일이삼사오육칠팔구";
//   var result="";
//   number = number.trim();

//   for(let i in number){
//     result +=hangle [number.charAt(i)];
//   }
//   console.log(result);
// }


// changeToHangle('1234');