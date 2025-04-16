document.addEventListener("DOMContentLoaded", function() {
    const options = document.querySelectorAll("#person option");
    const table = document.querySelector("#instructorTable");
    table.hidden=true;
    for (let i = 0; i<options.length; i++){
        options[i].hidden = true;
    }

    const people = document.querySelector("#type");
    people.addEventListener("change", function(){
        const type = this.value;
        for (let i = 0; i<options.length; i++){
            if (options[i].className == type){
                options[i].hidden = false;
            }
            else{
                options[i].hidden = true;
            }
        }

    });

    const person = document.querySelector("#person");
    person.addEventListener("change", function(){
        const type = document.querySelector("#type").value;
        const person = this.value;
        if (type == "instructor"){
            table.hidden = false;
        }
    });
});

