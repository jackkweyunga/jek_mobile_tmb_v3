import back_svg from "./components/background-svg";

var tmb_main = document.getElementById("tmb");

tmb_main.classList.add("tmb-flex-center-mid");
// tmb_main.classList.add("container-fluid");

var tmb_wrapper = document.createElement("div");
tmb_wrapper.classList.add("tmb-wrapper");

var background = document.createElement("div");
background.classList.add("background-svg")
background.innerHTML = back_svg();

tmb_main.appendChild(background);
tmb_main.appendChild(tmb_wrapper);

export default tmb_wrapper;
