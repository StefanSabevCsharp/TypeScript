 enum DaysOfWeek {

    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayOfWeek(day :string) :void{
    let dayNumber :number = DaysOfWeek[day];
    if(dayNumber == undefined){
        console.log("error");
        return;
    }
    console.log(DaysOfWeek[day]);
}

getDayOfWeek("Monday")