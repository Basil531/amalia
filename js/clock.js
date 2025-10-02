function amaliTime() {
    let d = new Date;

    let timeDisplay = document.getElementById("time");
    timeDisplay.textContent = d.toLocaleTimeString("es-ES", {timeZone: "Pacific/Niue"});;
    };

function newAmaliTime() {

    // Define dict to convert to amali suffix
    let s = {
      'am' : 'n',
      'pm' : 'd'
    };

    //get current date/time
    let d = new Date;
    
    //func to put time in format XX:XX:XX d/n
    let f = d.toLocaleTimeString("en-PK", {timeZone: "Africa/Algiers"}).split(" ");
    let hms = f[0].split(":");
    if (hms[0]==12) {hms[0]=0};
    let time = hms[0]+":"+hms[1]+":"+hms[2]+s[f[1]];
    //let suffix = s[f[1]];
    //console.log(time+s);

    //send time to html
    let timeDisplay = document.getElementById("time");
    timeDisplay.textContent = time;
    let suffixDisplay = document.getElementById("suffix");
    suffixDisplay = suffix;
};