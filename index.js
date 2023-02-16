var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-area");
var output_div=document.querySelector("#output");


function clickHandler(){
    output_div.innerText= "abcdefghtuijk    " + txtInput.value;
}

btnTranslate.addEventListener("click",clickHandler);



