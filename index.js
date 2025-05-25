// document.querySelector("section.active").style.display = "none";
function switchScreen(id) {
    let main = document.querySelector("section#principal");
    let perf_daniel = document.querySelector("section#perf_daniel");
    let perf_pedro = document.querySelector("section#perf_pedro");
    let pirates = document.querySelector("section#pirates");
    let dmc = document.querySelector("section#dmc");

    main.style.display = "none";
    perf_daniel.style.display = "none";
    perf_pedro.style.display = "none";
    pirates.style.display = "none";
    dmc.style.display = "none";

    if (id == "main") {
        main.style.display = "flex";
    } else if (id == "perf_daniel") {
        perf_daniel.style.display = "flex";
    } else if (id == "perf_pedro") {
        perf_pedro.style.display = "flex";
    } else if (id == "pirates") {
        pirates.style.display = "flex";
    } else if (id == "dmc") {
        dmc.style.display = "flex";
    } 
}
