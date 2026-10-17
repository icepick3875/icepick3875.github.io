document.addEventListener("DOMContentLoaded", () => {
    const latestTitleSlide = document.querySelector(".latest-title-slide");
    const latestCardSlide = document.querySelector(".latest-card-slide");
    let latestAnimationStarted = false;

    // 最新イベントを一度だけ順番に表示します。
    function startLatestAnimation() {
        if (latestAnimationStarted || !latestTitleSlide || !latestCardSlide) return;
        latestAnimationStarted = true;

        window.setTimeout(() => {
            latestTitleSlide.classList.add("is-visible");
        }, 250);

        window.setTimeout(() => {
            latestCardSlide.classList.add("is-visible");
        }, 450);
    }

    // 初回はウェルカム動画が消えた後、再訪時はすぐに開始します。
    const welcomeScreen = document.getElementById("welcome-screen");
    const welcomeAlreadySeen = sessionStorage.getItem("welcomeVideoPlayed") === "true";

    if (welcomeScreen && welcomeScreen.isConnected && !welcomeAlreadySeen) {
        const welcomeObserver = new MutationObserver(() => {
            if (!welcomeScreen.isConnected) {
                welcomeObserver.disconnect();
                startLatestAnimation();
            }
        });

        welcomeObserver.observe(document.body, { childList: true, subtree: true });
    } else {
        startLatestAnimation();
    }

    // Topicsやお問い合わせなどの通常のスクロール演出です。
    const revealElements = document.querySelectorAll(".scroll-reveal");
    if (revealElements.length === 0) return;

    document.body.classList.add("scroll-animation-ready");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.05 });

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            revealElements.forEach((element) => observer.observe(element));
        });
    });
});
