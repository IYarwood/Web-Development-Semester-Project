document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener("submit", function(e){
        e.preventDefault();
        let semester = document.getElementById("semester").value.trim();
        let year = document.getElementById("year").value.trim();
        let coursePrefix = document.getElementById("coursePrefix").value.trim();
        let courseNumber = document.getElementById("courseNumber").value.trim();
        let courseSection = document.getElementById("courseSection").value.trim();
        let creditHours = document.getElementById("creditHours").value.trim();
        let instructorFirstName = document.getElementById("instructorFirstName").value.trim();
        let instructorLastName = document.getElementById("instructorLastName").value.trim();
        let enrollmentCap = document.getElementById("enrollmentCap").value.trim();

        let fields = ["Semester", "Year", "Course Prefix", "Course Number", "Course Section", "Credit Hours", "Instructor First Name", "Instructor Last Name", "Enrollment Cap"]

        let enteredValues = [semester, year, coursePrefix, courseNumber, courseSection, creditHours, instructorFirstName, instructorLastName, enrollmentCap];


        for (let i = 0; i < enteredValues.length; i++){
            if (enteredValues[i] == ""){
                alert("Please enter value for " + fields[i]);
            }
        }
        //HAVENT TOUCHED SEMESTER
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

        let sectionSyntax = /^\d{2}$/;
        valid = sectionSyntax.test(courseSection);
        if (valid != true){
            alert("Please enter a 2 digit number");
        }

        //Not sure how to do room number

        let creditHoursSyntax = /^\d{1}$/;
        valid = creditHoursSyntax.test(creditHours);
        if (valid != true && (year < 0 || year > 4)){
            alert("Please enter a digit between 1-4");
        }

        let instructorFirstNameSyntax = /^[\s\S]+$/;
        valid = instructorFirstNameSyntax.test(instructorFirstName);
        if (valid != true){
            alert("Please enter a string");
        }

        let instructorLastNameSyntax = /^[\s\S]+$/;
        valid = instructorLastNameSyntax.test(instructorLastName);
        if (valid != true){
            alert("Please enter a string");
        }

        let enrollmentCapSyntax = /^\d{2}$/;
        valid = enrollmentCapSyntax.test(enrollmentCap);
        if (valid != true){
            alert("Please enter a 2 digit number");
        }
    });
});