const input=document.querySelector("input[id='input']");
const button=document.querySelector("input[id='button']");
const trs=document.querySelectorAll("tbody tr");
// console.log(button);
var tempTr;
var tempText;
const count=0;

button.onclick=function(){
    var check =false;

    if(tempTr){ //tempTr이 undefined가 아니라면 (뭐라도 담겨있다면)
        tempTr.style.background = "#fff";
        tempTr.firstElementChild.innerHTML = tempText;
    }

    trs.forEach((tr)=>{
        const td=tr.firstElementChild;
        if(input.value==td.innerHTML){
            tempText=td.innerHTML;
            tempTr=tr;

            td.innerHTML='★' + td.innerHTML;
            tr.style.background="#ef5350";
            check=true;
        }
    });

    if(!check){
        alert("다시 시도해주세요 ");
    }

    
    

}





















