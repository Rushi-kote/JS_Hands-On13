let text= document.getElementById("text");
console.log(text.innerText);

let tag = document.getElementsByTagName("h1");
console.log(tag[0].innerText);

let byClass = document.getElementsByClassName("box");
console.log(byClass[0].innerText);

let tagh1 = document.getElementsByTagName("h1");
tagh1[1].innerHTML=`<h1>Hello World</h1>`;

let btnElement =document.getElementById("changedirectionbtn");
let bool = 1;
btnElement.addEventListener("click",function(){
    if(bool===1){
        bool=0;
        document.getElementById("flex-container").style.flexDirection = "row";
    }else{
        bool=1;
        document.getElementById("flex-container").style.flexDirection = "column";
    }
});


let btnChnageText = document.getElementById("ChangeText");
let divText = document.getElementById("divText");

btnChnageText.addEventListener("click",function(){
    debugger;
    divText.innerText="Welcome to Elevation academy";
    
});

let time= document.getElementById("time");

function timer(){
    let timedate= new Date();
    let hrs = timedate.getHours();
    let mins = timedate.getMinutes();
    let secs = timedate.getSeconds();
    time.innerHTML=`${hrs} : ${mins} : ${secs}`;
}


let btnsave = document.getElementById("save");
let selected = document.getElementById("passingYear");

btnsave.addEventListener("click",function(){
    let selectedOption = selected.options[selected.selectedIndex].text;
    document.getElementById("Selected_Option").innerText = `Selected option is :${selectedOption}`;
});


document.getElementById("heading").style.color="red";












setInterval(function(){
    timer();
},1000);
