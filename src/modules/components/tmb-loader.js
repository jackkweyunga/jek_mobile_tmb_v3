


var tmb_loader = () => {

    var tempt = `
<!-- <div class="lds-hourglass"></div> -->
<span class="lds-hourglass">
    <svg version="1.1" id="L2" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100"
        enable-background="new 0 0 100 100" xml:space="preserve">
        <circle fill="none" stroke="#00664F" stroke-width="4" stroke-miterlimit="10" cx="50" cy="50"
            r="48" />
        <line fill="none" stroke-linecap="round" stroke="#00664F" stroke-width="4"
            stroke-miterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
            <animateTransform attributeName="transform" dur="2s" type="rotate" from="0 50 50"
                to="360 50 50" repeatCount="indefinite" />
        </line>
        <line fill="none" stroke-linecap="round" stroke="#197561" stroke-width="4"
            stroke-miterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
            <animateTransform attributeName="transform" dur="15s" type="rotate" from="0 50 50"
                to="360 50 50" repeatCount="indefinite" />
        </line>
    </svg>
</span>
<label for="" class="tmb-ft tmb-f-12 py-2">
    Please wait ...
</label>
`;

    let _el = document.createElement("div");
    _el.id = "tmb-loader";
    var classes = ["tmb-loader", "flex-column"];
    classes.forEach(x => { _el.classList.add(x) })
    _el.innerHTML = tempt;

    return _el;
}

export default tmb_loader;