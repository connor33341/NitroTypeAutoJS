let KeyCodes = ""
document.addEventListener("keypress",function(event){
    var Key = event.key
    var KeyCode = event.keyCode
    KeyCodes = KeyCodes + "'" + Key + "':"+KeyCode + ";\n"
    console.log(KeyCodes)
})
function GetKeyCodes(){
    return KeyCodes
}