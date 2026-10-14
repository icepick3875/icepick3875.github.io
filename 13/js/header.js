// このファイルは、全ページで共通利用するヘッダーを作成します。

// HTML内の id="common-header" を持つ場所を取得します。
const commonHeader = document.getElementById("common-header");

// 共通ヘッダーを表示する場所が存在する場合だけ処理します。
if (commonHeader) {
    // innerHTMLを使い、共通ヘッダーのHTMLをページへ挿入します。
    commonHeader.innerHTML = `
        <!-- 全ページ共通のヘッダーです。 -->
        <header class="site-header">
            <!-- ロゴとサイト名をまとめる領域です。 -->
            <div class="header-left">
                <!-- ロゴをクリックするとホームへ戻ります。 -->
                <a href="index.html" class="logo-link" aria-label="ホームへ戻る">
                    <!-- imagesフォルダ内のロゴ画像を表示します。 -->
                    <img src="images/logo.png" class="logo" alt="UNLOCK PICK">
                </a>

                <!-- サイト名を表示します。 -->
                <strong class="site-name"></strong>
            </div>

            <!-- スマホで表示するハンバーガーメニューボタンです。 -->
            <button
                id="menuBtn"
                class="menu-btn"
                type="button"
                aria-label="メニューを開く"
                aria-expanded="false"
            >
                ☰
            </button>

            <!-- 全ページ共通のナビゲーションです。 -->
            <nav id="nav" class="nav" aria-label="メインメニュー">
                <!-- ホームページへ移動します。 -->
                <a href="index.html">Home</a>

                <!-- イベント一覧ページへ移動します。 -->
                <a href="events.html">Events</a>

                <!-- チケットページへ移動します。 -->
               <a
    href="https://escape.id/"
    target="_blank"
    rel="noopener noreferrer"
>
    Ticket
</a>

                <!-- コンタクトページへ移動します。 -->
                <a href="contact.html">Contact</a>
            </nav>
        </header>
    `;

    // 挿入後のハンバーガーボタンを取得します。
    const menuBtn = document.getElementById("menuBtn");

    // 挿入後のナビゲーションを取得します。
    const nav = document.getElementById("nav");

    // ハンバーガーボタンがクリックされたときの処理を登録します。
    menuBtn.addEventListener("click", () => {
        // activeクラスを付け外しして、メニューの表示を切り替えます。
        nav.classList.toggle("active");

        // 現在メニューが開いているかどうかを確認します。
        const isOpen = nav.classList.contains("active");

        // 読み上げソフト向けに、開閉状態を更新します。
        menuBtn.setAttribute("aria-expanded", String(isOpen));

        // メニューが開いているときは×、閉じているときは☰を表示します。
        menuBtn.textContent = isOpen ? "×" : "☰";
    });
}
