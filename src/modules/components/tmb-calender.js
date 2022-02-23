
import week, {date} from "../../utils/utils";

const tmb_calender = document.createElement("div");

var classes = ["sticky-top","tmb-calender","w-100","d-flex","justify-content-between"]
classes.forEach(x => {tmb_calender.classList.add(x)})

var entry = (_day, _date, _id) => {

    return `
                <div id=${_id} class="tmb-cal-day tmb-flex-center-mid flex-column">
                    <label class="row tmb-f-12 tmb-ft tmb-op-40 .tmb-fw-800" for="day">${_day}</label>
                    <label class="row tmb-f-16 .tmb-fw-600 tmb-ft" for="date">${_date}</label>
                </div>
        `;
}

let id_days = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri","Sut"]

let i = 0;
for (let day of week()) {
    tmb_calender.innerHTML = tmb_calender.innerHTML + entry(day[0][0], day[1], id_days[i]);
    i++;
}


export default tmb_calender;