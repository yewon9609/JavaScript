var pw = prompt("자동차 초기 비밀번호입력");

// console.log(pw);
const on=document.getElementById("on");
const off=document.getElementById("off");
const reset=document.getElementById("reset");
var input = document.getElementById("inputPW");
var condition=document.querySelector("div p");
var count=0;
var img = document.querySelector("img");
var check=false;
var check2=false;


on.onclick=function(){
    if(check==true){
        condition.innerHTML="이미 켜져있습니다.";
        document.getElementById("inputPW").style.visibility="hidden";
        img.src="img/2.gif";
    }else if(input.value==pw){
    condition.innerHTML="시동 켜짐";
    //.visibility:요소 숨기기
    document.getElementById("inputPW").style.visibility="hidden";
    img.src="img/2.gif";
    check=true;
    }else{
        condition.innerHTML="비밀 번호"+ ++count +"회 틀림";
        if(count==6){
            police();
        }
    }

};

off.onclick=function(){
    if(check2==true){
        condition.innerHTML="이미 꺼져있습니다.";
        document.getElementById("inputPW").style.visibility="hidden";
        img.src="img/5.gif";
    }
    else if(input.value==pw){
        condition.innerHTML="시동 꺼짐";
        document.getElementById("inputPW").style.visibility="visible";
        img.src="img/5.gif";
        check2=true;
    }else{
        condition.innerHTML="비밀 번호"+ ++count +"회 틀림"
        if(count==6){
            police();
        }
    }
}

function police(){
    condition.innerHTML="경찰 출동";
        document.getElementById("inputPW").style.visibility="hidden";
        off.style.visibility="hidden";
        on.style.visibility="hidden";
        reset.style.marginLeft="-25%"
        img.src="img/4.png";

}
reset.onclick=function(){
    
    location.href="test3.html";


}














