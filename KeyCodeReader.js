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
        var Key = LineString[1].split("'")[0]
        if (Key == "_REMOVED"){
            console.log("Key Removed")
        } else {
            var KeyCode = LineString[2].split(":")[1]
            DataArray.push([Key,KeyCode])
            console.log("Added KEY: "+Key+" & KEYCODE: "+KeyCode)
        }
    }
}