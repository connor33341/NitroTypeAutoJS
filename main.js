// connor33341, Yes I am using semi colins 
const JSEndpoint = "https://raw.githubusercontent.com/connor33341/NitroTypeAutoJS/main/KeyCodeReader.js";
let ScriptData = "";
function Main(){
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if (XHR.readyState === 4 && XHR.status === 200){
            ScriptData = XHR.responseText;
        };
    };
    XHR.open("GET",JSEndpoint,true);
    XHR.send();
    var ScriptElement = document.createElement("script");
    ScriptElement.textContent = ScriptData;
    document.head.appendChild(ScriptElement);
    if (typeof Setup === "function" ){
        if (typeof jQuery == "undefined"){
            var jQueryScript = document.createElement("script");
            jQueryScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
            document.head.appendChild(jQueryScript);
        }
    } else {
        console.log("Error: SetUp Function not found");
    };
};
Main();