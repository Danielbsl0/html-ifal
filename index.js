function switchScreen(id) {
    document.querySelector("section#principal").style.display = "none";
    document.querySelector("section#perf_daniel").style.display = "none";
    document.querySelector("section#perf_pedro").style.display = "none";
    document.querySelector("section#pirates").style.display = "none";
    document.querySelector("section#dmc").style.display = "none";

    if (id == "main") {
        document.querySelector("section#principal").style.display = "block";
    } else if (id == "perf_daniel") {
        document.querySelector("section#perf_daniel").style.display = "block";
    } else if (id == "perf_pedro") {
        document.querySelector("section#perf_pedro").style.display = "block";
    } else if (id == "pirates") {
        document.querySelector("section#pirates").style.display = "block";
    } else if (id == "dmc") {
        document.querySelector("section#dmc").style.display = "block";
    } 
}
