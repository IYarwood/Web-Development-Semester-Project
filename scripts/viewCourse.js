document.addEventListener("DOMContentLoaded", function() {
    const options = document.querySelectorAll("#person option");

    //Hiding all the options when loaded
    for (let i = 0; i<options.length; i++){
        options[i].hidden = true;
    }

    //Unhiding options based on what was selected in first drop down
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

    //Trigger when second drop down is changed
    const person = document.querySelector("#person");
    person.addEventListener("change", function(){
        //Get type from top drop down
        const type = document.querySelector("#type").value;

        //Get person from second drop down, value is the id of the person
        const person = this.value;

        //Getting both tables
        const instructorTableRows= document.querySelectorAll(".instructor tr");
        const studentTableRows= document.querySelectorAll(".student tr");

        if (type == "instructor"){
            //If we want insturctor table hid all of the student rows again incase setting were changed before
            for (let i = 0; i<studentTableRows.length; i++){
                studentTableRows[i].style.display="none";  
            }

            //Show instructor header
            instructorTableRows[0].style.display="table-row";
            //Start at 1 to avoid hiding headers
            for (let i = 1; i<instructorTableRows.length; i++){
                //If cell[8] aka instructor ID is same as selected id
                if (instructorTableRows[i].cells[8].textContent == person){
                    instructorTableRows[i].style.display="table-row";
                }
                else{
                    instructorTableRows[i].style.display="none";
                }
            }
        }
        else if (type == "student"){
            //Same logic as instructor just flipped
            for (let i = 0; i<instructorTableRows.length; i++){
                instructorTableRows[i].style.display="none";  
            }
            studentTableRows[0].style.display="table-row";
            //Start at 1 to avoid hiding headers
            for (let i = 1; i<studentTableRows.length; i++){
                //cell[10] = studentID
                if (studentTableRows[i].cells[10].textContent == person){
                    studentTableRows[i].style.display="table-row";
                }
                else{
                    studentTableRows[i].style.display="none";
                }
            }
        }
        else{
            //Fail safe to hid tables if neither of the above get selected somehow
            for (let i = 0; i<instructorTableRows.length; i++){
                instructorTableRows[i].style.display="none";  
            }
            for (let i = 0; i<studentTableRows.length; i++){
                studentTableRows[i].style.display="none";  
            }
        }
    });
});

