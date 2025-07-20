function amalianCalendar() {
    //define the names of months
    let monthNames = {
    1: 'Month 1',2: 'Month 2',3: 'Month 3',
    4: 'Month 4',5: 'Month 5',6: 'Month 6',
    7: 'Month 7',8: 'Month 8',9: 'Month 9',
    10: 'Month 10',11: 'Month 11',12: 'Month 12'
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