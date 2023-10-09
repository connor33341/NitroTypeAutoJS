// connor33341, Yes I am using semi colins 
const DashLetter = "dash-letter";
const Retracting = "is-retracting";
const Endpoint = "https://raw.githubusercontent.com/connor33341/NitroTypeAutoJS/main/config/ButtonMap.txt"
let Data = ""
let DataArray = []
function Setup(){
    var XHR = new XMLHttpRequest()
    XHR.onreadystatechange = function(){
        if (XHR.readyState === 4 && XHR.status === 200){
            Data = XHR.responseText
            console.log("DATA: \n"+Data)
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
    Main();
}
function ClassNameWait(className, callback) {
    const targetElement = document.querySelector(`.${className}`);
    if (targetElement) {
      callback(targetElement);
      return;
    }
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          const addedNode = Array.from(mutation.addedNodes).find(node => {
            return node.classList && node.classList.contains(className);
          });
          if (addedNode) {
            observer.disconnect();
            callback(addedNode);
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
        ClassNameWait(DashLetter,DashLetterElement => {
            if (DashLetterElement){
                console.log("Game Loaded");
            } else {
                console.log("Error: Not Found");
            }
            let Elements = document.querySelectorAll(`.${DashLetter}`);
            let Words = [];
            for (let index in Elements){
                var Element = Elements[index];
                var Text = Element.textContent;
                for (let index2 in Text){
                    var Char = Text[index2];
                    Words.push(Char);
                }
            }
            /*
            if (RetractingElement){
                console.log("Error: Confused");
            } else {
                console.log("Race Started");
            }*/
            console.log("Words:");
            console.log(Words);
            for (let index in Words){
                var Char = Words[index];
                let KeyCode = null;
                /*
                jQuery.event.trigger({
                    type: 'keypress',
                    which: String(Char).charCodeAt(0)
                })*/
                for (let index2 in DataArray){
                    var Object = DataArray[index2];
                    var Key = Object[0];
                    var Code = Object[1];
                    if (Key == Char){
                        KeyCode = Code;
                    }
                }
                if (KeyCode){
                    function GetAllEventListeners(element, eventType) {
                        const eventListeners = [];
                      
                        function findEventListeners(node) {
                          if (!node) return;
                      
                          const listenersOfType = [];
                      
                          // Get all registered event listeners on the element
                          const registeredListeners = node.__events;
                          
                          if (registeredListeners && registeredListeners[eventType]) {
                            for (const listener of registeredListeners[eventType]) {
                              listenersOfType.push({
                                type: eventType,
                                listener: listener.listener,
                                useCapture: listener.useCapture || false, // Default to false if useCapture is not specified
                              });
                            }
                          }
                      
                          if (listenersOfType.length > 0) {
                            eventListeners.push({
                              element: node,
                              listeners: listenersOfType,
                            });
                          }
                      
                          for (const childNode of node.childNodes) {
                            findEventListeners(childNode);
                          }
                        }
                      
                        findEventListeners(element);
                      
                        return eventListeners;
                      }
                    console.log("Pressing Key: "+String(KeyCode));
                    var LisitnersKeyPress = GetAllEventListeners(document,"keypress");
                    for (let index in LisitnersKeyPress){
                        const KeyEvent = new KeyboardEvent('keypress', {
                            key: Key,
                            bubbles: true,
                            cancelable: true,
                            keyCode: KeyCode,
                            which: 13
                        })
                        var Object = Lisitners[index];
                        var Element = Object.element;
                        Element.dispatchEvent(KeyEvent);
                    }
                    var LisitnersKeyDown = GetAllEventListeners(document,"keydown");
                    for (let index in LisitnersKeyDown){
                        const KeyEvent = new KeyboardEvent('keydown', {
                            key: Key,
                            bubbles: true,
                            cancelable: true,
                            keyCode: KeyCode,
                            which: 13
                        })
                        var Object = Lisitners[index];
                        var Element = Object.element;
                        Element.dispatchEvent(KeyEvent);
                    }
                    var LisitnersKeyUp = GetAllEventListeners(document,"keydown");
                    for (let index in LisitnersKeyUp){
                        const KeyEvent = new KeyboardEvent('keyup', {
                            key: Key,
                            bubbles: true,
                            cancelable: true,
                            keyCode: KeyCode,
                            which: 13
                        })
                        var Object = Lisitners[index];
                        var Element = Object.element;
                        Element.dispatchEvent(KeyEvent);
                    }
                } else {
                    console.log("KeyCode not found for KEY: "+Char);
                }
            }
        });
    } else {
        console.log("Error: SetUp Function not found");
    };
};
Setup();