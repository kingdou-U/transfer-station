String.prototype.format = function () {
    var result = this;
    if (arguments.length > 0) {
        for (var i = 0, len = arguments.length; i < len; ++i) {
            var temp = arguments [i];
            result = result.replace("{"+i+"}", temp);
        }
    }
    return result;
};
var Const = {
    communicationType: {
        key: "communicationType",
        point: "point",
        group: "group"
    },
    userName: {
        key: "userName"
    },
    online: {
        key: "online"
    },
    msgType: {
        key: "msgType",
        text: "text",
        online: "online",
        voice: "voice",
        image: "img",
        file: "file",
        notice: "notice"
    },
    targetChannelId:{
        key: "targetChannelId"
    },
    sendTime: {
        key: "sendTime"
    },
    roomCode: {
        key: "roomCode"
    },
    roomName: {
        key: "roomName"
    },
    message: {
        key: "message"
    }
};
var Tool = {
    toXMLWithString: function (text) {
        var xmlDoc;
        if (window.ActiveXObject) {
            xmlDoc = new ActiveXObject ("Microsoft.XMLDOM");
            xmlDoc.async = "false";
            xmlDoc.loadXML (text);
        } else {
            var parser = new DOMParser();
            xmlDoc = parser.parseFromString(text,"text/xml");
        }
        return xmlDoc;
    },
    toStringWithXML: function (XMLObject) {
        if (window.ActiveXObject)
            return XMLObject.xml;
        else
            return (new XMLSerializer()).serializeToString(XMLObject);
    },
    getContentWithXML: function (XMLObject) {
        return XMLObject.innerHTML;
    }
}
var HandleResult = {
    id: "",
    notice: function () {
        var json = JSON.parse (arguments[1]);
        var noticeString = json[Const.msgType.notice];
        console.log ('通知:' + noticeString)
    },
    online: function () {
        this.id = arguments[1];
        console.log('id:' + this.id);
    },
    text: function () {
        var content = this.getConent (arguments[1]);
        console.log("消息:" + content);
    },
    voice: function () {

    },
    image: function () {

    },
    file: function () {

    }
};
var chat = {
    IsSuporrtWebSocket: typeof Window.WebSocket === "undefined",
    Host: "s1.lwsoft.club:8004",
    Path: "ws",
    roomCode: "1",
    roomName: "testRoom",
    userName: "1A",
    Search: "roomCode={0}&roomName={1}&userName={2}"
}
chat.Message = (function (that) {
    var ws = null;
    var connect = false;
    var msgArray = [];
    var send = function (message) {
        try {
            var temp = "<message></message>";
            var xmlObject = Tool.toXMLWithString(temp);
            var rootObject = xmlObject.documentElement;
            for (var attr in message) {
                var key = attr;
                var val = message [key];
                if (key == "innerHTML")
                    rootObject[key] = val;
                else
                    rootObject.setAttribute (key, val);
            }
            var msg = Tool.toStringWithXML (xmlObject);
            ws.send (msg);
        } catch (error) {
            console.log ('send message error');
            console.log (error);
        }
    }
    if (that.IsSuporrtWebSocket) {
        var uri = "ws://{0}/{1}?{2}".format(
            that.Host
            , that.Path
            , that.Search.format(
                that[Const.roomCode.key]
                , that[Const.roomName.key]
                , that[Const.userName.key]
            )
        );
        ws = new WebSocket (uri);
        ws.onopen = function (evt) {
            connect = true;
            if (msgArray.length != null)
                for (var i = 0, len = msgArray.length; i < len; ++i) {
                    var message = msgArray[i];
                    send(message);
                }
            msgArray=[];
            console.log('connect success');
        };
        ws.onmessage = function (evt) {
            try {
                var message = evt.data;
                var xmlObject = Tool.toXMLWithString(message).documentElement;
                var msgType = xmlObject.getAttribute ('msgType');
                HandleResult [msgType] (xmlObject, Tool.getContentWithXML(xmlObject));
            } catch (error) {
                console.log('onmessage error:');
                console.log(error);
            }
        };
        ws.onerror = function (evt) {
            console.log ('connect error');
            console.log (evt);
        }
        ws.onclose = function (evt) {
            console.log ('connect close');
        }
    }
    return function (message) {
        if (connect) {
            send(message);
        } else {
            msgArray [msgArray.length] = message;
        }
    }
})(chat);

function sendText (text) {
    chat.Message(
        {
            innerHTML: text,
            communicationType: Const.communicationType.group,
            roomCode: chat.roomCode,
            userName: chat.userName,
            roomName: chat.roomName,
            msgType: chat.msgType.text
        }
    );
}
function sendImage (base64Image) {
    chat.Message(
        {
            innerHTML: base64Image,
            communicationType: Const.communicationType.group,
            roomCode: chat.roomCode,
            userName: chat.userName,
            roomName: chat.roomName,
            msgType: chat.msgType.image
        }
    );
}



