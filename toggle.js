/* ---------- DAY / NIGHT MODE ---------- */

    const themeButton = document.getElementById("themeButton");


/* ---------- LOAD SAVED THEME ---------- */

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "night") {
        document.body.classList.add("night-mode");
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }


/* ---------- THEME TOGGLE ---------- */

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("night-mode");

        if (document.body.classList.contains("night-mode")) {

            localStorage.setItem("theme", "night");

            themeButton.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "day");

            themeButton.textContent = "🌙";

        }

    });