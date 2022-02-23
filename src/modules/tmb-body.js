
import { Data } from "../services/data.js";

import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css/bundle';


import week from "../utils/utils";
import tmb_wrapper from './tmb-wrapper';
import tmb_carousel from './tmb-carousel';
import swiper_slider from "./components/swiper-slide";
import tmb_thead from "./components/tmb-head";
import tmb_calender from "./components/tmb-calender";
import tmb_events from "./components/tmb-events";
import tmb_home_top from "./tmb-home-top"
import tmb_footer from "./tmb-footer";
import tmb_loader from "./components/tmb-loader.js";
import { BehaviorSubject } from "rxjs";

// const colors = ["#d520b7", "#a03d1a", "#8c2e4f", "#771f84", "#8462bc", "#5688c7", "#f97910", "#24466b", "#16253b"]

var programme_name$ = new BehaviorSubject("");
export var pg_name = programme_name$.asObservable();

var eventsData$ = new BehaviorSubject({});
export var eventsData = eventsData$.asObservable();

var events$ = new BehaviorSubject([]);
export var events = events$.asObservable();

export var events_name$ = new BehaviorSubject([]);
export var events_name = events_name$.asObservable();

var tmb_body = document.createElement("div");

tmb_body.id = "tmb-body";
tmb_body.classList.add("tmb-body");
tmb_body.classList.add("p-3");
tmb_body.appendChild(tmb_calender);
tmb_body.appendChild(tmb_carousel);


tmb_wrapper.appendChild(tmb_loader());

tmb_home_top().then(el => {
    tmb_wrapper.appendChild(el);
    tmb_wrapper.appendChild(tmb_body);
    tmb_wrapper.appendChild(tmb_footer);
});

var today = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sut"]
let eventTypes = ["Lecture", "Tutorial", "Seminar", "Examination", "Practical"]


export var filterEvents = async (data, ev_type = "all") => {
    var _c = []

    try {

        for (let item of data.events) {
            if (ev_type == "all") {

                _c.push(item)
            } else {
                if (item.type == ev_type) {
                    _c.push(item)
                }
            }
        }

    } catch (error) {
        // console.log(error);
    }

    events_name$.next(ev_type);
    events$.next(_c);
}


export const drawTimeTable = async (pid, pyear, ndays = 5) => {

    // console.log("started");
    Data(pid, pyear).then(data => {

        programme_name$.next(data.name + " - " + pyear);

        // console.log(data);
        eventsData$.next(data);

        if (data !== null | undefined | {}) {
            // console.log(data.events);
            var swiper_wrapper = document.getElementById("swiper-wrapper");

            events.subscribe(ev => {
                // console.log(ev);
                swiper_wrapper.innerHTML = '';

                for (let day of week()) {

                    var tmb_table = document.createElement("table");
                    tmb_table.classList.add("tmb-table")

                    events_name.subscribe(ev_name => {
                        tmb_table.appendChild(tmb_thead(ev_name))
                    })

                    var tbody = tmb_events(
                        ev.filter(evd => evd.day.includes(day[0]))
                    );

                    tmb_table.appendChild(tbody);

                    var swiper_cont = swiper_slider();
                    swiper_cont.appendChild(tmb_table)

                    swiper_wrapper.appendChild(swiper_cont);

                }

            })
            // configure Swiper to use modules
            Swiper.use([Pagination, Scrollbar]);

            const swiper = new Swiper(".swiper", {
                slidesPerView: 1,
            });

            const kday = today.getDay();
            if (kday <= 7) {
                swiper.slideTo(kday - 1, 300)
                const id = days[kday - 1];
                var el = document.getElementById(id);
                el.classList.add("current-day");
            }

            days.forEach((l) => {
                document.getElementById(l).addEventListener('click', (ev) => {
                    const _k = days.indexOf(l);
                    // console.log(_k);
                    swiper.slideTo(_k, 300)
                });
            });

            swiper.on('activeIndexChange', function (e) {

                days.forEach((l) => {
                    document.getElementById(l).classList.remove("current-day");
                })

                const id = days[e.activeIndex];
                var el = document.getElementById(id);
                el.classList.add("current-day");
            });


        } else {
            console.log("could not find any data");
        }

    }).catch((err) => {
        console.log(err);
    })

    return tmb_wrapper;

}
