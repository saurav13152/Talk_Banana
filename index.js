var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-area");
var output_div=document.querySelector("#output");
var after_click=document.querySelector("#afterclick");

var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTranslatinURL(text){

    return serverURL + "?"+ "text="+text
}

 function errorHandler(error){
    console.log("error occured" , error);
    alert("Server is not working, try later");
 }

 
const clickHandler=() => {
  
    var inputText=txtInput.value; //taking input
    txtInput.value="";
    after_click.innerHTML=inputText;

    // calling server for processing
    fetch(getTranslatinURL(inputText))
       .then(response => response.json())
       .then(json =>{
         var translatedText= json.contents.translated;
         output_div.innerText=translatedText;  // output
         console.log("Fine")
       })
        .catch(errorHandler)
}

 btnTranslate.addEventListener("click",clickHandler);



