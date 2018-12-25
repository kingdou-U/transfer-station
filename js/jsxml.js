let toXMLWithString = function (text) {
    let xmlDoc;
    if (window.ActiveXObject) {
        xmlDoc = new ActiveXObject ("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML (text);
    } else {
        let parser = new DOMParser();
        xmlDoc = parser.parseFromString(text,"text/xml");
    }
    return xmlDoc;
}
let toStringWithXML = function (XMLObject) {
    if (window.ActiveXObject)
        return XMLObject.xml;
    else
        return (new XMLSerializer()).serializeToString(XMLObject);
}
// webRTC
let openAudio = function (success, failure) {
    navigator.getUserMedia  = navigator.getUserMedia ||
                              navigator.webkitGetUserMedia ||
                              navigator.mozGetUserMedia ||
                              navigator.msGetUserMedia;
    if (navigator.getUserMedia) {
        window.AudioContext = window.AudioContext || 
                              window.webkitAudioContext || 
                              window.mozAudioContext || 
                              window.msAudioContext;
        let context = new AudioContext();

        let onSuccess = (stream) {
            var audioInput = context.createMediaStreamSource(stream);
            audioInput.connect(context.destination);
            success && success (stream);
        }
        let onFailure = (error) {
            failure && failure (error);
        }
        navigator.getUserMedia({audio:true}, onSuccess, onFailure);
    } else {
        failure && failure ("no support");
    }
}


let xml = toXMLWithString ("<xml option='1'>2</xml>");
let node = xml.getElementsByTagName ('xml');
console.log(node)
console.log(node[0].innerHTML)
console.log(toStringWithXML(xml));

//
// let blobObject = URL.createObjectURL(stream)
// function blobToDataURL(blob, callback) {
//     let a = new FileReader();
//     a.onload = function (e) { callback(e.target.result); }
//     a.readAsDataURL(blob);
// }


function WebSocketTest () {
    if ("WebSocket" in window) {
        var ws = new WebSocket("ws://s1.lwsoft.club:8004?roomCode=1&roomName=testRoom&userName=1A");
        ws.onopen = function() {
            // Web Socket 已连接上，使用 send() 方法发送数据
            ws.send("发送数据");
        };
        ws.onmessage = function (evt) { 
            var received_msg = evt.data;
        };
        ws.onerror = function(evt) {
            console.log(evt)
        };
        ws.onclose = function() { 
            // 关闭 websocket
        };
    } else {
        // 浏览器不支持 WebSocket
        alert("您的浏览器不支持 WebSocket!");
    }
}