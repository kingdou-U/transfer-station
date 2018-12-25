// 直播屏幕等高
$( document ).ready(function() {
    equalheight();
});
$(window).resize(function() {
    $('.same-height-target').css('height','auto');
    equalheight();
});
function equalheight(){
    var topHeight = $(".same-height-target").height();
    $(".same-height").height(topHeight);
    var bottomHeight = $('.bottom-height-target').height();
    $('.bottom-height').height(bottomHeight);
}
// 发送文字消息
function showText (chatText) {
    if(chatText.length<=0) return;
    var chatBox='<div class="say-box I-say">' +
        '<p class="chat-name">张大厨-18112341234</p>' +
        '<div class="chat-content">' +
        '<p class="chat-text">'+chatText+'</p>' +
        '</div></div>';
    $('.chat-history').append(chatBox);
    $('.chat-history').scrollTop($('.chat-history').get(0).scrollHeight)
}

function showImage (base64Image) {
    var chatBox='<div class="say-box I-say">' +
        '<p class="chat-name">张大厨-18112341234</p>' +
        '<div class="chat-content">' +
        '<div class="chat-file">' +
        '<div class="file-content">' +
        '<img src="./images/file-chat.png" alt="">' +
        '<p class="file-name">'+fileName+'</p>' +
        '</div>' +
        '<a class="down-file" href="##">下载</a>' +
        '</div></div></div>';
    $('.chat-history').append(chatBox);
}

//播放声音
$(".chat-voice").on('click',function(){
    var audioTag = $(this).find('audio').get(0);
    var audioBg = $(this).find('.voice-bg');
    audioTag.play();
    audioBg.addClass('playing');
    audioTag.addEventListener('ended',function(){
        audioBg.removeClass('playing');
    },false)

});
// 文字输入
$('.sendBtn').on('click',function(){
    var chatText = $(this).closest('.chat-input').find('textarea').val();
    showText (chatText);
    $(this).closest('.chat-input').find('textarea').val('');
});
// 文件输入
$('.file-btn').on('change','input',function(){
    var file = this.files[0];
    var fileName = file.name;
    var reg = /[(.jpg)(.png)(.git)]$/;
    if (reg.test (fileName)) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (evt) {
            var base64Image = evt.target.result;

        }
    } else {

    }

    var chatBox='<div class="say-box I-say">' +
        '<p class="chat-name">张大厨-18112341234</p>' +
        '<div class="chat-content">' +
        '<div class="chat-file">' +
        '<div class="file-content">' +
        '<img src="./images/file-chat.png" alt="">' +
        '<p class="file-name">'+fileName+'</p>' +
        '</div>' +
        '<a class="down-file" href="##">下载</a>' +
        '</div></div></div>';
    $('.chat-history').append(chatBox);
    $(this).val('');
    $('.chat-history').scrollTop($('.chat-history').get(0).scrollHeight);
});

// 点击全屏六屏显示
$('.fullScreen').on('click',function(){
    var layer = layui.layer;
    var index = layer.open({
        title:'',
        type: 2,
        area: ['420px', '640px'], //宽高
        closeBtn: 0, //不显示close按钮
        content: './onAir.html',
    });
    equalheight();
    layer.full(index);
});

// 详情展示
$('.detail-btn').on('click',function(){
    var layer = layui.layer;
    var html = $('.info-lists').get(0).outerHTML;
    var index = layer.open({
        title:'案件详情',
        type:1,
        area:['500px','400px'],
        content:html
    })
});
