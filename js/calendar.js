function amalianCalendar() {
    //define the names of months
    let monthNames = {
    1: 'Andromeda',2: 'Cassiopeia',3: 'Pleiades',
    4: 'Polaris',5: 'Ursa',6: 'Regulus',
    7: 'Arcturus',8: 'Crux',9: 'Antares',
    10: 'Vega',11: 'Altair',12: 'Deneb'
    };
    //gat date
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
    let year = f[0];

    let end = "th"
    if (date == 1) {
        end = "st"
    }
    if (date == 2) {
        end = "nd"
    }
    if (date == 3) {
        end = "rd"
    }
    //console.log(date,month,year)
    //console.log('Today is the '+date+end+"th of "+month+", "+year)
    let cal = "Today is the "+date+end+" of "+month+", "+year

    //send date to html
    let calDisplay = document.getElementById("cal");
    calDisplay.textContent = cal;
}