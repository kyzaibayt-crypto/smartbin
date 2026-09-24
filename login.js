// =====================================================
// SMARTBIN — ВХОД
// =====================================================


// ТА ЖЕ ТАБЛИЦА users
const BASEROW_URL =
    "https://api.baserow.io/api/database/rows/table/1218909/?user_field_names=true";


// ВСТАВЬ СЮДА ТОТ ЖЕ TOKEN
const BASEROW_TOKEN =
    "U9uhzT7gByp0Aeaq1JElxmLUUFuufs2j";


const form =
    document.getElementById("loginForm");

const loginInput =
    document.getElementById("login");

const passwordInput =
    document.getElementById("password");

const showPassword =
    document.getElementById("showPassword");


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


// =====================================================
// ВХОД
// =====================================================

form.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const login =
            loginInput.value.trim();

        const password =
            passwordInput.value;


        if (!login || !password) {

            alert(
                "Заполни все поля."
            );

            return;
        }


        const button =
            form.querySelector(
                ".login-button"
            );


        button.disabled = true;

        button.textContent =
            "Входим...";


        try {

            const response =
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


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    "Ошибка получения пользователей."
                );

            }


            const users =
                data.results || [];


            const enteredLogin =
                login.toLowerCase();


            const foundUser =
                users.find(function (user) {

                    const username =
                        String(
                            user.user || ""
                        )
                        .trim()
                        .toLowerCase();


                    const email =
                        String(
                            user.email || ""
                        )
                        .trim()
                        .toLowerCase();


                    const savedPassword =
                        String(
                            user.password || ""
                        );


                    return (

                        (
                            username ===
                            enteredLogin

                            ||

                            email ===
                            enteredLogin
                        )

                        &&

                        savedPassword ===
                        password

                    );

                });


            if (!foundUser) {

                alert(
                    "Неверное имя, email или пароль."
                );

                button.disabled = false;

                button.textContent =
                    "Войти";

                return;
            }


            // =================================================
            // СОХРАНЯЕМ АККАУНТ
            // =================================================

            localStorage.setItem(
                "smartbin_logged_in",
                "true"
            );

            localStorage.setItem(
                "smartbin_username",
                foundUser.user
            );

            localStorage.setItem(
                "smartbin_email",
                foundUser.email
            );

            localStorage.setItem(
                "smartbin_user_id",
                foundUser.id
            );


            alert(
                "Добро пожаловать, " +
                foundUser.user +
                "! ♻️"
            );


            window.location.href =
                "index.html";

        }


        catch (error) {

            console.error(error);

            alert(
                "Ошибка подключения к Baserow."
            );

            button.disabled = false;

            button.textContent =
                "Войти";

        }

    }
);
