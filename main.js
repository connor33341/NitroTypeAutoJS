// connor33341, Yes I am using semi colins 
const KeyCodeReader = "https://raw.githubusercontent.com/connor33341/NitroTypeAutoJS/main/KeyCodeReader.js";
const WaitForElement = "";
let ScriptData = "";
const DashLetter = ".dash-letter";
const Retracting = ".is-retracting";
function Main(){
    /*
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if (XHR.readyState === 4 && XHR.status === 200){
            ScriptData = XHR.responseText;
        };
    };
    XHR.open("GET",JSEndpoint,true);
    XHR.send();
    */
    var ScriptElement = document.createElement("script");
    //ScriptElement.textContent = ScriptData;
    ScriptElement.src = KeyCodeReader;
    document.head.appendChild(ScriptElement);
    var ScriptElement2 = document.createElement("script");
    ScriptElement2.src = WaitForElement;
    document.head.appendChild(ScriptElement2);
    if (true){
        if (typeof jQuery == "undefined"){
            var jQueryScript = document.createElement("script");
            jQueryScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
            document.head.appendChild(jQueryScript);
        }
        let DashLetterElement = document.getElementsByClassName(DashLetter)[0];
        if (DashLetterElement){
            console.log("Game Loaded");
        } else {
            while (DashLetterElement == null){
                DashLetterElement = document.getElementsByClassName(DashLetter)[0];
            }
        }
        let Elements = document.getElementsByClassName(DashLetter);
        let Words = [];
        for (let index in Elements){
            var Element = Elements[index];
            var Text = Element.textContent;
            for (let index2 in Text){
                var Char = Text[index2];
                Words.push(Char);
            }
        }
        let RetractingElement = document.getElementsByClassName(Retracting)[0];
        if (RetractingElement){
            console.log("Race Started");
        } else {
            while (RetractingElement == null){
                RetractingElement = document.getElementsByClassName(Retracting)[0];
            }
        }
    } else {
        console.log("Error: SetUp Function not found");
    };
};
Main();