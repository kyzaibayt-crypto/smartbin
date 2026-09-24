// =====================================================
// SMARTBIN — МУСОРКИ
// =====================================================

const bins = [

    {
        id: 1,
        location: "ул. Абая, 25",
        fill: 42,
        status: "available"
    },

    {
        id: 2,
        location: "ул. Каныша Сатпаева, 14",
        fill: 68,
        status: "almost"
    },

    {
        id: 3,
        location: "Центральный парк",
        fill: 91,
        status: "full"
    },

    {
        id: 4,
        location: "ул. Горького, 7",
        fill: 27,
        status: "available"
    },

    {
        id: 5,
        location: "Школьная улица, 12",
        fill: 55,
        status: "almost"
    },

    {
        id: 6,
        location: "Площадь города",
        fill: 97,
        status: "full"
    }

];


// =====================================================
// ТЕКСТ СТАТУСА
// =====================================================

function getStatusText(status) {

    if (status === "available") {
        return "🟢 Можно выбрасывать";
    }

    if (status === "almost") {
        return "🟡 Почти заполнена";
    }

    if (status === "full") {
        return "🔴 Заполнена";
    }

    return "⚪ Неизвестно";
}


// =====================================================
// ЦВЕТ ЗАПОЛНЕННОСТИ
// =====================================================

function getProgressClass(status) {

    if (status === "available") {
        return "progress-green";
    }

    if (status === "almost") {
        return "progress-yellow";
    }

    if (status === "full") {
        return "progress-red";
    }

    return "";
}


// =====================================================
// ПОКАЗ МУСОРОК
// =====================================================

function showBins(list) {

    const container =
        document.getElementById("binsContainer");

    if (!container) {
        return;
    }

    container.innerHTML = "";


    if (list.length === 0) {

        container.innerHTML = `
            <p>
                Мусорок с таким статусом пока нет.
            </p>
        `;

        return;
    }


    list.forEach(function (bin) {

        const card =
            document.createElement("div");

        card.className = "bin-card";


        card.innerHTML = `

            <h3>
                🗑️ SmartBin #${bin.id}
            </h3>

            <div class="bin-location">
                📍 ${bin.location}
            </div>

            <div class="bin-progress">

                <div
                    class="bin-progress-fill ${getProgressClass(bin.status)}"
                    style="width: ${bin.fill}%">
                </div>

            </div>

            <div class="bin-bottom">

                <span class="fill-value">
                    Заполненность: ${bin.fill}%
                </span>

                <span class="status">
                    ${getStatusText(bin.status)}
                </span>

            </div>

        `;


        container.appendChild(card);

    });

}


// =====================================================
// ФИЛЬТРЫ
// =====================================================

const filterButtons =
    document.querySelectorAll(".filter-button");


filterButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            const status =
                button.dataset.status;


            if (status === "all") {

                showBins(bins);

                return;
            }


            const filteredBins =
                bins.filter(function (bin) {

                    return bin.status === status;

                });


            showBins(filteredBins);

        }
    );

});


// =====================================================
// ЗАПУСК
// =====================================================

showBins(bins);
