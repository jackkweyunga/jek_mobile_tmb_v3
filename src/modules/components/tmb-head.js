
var tmb_thead = (ev_name) => {

    var _el = document.createElement("thead");

    _el.innerHTML = `
    <tr>
        <th class="col-2">
            <div class="d-flex justify-content-left">
                <label class=" tmb-f-12 mb-1 tmb-f-dark tmb-ft .tmb-fw-800 tmb-f-dark-op-30" for="">
                    Time
                </label>
            </div>
        </th>
        <th class=" ">
            <div class="d-flex align-items-center justify-content-between">
                <label id="events_label" class="tmb-f-12 tmb-f-dark-op-30 tmb-ft" for="">
                    ${ev_name} Classes
                </label>
                <div class="dropdown">
                    <span id="day-menu" data-bs-toggle="dropdown" aria-expanded="false class="
                        tmb-f-12 tmb-f-dark-op-70 tmb-ft">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
                            height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0,0h24v24H0V0z" fill="none" />
                            <path
                                d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z" />
                        </svg>
                    </span>
                    <ul class="dropdown-menu tmb-f-14 tmb-f-dark tmb-ft shadow dropdown-menu-sm-end"
                        aria-labelledby="day-menu">
                        <li><a onclick="localStorage.setItem('filter_from_local', 'Lecture')" class="dropdown-item p-2 tmb-f-dark-op-50" id="Lecture" role-"button">Lectures</a></li>
                        <li><a onclick="localStorage.setItem('filter_from_local', 'Practical')" style="cursor:pointer" class="dropdown-item p-2 tmb-f-dark-op-50" id="Practical" role-"button">Practicals</a></li>
                        <li><a onclick="localStorage.setItem('filter_from_local', 'Tutorial')" style="cursor:pointer" class="dropdown-item p-2 tmb-f-dark-op-50" id="Tutorial" role-"button">Tutorials</a>
                        </li>
                        <li><a onclick="localStorage.setItem('filter_from_local', 'Seminar')" style="cursor:pointer" class="dropdown-item p-2 tmb-f-dark-op-50" id="Seminar" role-"button">Seminars</a></li>
                        <li><a onclick="localStorage.setItem('filter_from_local', 'Examination')" style="cursor:pointer" class="dropdown-item p-2 tmb-f-dark-op-50" id="Examination" role-"button">Exams</a></li>
                    </ul>
                </div>
            </div>
        </th>
    </tr>
    `;
    
    return _el;

}


export default tmb_thead;


