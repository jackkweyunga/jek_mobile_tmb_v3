import { guid, date } from "../../utils/utils";

var tmb_events = (events) => {


    const tmb_table_body = document.createElement("tbody");

    var classes = [""]
    // classes.forEach(x => { tmb_table.classList.add(x) })

    // console.log(events);


    events.sort((a,b) => (a.fromTime > b.fromTime) ? 1 : (a.fromTime === b.fromTime) ? ((a.toTime > b.toTime) ? 1 : -1) : -1)

    var _mapped = events.map(ev => {

        let tr = document.createElement("tr");
        let rid = guid();

        var active = "";
        var fill = "#000000";
        var ofThisTime = (Number(ev.fromTime.split(":")[0]) <= date.getHours() && date.getHours() < Number(ev.toTime.split(":")[0]));
        // console.log(ofThisTime, Number(ev.fromTime.split(":")[0]), date.getHours(), Number(ev.toTime.split(":")[0]) );
        if (ofThisTime) {
            active = "event-active"; 
            fill = "#FFFFFF";
        }


        tr.innerHTML = `
        <td scope="row">
            <div class="tmb-time d-flex flex-column justify-content-left align-items-start">
                <label for="from" class="tmb-f-16 tmb-f-dark tmb-ft">${ev.fromTime}</label>
                <label for="to" class="tmb-f-16 tmb-f-dark-op-30 tmb-ft">${ev.toTime}</label>
            </div>
        </td>
        <td>
            <div class="tmb-event mt-3">

                <div class="card event-card ${active} p-3">
                    <div class="d-flex mb-2 justify-content-between align-items-center">
                        <label for="" class="tmb-ft">${ev.group}</label>
                        <span id="inner-menu" class="tmb-f-16 tmb-f-white-op-60 tmb-ft" role="button" data-bs-toggle="collapse" data-bs-target="#${rid}" aria-expanded="false" aria-controls="${rid}">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="${fill}"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/></svg>
                        </span>
                    </div>

                    <p class="tmb-ft w-100 tmb-f-9" style="text-align:left;"><small>${ev.type}</small></p>

                    <div class="extra-info collapse" id="${rid}">
                        <p class="tmb-ft w-100 tmb-f-14" style="text-align:left;">
                            ${ev.group_longform}
                        </p>
                        
                    </div>

                    <div class="room d-flex justify-content-start align-items-center">
                    <span class="tmb-f-12 tmb-f-white-op-60 tmb-ft">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="${fill}"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>
                    </span>
                        <span class="tmb-f-12 tmb-f-dark-op-80 tmb-ft">
                            ${ev.room}
                        </span>
                    </div>
                </div>
            </div>
        </td>
            `;
        return tr;
    })

    _mapped.forEach(x => { tmb_table_body.appendChild(x) });

    // console.log(_mapped);

    // console.log(tmb_table_body);

    return tmb_table_body;

}


export default tmb_events;