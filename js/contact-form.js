// ページ内にあるすべてのお問い合わせフォームを取得します。
const contactForms = document.querySelectorAll(".contact-form");

// 取得したフォームを1つずつ処理します。
contactForms.forEach((form) => {

    // フォームが送信されたときに処理します。
    form.addEventListener("submit", (event) => {

        // 通常の送信とページの再読み込みを止めます。
        event.preventDefault();

        // 現在のフォーム内にあるメッセージ欄を取得します。
        const message = form.querySelector(".form-message");

        // メッセージ欄が見つからない場合は処理を終了します。
        if (!message) {
            console.error("form-messageが見つかりません。");
            return;
        }

        // 送信完了メッセージを表示します。
        message.textContent =
            "お問い合わせを受け付けました。ありがとうございます。";

        // 成功表示用のクラスを付けます。
        message.classList.add("is-success");

        // 入力欄を空に戻します。
        form.reset();
    });
});