$(function () {

    // top-Mv_Img クラスを持った要素ごとに処理を実行
    $('.top-Mv_Img').each(function () {

        var $slides = $(this).find('img'), // すべてのスライド
            slideCount = $slides.length,   // スライドの点数
            currentIndex = 0;              // 現在のスライドを示すインデックス

        // 1 番目のスライドをフェードインで表示
        $slides.eq(currentIndex).fadeIn();

        // 6000 ミリ秒ごとに showNextSlide 関数を実行
        setInterval(showNextSlide, 7775);

        // 次のスライドを表示する関数
        function showNextSlide () {

            // 次に表示するスライドのインデックス
            // (もし最後のスライドなら最初に戻る)
            var nextIndex = (currentIndex + 1) % slideCount;

            // 現在のスライドをフェードアウト
            $slides.eq(currentIndex).fadeOut();

            // 次のスライドをフェードイン
            $slides.eq(nextIndex).fadeIn(1000);

            // 現在のスライドのインデックスを更新
            currentIndex = nextIndex;
        }

    });

});

$(function () {

    // top-Mv_Img クラスを持った要素ごとに処理を実行
    $('.top-Mv_ImgSp').each(function () {

        var $slides = $(this).find('img'), // すべてのスライド
            slideCount = $slides.length,   // スライドの点数
            currentIndex = 0;              // 現在のスライドを示すインデックス

        // 1 番目のスライドをフェードインで表示
        $slides.eq(currentIndex).fadeIn();

        // 6000 ミリ秒ごとに showNextSlide 関数を実行
        setInterval(showNextSlide, 6000);

        // 次のスライドを表示する関数
        function showNextSlide () {

            // 次に表示するスライドのインデックス
            // (もし最後のスライドなら最初に戻る)
            var nextIndex = (currentIndex + 1) % slideCount;

            // 現在のスライドをフェードアウト
            $slides.eq(currentIndex).fadeOut();

            // 次のスライドをフェードイン
            $slides.eq(nextIndex).fadeIn(1000);

            // 現在のスライドのインデックスを更新
            currentIndex = nextIndex;
        }

    });

});