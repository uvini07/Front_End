
function updateBotão(isDarkMode) {
    const buttons = document.querySelectorAll(".lista button");

    buttons.forEach(button => {
        if (isDarkMode) {
            button.classList.add("dark-mode");
        } else {
            button.classList.remove("dark-mode");
        }
    });
}


function updateImg(isDarkMode) {
    const img = document.querySelectorAll(".profile img");

    img.forEach(img => {
        if (isDarkMode) {
            img.classList.add("dark-mode")
            document.body.style.backgroundImage = "url('../img/bg-dark.jpg')"

        } else {
            img.classList.remove("dark-mode");
            document.body.style.backgroundImage = "url('../img/bg-light.jpg')"
        }
    });
}


function updateP(isDarkMode) {
    const p = document.querySelectorAll(".profile p");

    p.forEach(p => {
        if (isDarkMode) {
            p.classList.add("dark-mode");
        } else {
            p.classList.remove("dark-mode");
        }
    });
}

function updateLogo(isDarkMode) {
    const logo = document.querySelectorAll(".profile img");

    logo.forEach(logo => {
        if (isDarkMode) {
            logo.setAttribute("src", "./img/logodark.svg")
        } else {
            logo.setAttribute("src", "./img/logolight.svg");
        }
    });
}

function updateSpan(isDarkMode) {
    const span = document.querySelectorAll("#botao span");

    span.forEach(span => {
        if (isDarkMode) {
            span.classList.add("dark-mode");
        } else {
            span.classList.remove("dark-mode");
        }
    });
}

function updateli(isDarkMode) {
    const lista = document.querySelectorAll(".lista button:hover");

    lista.forEach(lista => {
        if (isDarkMode) {
            lista.classList.add("dark-mode");
        } else {
            lista.classList.remove("dark-mode");
        }
    });
}