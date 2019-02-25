document.write('<script language = javascript src = "https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>');

function init() {
  localStorage.ifLogin = true;
  localStorage.ifUnread = true;
  localStorage.photoSrc = '/static/pic/photo.jpg';

  $("#manageAccount").css('display','none');
  if (localStorage.ifLogin){
    document.getElementById('last').removeChild(document.getElementById('signup'));
    document.getElementById('secondLast').removeChild(document.getElementById('login'));
    var personalCenter = document.createElement('a');
    personalCenter.innerText = '个人中心';
    personalCenter.href = './personalCenter.html';
    var newLi = document.createElement('li');
    newLi.style.cssFloat = 'right';
    $('#nav').append(newLi);
    newLi.appendChild(personalCenter);

    var message = document.createElement('img');
    message.className = 'message';
    message.src = '/static/pic/message_white.png';
    document.getElementById('secondLast').appendChild(message);
    if (localStorage.ifUnread){
      message.src = '/static/pic/message_yellow.png';
    }
    $('#last').hover(
      function(){
        $('#last').css('border-bottom','3px solid transparent');
        $('#last').css('border-top','3px solid transparent');
      },
      function(){
        $('#last').css('border-bottom','3px solid transparent');
        $('#last').css('border-top','3px solid transparent');
      }
    );
    $('.message').hover(
      function(){
        message.src = '/static/pic/message_blue.png';
      },
      function(){
        if(localStorage.ifUnread){
          message.src = '/static/pic/message_yellow.png';
        }else{
          message.src = '/static/pic/message_white.png';
        }
      }
    );

    var photo = document.createElement('img');
    photo.id="photo";
    photo.className = 'photo';
    photo.src = localStorage.photoSrc;
    document.getElementById('last').appendChild(photo);
    photo.onmouseover=function(e){
      $("#manageAccount").css('display','inherit');
      $(navi).mouseleave(function (e) {
        $("#manageAccount").css('display','none');
      })
    }
  }

}
// export {
//   init
// }

