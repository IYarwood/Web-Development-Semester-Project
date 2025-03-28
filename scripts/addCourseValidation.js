import { triggerPopUp } from './submitPopUp.js';
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
        let room = document.getElementById("room").value.trim();

        let days = document.querySelector("select[name='days']").value;
        let time = "";
        if (days == "mwf") {
            time = document.querySelector("#mwfTime option:checked").value;
        } else if (days == "mw") {
            time = document.querySelector("#mwTime option:checked").value;
        } else if (days == "tth") {
            time = document.querySelector("#tthTime option:checked").value;
        } else if (days == "m" || days == "t" || days == "th") {
            time = document.querySelector("#singleDayTime option:checked").value;
        }
        let error = false;

        let yearSyntax = /^\d{4}$/;
        let valid = yearSyntax.test(year);
        if (year == ""){
            alert("Year is required");
            error=true;
        }else if (valid != true){
            alert("Please enter a four digit year");
            error=true;
        }else if (year < 2025){
            alert("Please enter a future year");
            error=true;
        }

        let prefixSyntax = /^[A-Z]{3,4}$/;
        valid = prefixSyntax.test(coursePrefix);
        if (coursePrefix == ""){
            alert("Course Prefix is required");
            error=true;
        }else if (valid != true){
            alert("Please enter a 3,4 letter Course Prefix");
            error=true;
        }

        let numberSyntax = /^\d{3}$/;
        valid = numberSyntax.test(courseNumber);
        if (courseNumber == ""){
            alert("Course Number is required");
            error=true;
        }else if (valid != true){
            alert("Please enter a 3 digit number for Course Number");
            error=true;
        }else if (courseNumber > 499){
            alert("Please enter a 3 digit number less than 499 for Course Number");
            error=true;
        }

        let sectionSyntax = /^\d{2}$/;
        valid = sectionSyntax.test(courseSection);
        if (courseSection == ""){
            alert("Course Section is required");
            error=true;
        }else if (valid != true){
            alert("Please enter a 2 digit number for Course Section");
            error=true;
        }

        let roomNumberSyntax = /^([A-Za-z ]+?)\s(\d{2,3}[A-Za-z]?)$/;
        console.log(room)
        valid = roomNumberSyntax.test(room);
        if (valid != true){
            alert("Please enter a string and digits for Room (Shelby 23b)");
            error=true;
        }

        //Check if this logic makes sense
        let creditHoursSyntax = /^\d{1}$/;
        valid = creditHoursSyntax.test(creditHours);
        if (creditHours == ""){
            alert("Credit Hours is required");
            error=true;
        }else if (valid != true && (creditHours < 0 || creditHours > 4)){
            alert("Please enter a digit between 1-4 for Credit Hours");
            error=true;
        }

        let instructorFirstNameSyntax = /^[\s\S]+$/;
        valid = instructorFirstNameSyntax.test(instructorFirstName);
        if (instructorFirstName == ""){
            alert("Instructor First Name is required");
            error=true;
        }else if (valid != true){
            alert("Please enter a string for Instructor First Name");
            error=true;
        }

        let instructorLastNameSyntax = /^[\s\S]+$/;
        valid = instructorLastNameSyntax.test(instructorLastName);
        if (instructorLastName == ""){
            alert("Instructor Last Name is required");
            error=true;
        }else if (valid != true){
            alert("Please enter a string for Instructor Last Name");
            error=true;
        }

        let enrollmentCapSyntax = /^\d{2}$/;
        valid = enrollmentCapSyntax.test(enrollmentCap);
        if (enrollmentCap == ""){
            alert("Enrollment Cap is required");
            error=true;
        }else if (valid != true){
            alert("Please enter a 2 digit number for Enrollment Cap");
            error=true;
        }

        if (error == false){
            const formElement = document.getElementById("form");
            console.log(time);
            triggerPopUp(formElement, days, time);
        }
    });
});