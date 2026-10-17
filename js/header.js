const commonHeader = document.getElementById("common-header");

if (commonHeader) {
    commonHeader.innerHTML = `
        <header class="site-header">
            <div class="header-left">
                <a class="logo-link" href="index.html" aria-label="ホーム">
                    <img class="logo" src="images/header-logo.png" alt="ICE PICK">
                </a>
            </div>
            <button id="menuBtn" class="menu-btn" type="button" aria-controls="nav" aria-expanded="false">☰</button>
            <nav id="nav" class="nav" aria-label="メインメニュー">
                <a href="index.html">ホーム</a>
                <a href="events.html">イベント</a>
                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">チケット</a>
                <a href="contact.html">コンタクト</a>
            </nav>
        </header>
    `;

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", function () {
            nav.classList.toggle("active");
            const isOpen = nav.classList.contains("active");
            menuBtn.setAttribute("aria-expanded", String(isOpen));
            menuBtn.textContent = isOpen ? "×" : "☰";
        });
    }
}
