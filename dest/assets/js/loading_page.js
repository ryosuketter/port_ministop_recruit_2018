$(function(){

  // loading状況の初期化
  // loadCount：読み込まれていく画像の数をカウントする変数
  var loadCount = 0;
  // なんかの初期化
  var aCnt = 0;

  // ローディング中、中央に現れる画像
  $(".loading-Img").delay(200).fadeIn("normal");

  // imgが読み込まれるタイミングを監視
  // Edgeと、IEキャッシュ問題の解消
  // imgタグそれぞれに対して、functionの中を実行しなさいという命令
  $("img").each(function(){

    // イメージオブジェクトを作成している
    // $(this)は、ある１つのimgタグを指しているので、そのimgタグのsrcをイメージオブジェクトのsrcに設定
    // これにより、イメージオブジェクトのwidthで、画像が読み込まれたときに、imgタグのwidthと連動することになる
    // なぜ、widthを見るか、読み込まれの指標としたいから
    var img = new Image();
    img.src = $(this).attr("src");
    // イメージオブジェクトがwidthを持つまで、widthが 0以上かどうかを調べるためのタイマー
    // cntは、タイマーの繰り返し回数を数えていて、１０回を超えたら画像が全て読み込まれたものとする
    // 画像が読み込まれるのが失敗することもあるかもしれないので、そのときには、バーを伸ばしてスルーする
    var cnt = 0;
    var timer = setInterval(function(){
      cnt++;

      // || は or
      // これは、画像が読み込まれたら、つまり、widthが0以上の値をとった時の処理をわけている
      // 画像が読み込まれたら、タイマーを止めています。
      if(img.width > 0 || cnt > 10){
        cnt = 0;
        // setInterval内の関数を止める処理 clearInterval
        clearInterval(timer);

        // 読み込む画像の数を取得
        // これで、読み込まれた画像の数と、ページの全体の数が同じなら、全部画像が読み込まれているのがわかるので
        // コンテンツをフェードイン、メニューをスライドダウンなどの処理のタイミングの指標になる
        imgLength = $("img").length * 10;
        loadCount++;

        $(".loading-Bar").css({
          //読み込まれた画像の数を画像全体で割り、%としてローディングバーのwidthに設定
          "width": (loadCount / imgLength) * 100 + "%"
        });
      }
    }, 50);
    // タイマーは50msで動いている。画像がキャッシュにあっても50ms間隔で画像の数、線は段階的に１００％まで伸びて行く

    var tndST = setInterval(function(){
      loadCount++;
      aCnt++;

    if(aCnt > 9){
      clearInterval(tndST);
      aCnt = 0;

      } else {
        $(".loading-Bar").css({
          //読み込まれた画像の数を画像全体で割り、%としてローディングバーのwidthに設定
          "width": (loadCount / imgLength) * 100 + "%"
        });
      }

    if(loadCount > imgLength){
        //100%読み込まれたらローディングバーを隠す
        // バーをfadeOutする。
        $(".loading-Bar").delay(1000).fadeOut("normal");

        // 企業ロゴをフェードアウトする。
        // ここは、Animate.cssのzoomOutを使いたい
        $(".loading-Img").delay(1100).fadeOut("fast");

        // $(".st-header_Wrapper").delay(1900).slideDown("slow");
        $(".st-header_Wrapper").delay(1200).fadeIn("normal");
        $(".js-Slide_Contents").delay(1200).fadeIn("normal");
        $(".menu-btn-wrapper").delay(1200).fadeIn("normal");
      }
    },50);
    // タイマーは50msで動いている。画像がキャッシュにあっても50ms間隔で画像の数、線は段階的に１００％まで伸びて行く
  });
});
