UNLOCK PICK 共通ヘッダー版
================================

このフォルダーは、ChromeでHTMLを直接開く現在の方法を維持したまま、
ヘッダーを js/header.js の1か所で管理する構成です。

【重要な考え方】
各HTMLには <div id="common-header"></div> だけを置きます。
js/header.js が、その場所へ共通ヘッダーを自動挿入します。
今後ヘッダーを変更するときは、原則として js/header.js だけを編集します。

【フォルダー構成】
index.html              ホームページ
 events.html            イベント一覧ページ
 event1.html            イベント1詳細ページ
 event2.html            イベント2詳細ページ
 event3.html            イベント3詳細ページ
 ticket.html            チケットページ
 contact.html           コンタクトページ
 css/style.css          全ページ共通デザイン
 js/header.js           全ページ共通ヘッダーとスマホメニュー
 images/logo.png        ロゴ画像
 images/event1.jpg      イベント1画像
 images/coming-soon.png イベント2・3用画像

【編集方法】
1. ヘッダーのボタン名やリンクを変える場合
   js/header.js の <nav id="nav" class="nav"> 内を編集します。

2. ヘッダーの色やボタンデザインを変える場合
   css/style.css の .site-header、.nav、.nav a を編集します。

3. ロゴを変更する場合
   images/logo.png を同じファイル名の新しい画像へ置き換えます。

4. イベント1画像を変更する場合
   images/event1.jpg を同じファイル名の新しい画像へ置き換えます。

5. イベントを増やす場合
   events.html にカードを追加し、必要に応じて詳細HTMLを追加します。

各HTML・CSS・JavaScriptには、役割が分かるようコメントを記載しています。
