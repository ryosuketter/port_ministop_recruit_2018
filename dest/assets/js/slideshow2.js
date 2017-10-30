var slidesnow = 1 ; // 現在のスライド位置
var slideshow = 4 ; // スライドの数

$(function(){
  setInterval(function() {
    if( slidesnow >= slideshow ) {
      $(".slide_img").css("opacity","0");
      $(".slide_img1").css("opacity","1");
      slidesnow=1;
      } else {
      slidesnow++;
      $(".slide_img").css("opacity","0");
      $(".slide_img"+slidesnow).css("opacity","1");
      }
  }, 6000);
  //setInterval()で6秒間隔で繰り返し実行する
});
