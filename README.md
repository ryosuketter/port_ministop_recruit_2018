# ministop_recruit_2018 README

## CSS設計は基本、Enduring CSSを採用
本案件では、最低限の共通部分は抽象化や共通化させているが、それ以外はeCSSで、なるべく「分けて」管理することで運用の負荷を下げるというアプローチを取ります。

Enduring CSSとは

* 公式ドキュメント（英語）：http://ecss.io/
* ドキュメント（日本語）：https://html5experts.jp/takazudo/21946/

## コンポーネント同士の垂直方向のマージン設計
垂直方向のマージンはさまざまな要因によりマージンの相殺が起きたり、起きなかったりと複雑な挙動になるので単一の方向に統一したほうがいい。
本案件では、垂直方向のマージンは上（margin-top）で間隔をとることを統一する

## 対応ブラウザ
要件定義より
https://docs.google.com/spreadsheets/d/1iiuOY5EjbPuh29PGhu_p64LnlAH2vAPIZz-QEghrneE/edit?ts=58f47e09#gid=1808462059

PC
* IE = 11以上
* firefox, Safari, Chrome = 最新版

* iOS = 8以上
* Android(chrome & firefox)

実際には、どのブラウザーを対応させているかリスト
https://goo.gl/ngzmBB

## 対応デバイス
* iPhone, ipad, iphone5S, iphone6 puls, iphone6, iphone6 puls
* Nexus 6, GALAXY S5 SC-04F, arrowsM03,	nexus9								

## vendorに入れるファイル
animete.cssなど、DLして使うcssファイルは、（src/assets/scss/vendor）に、scssにして入れれば
dest以下のstyle.cssに統一コンパイルされる。JSは別ファイルとして、コンパイルされる。
