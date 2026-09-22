const bins = [
    {
        id: 1,
        location: "ул. Абая, 25",
        fill: 42
    },
    {
        id: 2,
        location: "ул. Каныша Сатпаева, 14",
        fill: 68
    },
    {
        id: 3,
        location: "Центральный парк",
        fill: 91
    },
    {
        id: 4,
        location: "ул. Горького, 7",
        fill: 27
    },
    {
        id: 5,
        location: "Школьная улица, 12",
        fill: 55
    },
    {
        id: 6,
        location: "Площадь города",
        fill: 97
    }
];


// =========================
// ОПРЕДЕЛЕНИЕ СТАТУСА
// =========================

function getStatusText(fill) {

    if (fill < 50) {
        return "🟢 Можно выбрасывать";
    }

    if (fill >= 50 && fill < 75) {
        return "🟡 Почти заполнена";
    }

    return "🔴 Заполнена";
}


// =========================
// ОПРЕДЕЛЕНИЕ ЦВЕТА
// =========================

function getColor(fill) {

    if (fill < 50) {
        return "green";
    }

    if (fill >= 50 && fill < 75) {
        return "yellow";
    }

    return "red";
}


// =========================
// ВЕРХНЯЯ КАРТОЧКА
// =========================

function updateHeroBin(bin) {

    const name = document.getElementById("heroBinName");
    const location = document.getElementById("heroBinLocation");
    const fill = document.getElementById("heroBinFill");
    const progress = document.getElementById("heroProgress");
    const status = document.getElementById("heroBinStatus");

    if (!name || !location || !fill || !progress || !status) {
        return;
    }

    name.textContent =
        `SmartBin №${String(bin.id).padStart(3, "0")}`;

    location.textContent =
        `📍 ${bin.location}`;

    fill.textContent =
        `${bin.fill}%`;

    progress.style.width =
        `${bin.fill}%`;

    progress.className =
        `progress-fill ${getColor(bin.fill)}`;

    status.textContent =
        getStatusText(bin.fill);
}


// =========================
// ПОКАЗ МУСОРОК
// =========================

function showBins(list) {

    const container = document.getElementById("binList");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    list.forEach(function(bin) {

        const binElement = document.createElement("div");

        binElement.className = "bin";

        binElement.innerHTML = `
            <h3>
                🗑️ SmartBin №${String(bin.id).padStart(3, "0")}
            </h3>

            <div class="bin-location">
                📍 ${bin.location}
            </div>

            <div class="bin-progress">
                <div
                    class="bin-progress-fill ${getColor(bin.fill)}"
                    style="width: ${bin.fill}%">
                </div>
            </div>

            <p>
                Заполненность: <b>${bin.fill}%</b>
            </p>

            <p class="status">
                ${getStatusText(bin.fill)}
            </p>
        `;

        container.appendChild(binElement);
    });
}


// =========================
// ФИЛЬТРЫ
// =========================

function filterBins(status, button) {

    const buttons = document.querySelectorAll(".filter");

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }


    if (status === "all") {
        showBins(bins);
        return;
    }


    const filteredBins = bins.filter(function(bin) {

        if (status === "available") {
            return bin.fill < 70;
        }

        if (status === "almost") {
            return bin.fill >= 70 && bin.fill < 90;
        }

        if (status === "full") {
            return bin.fill >= 90;
        }

        return true;
    });


    showBins(filteredBins);
}


// =========================
// БЛИЖАЙШАЯ МУСОРКА
// =========================

function findNearest() {

    alert(
        "📍 Поиск ближайшей мусорки будет доступен после подключения GPS и карты."
    );
}


// =========================
// ЗАПУСК
// =========================

showBins(bins);

updateHeroBin(bins[0]);// =========================

function getStatusText(fill) {

    if (fill < 50) {
        return "🟢 Можно выбрасывать";
    }

    if (fill >= 50 && fill < 75) {
        return "🟡 Почти заполнена";
    }

    return "🔴 Заполнена";
}


// =========================
// ОПРЕДЕЛЕНИЕ ЦВЕТА
// =========================

function getColor(fill) {

    if (fill < 50) {
        return "green";
    }

    if (fill >= 50 && fill < 75) {
        return "yellow";
    }

    return "red";
}


