document.addEventListener("DOMContentLoaded", function() {
    const options = document.querySelectorAll("#person option");

    for (let i = 0; i<options.length; i++){
        options[i].hidden = true;
    }

    const people = document.querySelector("#type");
    people.addEventListener("change", function(){
        const type = this.value;
        console.log(type);
        for (let i = 0; i<options.length; i++){
            console.log(options[i]);
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
        const person = this.value;
        

    });
});

