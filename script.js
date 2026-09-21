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