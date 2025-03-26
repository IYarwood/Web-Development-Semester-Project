// start listening for submit on page full load
function on_load(event) {
    // get form element from document
    const form = document.querySelector('.form-container');

    form.addEventListener("submit", function(e) {
        // prevent form from clearing on submit
        e.preventDefault();
        on_submit(e);
});
}


// when submit happnes translate form data to alert
function on_submit(event) {
    const form_data = get_form_data(event.target);
    alert(format_alert_output(form_data));
}


// get input data from the form and translate it to a map
function get_form_data(form_container) {
    // get field names from label, pair with input field value from same form group
    const label_data = form_container.querySelectorAll(".form-group > *:first-child");
    const input_data = form_container.querySelectorAll(".form-group > *:not(:first-child)");
    const input_map = {};
    for (let i = 0; i < input_data.length; i++) {
        input_map[label_data[i].textContent] = input_data[i].value;
    }
    return input_map;
}


// format a map of input data to an output string for the alert pop up
function format_alert_output(form_data) {
    let output_string = "Submitted the following for each field: \n";
    for (const [input_type, input_value] of Object.entries(form_data)) {
        output_string = output_string + `${input_type} ${input_value} \n`;
    }
    return output_string
}


document.addEventListener("DOMContentLoaded", function(e) {
    on_load(e);
});