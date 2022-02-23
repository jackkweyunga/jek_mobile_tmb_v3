import { pg_name } from "./tmb-body";



var tmb_home_top = async () => {

    var _el = document.createElement("div");

    var classes = ["w-100", "sticky-top", "tmb-flex-center-mid", "flex-column", "tmb-light", "tmb-top"];
    classes.forEach((cls) => { _el.classList.add(cls) });

    _el.id = "tmb-top";

    var date = new Date();

    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sut"]

    var programme_name = "";
    pg_name.subscribe(n => {
        programme_name = n;
        // console.log(n);

        _el.innerHTML = `

                <!-- timetable name -->
                <div class="tmb-flex-center-mid w-100 py-2 px-3">
                    <label id="prog_name" for="" class="tmb-ft tmb-f-16 tmb-f-dark-op-50 tmb-fw-600 text-justify">
                        ${programme_name}
                    </label>
                </div>

                <!-- top date -->
                <div class="tmb-flex-center-mid w-100 p-3">
                    <label for="date" class="tmb-anime-bounce tmb-f-42 tmb-fw-600 tmb-f-dark tmb-ft">
                        ${date.getDate()}
                    </label>
                    <div class="tmb-flex-center-mid flex-column w-100 p-1 tmb-ft">
                        <label for="day" class="w-100 text-left tmb-f-dark-op-30 tmb-f-12">${date.toString().split(" ")[0]}</label>
                        <label for="month" class="w-100 text-left tmb-f-dark-op-30 tmb-f-12">${date.toString().split(" ")[1]} ${date.toString().split(" ")[2]}</label>
                    </div>
                    <div class="col">
                        <a id="home-icon" role="link" href="home.html">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                                fill="#000000">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                            </svg>
                        </a>
                    </div>
                </div>
            

    `;
    })


    return _el;
}

export default tmb_home_top;

