document.addEventListener("DOMContentLoaded", () => {
    const welcomeScreen = document.getElementById("welcome-screen");
    const welcomeVideo = document.getElementById("welcome-video");
    const skipButton = document.getElementById("welcome-skip");

    if (!welcomeScreen) return;

    let closed = false;

    function closeWelcome() {
        if (closed) return;
        closed = true;

        sessionStorage.setItem("welcomeVideoPlayed", "true");
        welcomeScreen.classList.add("is-closing");

        window.setTimeout(() => {
            welcomeScreen.remove();
            document.dispatchEvent(new CustomEvent("welcomeClosed"));
        }, 500);
    }

    // このタブですでに再生済みなら、最初から表示しません。
    if (sessionStorage.getItem("welcomeVideoPlayed") === "true") {
        welcomeScreen.remove();
        document.dispatchEvent(new CustomEvent("welcomeClosed"));
        return;
    }

    if (!welcomeVideo) {
        closeWelcome();
        return;
    }

    welcomeVideo.addEventListener("ended", closeWelcome, { once: true });
    welcomeVideo.addEventListener("error", closeWelcome, { once: true });
    skipButton?.addEventListener("click", closeWelcome, { once: true });

    // 自動再生が止められた場合でも、SKIPできる状態を維持します。
    const playResult = welcomeVideo.play();
    if (playResult && typeof playResult.catch === "function") {
        playResult.catch(() => {
            // muted・playsinline指定済みのため、通常は自動再生されます。
        });
    }
});
