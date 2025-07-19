function amaliTime() {
    let d = new Date;

    let timeDisplay = document.getElementById("time");
    timeDisplay.textContent = d.toLocaleTimeString("es-ES", {timeZone: "Pacific/Niue"});;
    }