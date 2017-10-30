// TOPページのPAGE TOPボタンにだけ効くスムーススクロール
$(function() {
  $("#scrollUp-Only_Top").on('click touchstart', function () {
    $('html,body').animate({ scrollTop: 0 }, 'swing');
      return false;
    });
});
