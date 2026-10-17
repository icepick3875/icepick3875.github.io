const contactForms = document.querySelectorAll(".contact-form");

contactForms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const message = form.querySelector(".form-message");
        if (!message) return;
        message.textContent = "お問い合わせを受け付けました。ありがとうございます。";
        message.classList.add("is-success");
        form.reset();
    });
});
