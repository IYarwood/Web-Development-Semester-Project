document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener("submit", function(e){
        e.preventDefault();
        let firstName = document.getElementById("firstName").value.trim();
        let lastName = document.getElementById("lastName").value.trim();
        let semester = document.getElementById("semester").value.trim();
        let year = document.getElementById("year").value.trim();
        let coursePrefix = document.getElementById("coursePrefix").value.trim();
        let courseNumber = document.getElementById("courseNumber").value.trim();
        let courseSection = document.getElementById("courseSection").value.trim();

        let fields = ["First Name", "Last Name", "Semester", "Year", "Course Prefix", "Course Number", "Course Section"]

        let enteredValues = [firstName, lastName,semester,year,coursePrefix, courseNumber, courseSection];


        for (let i = 0; i < enteredValues.length; i++){
            if (enteredValues[i] == ""){
                alert("Please enter value for " + fields[i]);
            }

        }

        let yearSyntax = /^\d{4}$/;
        let valid = yearSyntax.test(year);
        if (valid != true){
            alert("Please enter a four digit year");
        }else if (year < 2025){
            alert("Please enter a future year");
        }

        let prefixSyntax = /^[A-Z]{3,4}$/;
        valid = prefixSyntax.test(coursePrefix);
        if (valid != true){
            alert("Prefix syntax incorrect");
        }

        let numberSyntax = /^\d{3}$/;
        valid = numberSyntax.test(courseNumber);
        if (valid != true){
            alert("Please enter a 3 digit number");
        }else if (courseNumber > 499){
            alert("Please enter a 3 digit number less than 499");
        }

        alert("Submitted Successfully");

    });
});