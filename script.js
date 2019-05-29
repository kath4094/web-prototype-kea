window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

    document.querySelector("#aflevering_knap").addEventListener("click", toggleMenuAflevering);


}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu_list").classList.toggle("hidden");

    document.querySelector("#profile_menu").classList.toggle("hidden");


    let erSkjult = document.querySelector("#menu_list").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }







}


function toggleMenuAflevering() {
    document.querySelector("#aflevering_list").classList.toggle("hidden");

    document.querySelector("#aflevering_boks").classList.toggle("hidden");

    document.querySelector("#naeste_aflevering_knap").classList.toggle("hidden");

    let erSkjult1 = document.querySelector("#aflevering_list").classList.contains("hidden");

    if (erSkjult1 == true) {
        document.querySelector("#aflevering_knap").textContent = "⌵";
    } else {
        document.querySelector("#aflevering_knap").textContent = "X";
    }
}
