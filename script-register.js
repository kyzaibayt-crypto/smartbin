document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registerForm");

    if (!form) {
        console.error("Форма registerForm не найдена!");
        return;
    }

    form.addEventListener("submit", function (event) {

        // Останавливаем обычную отправку формы
        event.preventDefault();
        event.stopPropagation();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        // Имя
        if (name.length < 2) {
            alert("⚠️ Введите имя.");
            return;
        }

        // Email
        if (!email.includes("@") || !email.includes(".")) {
            alert("⚠️ Введите корректный email.");
            return;
        }

        // Пароль
        if (password.length < 6) {
            alert("⚠️ Пароль должен содержать минимум 6 символов.");
            return;
        }

        // Повтор пароля
        if (password !== confirmPassword) {
            alert("❌ Пароли не совпадают!");
            return;
        }

        // Успешная регистрация
        alert(
            "✅ Регистрация прошла успешно!\n\n" +
            "Добро пожаловать в SmartBin, " + name + "!"
        );

        window.location.href = "login.html";
    });

});