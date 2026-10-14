// HTML内の共通フッター挿入場所を取得します。
const commonFooter = document.getElementById("common-footer");

// 挿入場所が存在する場合だけフッターを作成します。
if (commonFooter) {

    // 全ページ共通のフッターを挿入します。
    commonFooter.innerHTML = `
        <footer class="site-footer">

            <!-- コピーライト表記です。 -->
            <small class="copyright">
                &copy; 2026 ICE PICK. All Rights Reserved.
            </small>

        </footer>
    `;
}