// =========================
// ВЕРХНЯЯ КАРТОЧКА
// =========================

function updateHeroBin(bin) {

    const name = document.getElementById("heroBinName");
    const location = document.getElementById("heroBinLocation");
    const fill = document.getElementById("heroBinFill");
    const progress = document.getElementById("heroProgress");
    const status = document.getElementById("heroBinStatus");

    if (!name || !location || !fill || !progress || !status) {
        return;
    }

    name.textContent =
        `SmartBin №${String(bin.id).padStart(3, "0")}`;

    location.textContent =
        `📍 ${bin.location}`;

    fill.textContent =
        `${bin.fill}%`;

    progress.style.width =
        `${bin.fill}%`;

    progress.className =
        `progress-fill ${getColor(bin.fill)}`;

    status.textContent =
        getStatusText(bin.fill);
}


// =========================
// ПОКАЗ МУСОРОК
// =========================

function showBins(list) {

    const container = document.getElementById("binList");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    list.forEach(function(bin) {

        const binElement = document.createElement("div");

        binElement.className = "bin";

        binElement.innerHTML = `
            <h3>
                🗑️ SmartBin №${String(bin.id).padStart(3, "0")}
            </h3>

            <div class="bin-location">
                📍 ${bin.location}
            </div>

            <div class="bin-progress">
                <div
                    class="bin-progress-fill ${getColor(bin.fill)}"
                    style="width: ${bin.fill}%">
                </div>
            </div>

            <p>
                Заполненность: <b>${bin.fill}%</b>
            </p>

            <p class="status">
                ${getStatusText(bin.fill)}
            </p>
        `;

        container.appendChild(binElement);
    });
}


// =========================
// ФИЛЬТРЫ
// =========================

function filterBins(status, button) {

    const buttons = document.querySelectorAll(".filter");

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }


    if (status === "all") {
        showBins(bins);
        return;
    }


    const filteredBins = bins.filter(function(bin) {

        if (status === "available") {
            return bin.fill < 70;
        }

        if (status === "almost") {
            return bin.fill >= 70 && bin.fill < 90;
        }

        if (status === "full") {
            return bin.fill >= 90;
        }

        return true;
    });


    showBins(filteredBins);
}


// =========================
// БЛИЖАЙШАЯ МУСОРКА
// =========================

function findNearest() {

    alert(
        "📍 Поиск ближайшей мусорки будет доступен после подключения GPS и карты."
    );
}


// =========================
// ЗАПУСК
// =========================

showBins(bins);

updateHeroBin(bins[0]);    }
];


function getStatusText(status) {

    if (status === "available") {
        return "🟢 Можно выбрасывать";
    }

    if (status === "almost") {
        return "🟡 Почти заполнена";
    }

    return "🔴 Заполнена";
}


function getColor(status) {

    if (status === "available") {
        return "green";
    }

    if (status === "almost") {
        return "yellow";
    }

    return "red";
}


function showBins(list) {

    const container = document.getElementById("binList");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    list.forEach(function(bin) {

        const binElement = document.createElement("div");

        binElement.className = "bin";

        binElement.innerHTML = `
            <h3>
                🗑️ SmartBin №${String(bin.id).padStart(3, "0")}
            </h3>

            <div class="bin-location">
                📍 ${bin.location}
            </div>

            <div class="bin-progress">
                <div
                    class="bin-progress-fill ${getColor(bin.status)}"
                    style="width: ${bin.fill}%">
                </div>
            </div>

            <p>
                Заполненность: <b>${bin.fill}%</b>
            </p>

            <p class="status ${getColor(bin.status)}">
                ${getStatusText(bin.status)}
            </p>
        `;

        container.appendChild(binElement);
    });
}


function filterBins(status, button) {

    const buttons = document.querySelectorAll(".filter");

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    if (status === "all") {
        showBins(bins);
        return;
    }

    const filteredBins = bins.filter(function(bin) {
        return bin.status === status;
    });

    showBins(filteredBins);
}


function findNearest() {

    alert(
        "📍 Поиск ближайшей мусорки будет доступен после подключения GPS и карты."
    );
}


showBins(bins);
