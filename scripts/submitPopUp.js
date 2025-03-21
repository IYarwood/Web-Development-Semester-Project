function on_load(event) {
    // get form element from document
    console.log("test");
    const form = document.querySelector('.form-container');
    const ts = form.querySelectorAll(".form-group > *:not(:first-child)");
    console.log(ts);

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        on_submit(e);
});
}


function on_submit(event) {
    const form_data = get_form_data(event.target);
    alert(format_alert_output(form_data));
}


function get_form_data(form_container) {
    console.log("contained:");
    const label_data = form_container.querySelectorAll(".form-group > *:first-child");
    const input_data = form_container.querySelectorAll(".form-group > *:not(:first-child)");
    const input_map = {};
    for (let i = 0; i < input_data.length; i++) {
        console.log(label_data[i])
        input_map[label_data[i].textContent] = input_data[i].value;
    }
    return input_map;
}


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