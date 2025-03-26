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

        let firstNameSyntax = /^[\s\S]+$/;
        let valid = firstNameSyntax.test(firstName);
        if (firstName == ""){
            alert("First Name is required");
        }else if (valid != true){
            alert("Please enter a string for First Name");
        }

        let lastNameSyntax = /^[\s\S]+$/;
        valid = lastNameSyntax.test(lastName);
        if (lastName == ""){
            alert("Last Name is required");
        }else if (valid != true){
            alert("Please enter a string for Last Name");
        }
        
        let yearSyntax = /^\d{4}$/;
        valid = yearSyntax.test(year);
        if (year == ""){
            alert("Year is required");
        }else if (valid != true){
            alert("Please enter a four digit year");
        }else if (year < 2025){
            alert("Please enter a future year");
        }

        let prefixSyntax = /^[A-Z]{3,4}$/;
        valid = prefixSyntax.test(coursePrefix);
        if (coursePrefix == ""){
            alert("Course Prefix is required");
        }else if (valid != true){
            alert("Prefix syntax incorrect");
        }

        let numberSyntax = /^\d{3}$/;
        valid = numberSyntax.test(courseNumber);
        if (courseNumber == ""){
            alert("Course Number is required");
        }else if (valid != true){
            alert("Please enter a 3 digit number");
        }else if (courseNumber > 499){
            alert("Please enter a 3 digit number less than 499");
        }

        let sectionSyntax = /^\d{2}$/;
        valid = sectionSyntax.test(courseSection);
        if (courseSection == ""){
            alert("Course Section is required");
        }else if (valid != true){
            alert("Please enter a 2 digit number");
        }
    });
});