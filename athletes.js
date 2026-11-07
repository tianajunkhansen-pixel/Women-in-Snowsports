/* ---------- READ MORE ---------- */

    const readMoreButtons = document.querySelectorAll(".read-more");


    readMoreButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const card = button.closest(".card");

            card.classList.toggle("expanded");


            if (card.classList.contains("expanded")) {

                button.textContent = "Close";

            } else {

                button.textContent = "Read more";

            }

        });

    });