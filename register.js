// =====================================================
// SMARTBIN — РЕГИСТРАЦИЯ
// =====================================================


// ТВОЯ ТАБЛИЦА users
const BASEROW_URL =
    "https://api.baserow.io/api/database/rows/table/1218909/?user_field_names=true";


// ВСТАВЬ СЮДА СВОЙ TOKEN
const BASEROW_TOKEN =
    "U9uhzT7gByp0Aeaq1JElxmLUUFuufs2j";


const form =
    document.getElementById("registerForm");

const usernameInput =
    document.getElementById("username");

const emailInput =
    document.getElementById("email");

const passwordInput =
    document.getElementById("password");

const confirmPasswordInput =
    document.getElementById("confirmPassword");

const showPassword =
    document.getElementById("showPassword");

const showConfirmPassword =
    document.getElementById("showConfirmPassword");


// =====================================================
// ПОКАЗ ПАРОЛЯ
// =====================================================

showPassword.addEventListener(
    "click",
    function () {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            showPassword.textContent = "🙈";

        } else {

            passwordInput.type = "password";

            showPassword.textContent = "👁️";

        }

    }
);


showConfirmPassword.addEventListener(
    "click",
    function () {

        if (
            confirmPasswordInput.type === "password"
        ) {

            confirmPasswordInput.type = "text";

            showConfirmPassword.textContent = "🙈";

        } else {

            confirmPasswordInput.type = "password";

            showConfirmPassword.textContent = "👁️";

        }

    }
);


// =====================================================
// EMAIL
// =====================================================

function validEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);

}


// =====================================================
// РЕГИСТРАЦИЯ
// =====================================================

form.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const username =
            usernameInput.value.trim();

        const email =
            emailInput.value.trim().toLowerCase();

        const password =
            passwordInput.value;

        const confirmPassword =
            confirmPasswordInput.value;


        // Имя

        if (username.length < 2) {

            alert(
                "Имя должно содержать минимум 2 символа."
            );

            usernameInput.focus();

            return;
        }


        // Email

        if (!validEmail(email)) {

            alert(
                "Введите корректный email."
            );

            emailInput.focus();

            return;
        }


        // Пароль

        if (password.length < 6) {

            alert(
                "Пароль должен содержать минимум 6 символов."
            );

            passwordInput.focus();

            return;
        }


        // Повтор пароля

        if (password !== confirmPassword) {

            alert(
                "Пароли не совпадают."
            );

            confirmPasswordInput.focus();

            return;
        }


        const button =
            form.querySelector(
                ".register-button"
            );


        button.disabled = true;

        button.textContent =
            "Сохраняем...";


        try {

            // Проверяем существующие аккаунты

            const checkResponse =
                await fetch(
                    BASEROW_URL,
                    {
                        method: "GET",

                        headers: {
                            "Authorization":
                                "Token " +
                                BASEROW_TOKEN
                        }
                    }
                );


            const checkData =
                await checkResponse.json();


            if (!checkResponse.ok) {

                throw new Error(
                    "Не удалось получить пользователей."
                );

            }


            const users =
                checkData.results || [];


            const alreadyExists =
                users.some(function (user) {

                    const existingEmail =
                        String(
                            user.email || ""
                        )
                        .trim()
                        .toLowerCase();


                    const existingUsername =
                        String(
                            user.user || ""
                        )
                        .trim()
                        .toLowerCase();


                    return (
                        existingEmail === email ||
                        existingUsername ===
                        username.toLowerCase()
                    );

                });


            if (alreadyExists) {

                alert(
                    "Такой пользователь или email уже зарегистрирован."
                );

                button.disabled = false;

                button.textContent =
                    "Зарегистрироваться";

                return;
            }


            // =================================================
            // СОХРАНЯЕМ В BASEROW
            // =================================================

            const response =
                await fetch(
                    BASEROW_URL,
                    {
                        method: "POST",

                        headers: {

                            "Authorization":
                                "Token " +
                                BASEROW_TOKEN,

                            "Content-Type":
                                "application/json"

                        },

                        body: JSON.stringify({

                            user: username,

                            email: email,

                            password: password

                        })

                    }
                );


            const result =
                await response.json();


            if (!response.ok) {

                console.error(result);

                throw new Error(
                    "Baserow не сохранил пользователя."
                );

            }


            alert(
                "Регистрация прошла успешно! ♻️"
            );


            form.reset();


            window.location.href =
                "login.html";

        }


        catch (error) {

            console.error(error);

            alert(
                "Не удалось сохранить аккаунт. Проверь подключение к Baserow."
            );

            button.disabled = false;

            button.textContent =
                "Зарегистрироваться";

        }

    }
);
