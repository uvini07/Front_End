function mode() {
    let html = document.documentElement;
    html.classList.toggle("escuro");

    const img = document.querySelector(".profile img");
    if (html.classList.contains("escuro")) {
        updateLogo(true)
        updateBotão(true);
        updateImg(true)
        updateP(true)
        updateSpan(true)
    } else {
        updateLogo(false)
        updateBotão(false);
        updateImg(false)
        updateP(false)
        updateSpan(false)
    }



}