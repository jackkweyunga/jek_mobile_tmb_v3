import 'swiper/css/bundle';
import "./modules/styles/tmb-main.css";
import "./modules/styles/tmb-carousel.css";


import { default as content, drawTimeTable, eventsData, events_name$, filterEvents, filterEventsWrapper } from "./modules/tmb-body";


// tmb-loader
const loader = document.getElementById("tmb-loader");

async function startLoading() {
  loader.hidden = true;
}

async function stopLoading() {
  loader.hidden = false;
}


const SelectionListener = async (pid, pyear) => {
  startLoading();
  const tmb = await drawTimeTable(pid, pyear);
  window.localStorage.setItem('filter_from_local', 'all');
  stopLoading();
};

const filterListener = () => {
  startLoading();
  var from_local = window.localStorage.getItem('selected-programme');

  if (from_local !== "" || null || undefined) {
    var _i = from_local.split("-")
    var id = Number(_i[0])
    var year = _i[1] + " year";
    drawTimeTable(id, year).then(() => {
      window.localStorage.setItem('filter_from_local', 'all');
      stopLoading();
      // console.log("was here");
    });
    stopLoading();
  }
};



// draws timetable when the window loads
window.onload = () => {
  filterListener();
};


// listening for localstorage changes
const originalSetItem = localStorage.setItem;

localStorage.setItem = function (key, value) {
  const event = new Event('itemInserted');

  event.value = value; // Optional..
  event.key = key; // Optional..

  document.dispatchEvent(event);

  originalSetItem.apply(this, arguments);
};

document.addEventListener("itemInserted", function (e) {
  if (e.key === "selected-programme") {
    var _i = e.value.split("-")
    var id = Number(_i[0])
    var year = _i[1] + " year";
    // 
    SelectionListener(id, year);
  }

  if (e.key === "filter_from_local") {
    eventsData.subscribe(d => {
      // console.log(d);
      filterEvents(d, e.value);
    })
  }
}, false);

SelectionListener(7, "first year");

