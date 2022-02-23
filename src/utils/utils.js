
var getWeek = () => {

    // returns this weeks week day in fromat [week_day, date, month, year]

    const date = new Date()
    var days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']
    var now = date.getDay()

    var raw_week = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']

    var week = new Array();

    raw_week.forEach((dayName) => {

        var day = days.indexOf(dayName);
        var diff = day - now;

        // Get the timestamp for the desired day
        var nextDayTimestamp = date.getTime() + (1000 * 60 * 60 * 24 * diff);

        var dd = new Date(nextDayTimestamp);

        week.push(
            [dayName, dd.getDate(), dd.getMonth() ,date.getFullYear().toString()]
        );
    })

    
	return week;
}

export const date = new Date()


export let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return 'id'+s4() + s4() + 'x' + s4() + 'x' + s4() + 'x' + s4() + 'x' + s4() + s4() + s4();
}

export default getWeek;



