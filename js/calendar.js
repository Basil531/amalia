function amalianCalendar() {
    //define the names of months
    let monthNames = {
    1: 'Splica',2: 'Arcturus',3: 'Antares',
    4: 'Vega/Altair',5: 'Deneb',6: 'Fomalhaut',
    7: 'Andromeda',8: 'Pleiades',9: 'Orion',
    10: 'Sirius',11: 'alFard/Soheil',12: 'Regulus'
    };
    //get date
    let d = new Date;
    d.setDate(d.getDate()+1)
    const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timeZone: "Africa/Algiers"
    };
    //console.log(d.toLocaleDateString('fa-IR-u-nu-latn', options));
    //Put date in correct format
    let f = d.toLocaleDateString('fa-IR-u-nu-latn', options).split("/")
    let date = f[2];
    let month = monthNames[f[1]];
    let year = f[0]-869; //convert to Amali year

    let end = "th"
    if (date == 1 || date == 21 || date == 31) {
        end = "st"
    }
    if (date == 2 || date == 22) {
        end = "nd"
    }
    if (date == 3 || date == 23) {
        end = "rd"
    }
    //console.log(date,month,year)
    //console.log('Today is the '+date+end+"th of "+month+", "+year)
    let cal = "Today is the "+date+end+" of "+month+", "+year

    //send date to html
    let calDisplay = document.getElementById("cal");
    calDisplay.textContent = cal;
}