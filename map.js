let KeyCodes = ""
document.addEventListener("keypress",function(event){
    var Key = event.key
    var KeyCode = event.KeyCode
    KeyCodes = KeyCodes + Key + ":"+KeyCode + ";\n"
    console.log(KeyCodes)
})