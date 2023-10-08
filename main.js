// connor33341, Yes I am using semi colins 
const DashLetter = ".dash-letter";
const Retracting = ".is-retracting";
const Endpoint = "https://raw.githubusercontent.com/connor33341/NitroTypeAutoJS/main/config/ButtonMap.txt"
let Data = ""
let DataArray = []
function Setup(){
    var XHR = new XMLHttpRequest()
    XHR.onreadystatechange = function(){
        if (XHR.readyState === 4 && XHR.status === 200){
            Data = XHR.responseText
            console.log("DATA: "+Data)
            ProcessData()
        }
    }
    XHR.open("GET",Endpoint,true)
    XHR.send()
}
function ProcessData(){
    var Lines = Data.split("\n")
    for (let index in Lines){
        var Line = Lines[index]
        console.log("Processing Line#: "+String(index))
        var LineData = Line.split(";")[0]
        var LineString = LineData.split("'")
        if (LineString[1] && LineString[2]){
            var Key = LineString[1].split("'")[0]
            if (Key == "_REMOVED"){
                console.log("Key Removed")
            } else {
                var KeyCode = LineString[2].split(":")[1]
                DataArray.push([Key,KeyCode])
                console.log("Added KEY: "+Key+" & KEYCODE: "+KeyCode)
            }
        } else {
            console.log("Error: Bugged Line")
        }
    }
}
function ClassNameWait(className) {
    const targetElement = document.querySelector(`.${className}`);
    if (targetElement) {
      console.log("Element already exists");
      return targetElement;
    }
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          const addedNode = Array.from(mutation.addedNodes).find(node => {
            return node.classList && node.classList.contains(className);
          });
          
          if (addedNode) {
            observer.disconnect();
            console.log("Element added");
            return addedNode;
          }
        }
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
function Main(){
    if (true){
        if (typeof jQuery == "undefined"){
            var jQueryScript = document.createElement("script");
            jQueryScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
            document.head.appendChild(jQueryScript);
        }
        let DashLetterElement = ClassNameWait(DashLetter)
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
function Load(){
    ScriptElement.onload = function(){
        console.log("Script 1 Loaded");
        ScriptElement2.onload = function(){
            console.log("Script 2 Loaded");
            Main();
        };
    };
};
Load();