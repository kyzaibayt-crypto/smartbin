const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (!email || !password) {
            alert("⚠️ Заполните все поля.");
            return;
        }

        if (!email.includes("@")) {
            alert("⚠️ Введите корректный email.");
            return;
        }

        // Пока это только демонстрация входа
        alert("✅ Вход выполнен!\n\nДобро пожаловать в SmartBin.");

        // После подключения настоящей авторизации
        // здесь будет переход в личный кабинет:
        // window.location.href = "profile.html";
    });
}