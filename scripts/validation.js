document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener("submit", function(e) {
        validate_form(e);
    });
});


function validate_form(submitEvent) {
    submitEvent.preventDefault();

    const inputObject = {
        "semester": validate_none,
        "year": validate_year,
        "coursePrefix": validate_course_prefix,
        "courseNumber": validate_course_number,
        "courseSection": validate_course_section,
        "courseName": validate_none,
        "room": validate_room_number,
        "days": validate_none,
        "times": validate_none,
        "creditHours": validate_credit_hours,
        "instructorFirstName": validate_none,
        "instructorLastName": validate_none,
        "enrollmentCap": validate_enrollment_cap,
        "firstName": validate_firstname,
        "lastName": validate_lastname
    };

    formObject = submitEvent.srcElement;
    allFormInputs = formObject.querySelectorAll(".form-group > *:not(:first-child)");
    console.log(allFormInputs);

    for (let i=0; i < allFormInputs.length; i++) {
        inputElement = allFormInputs[i];
        console.log(inputElement.id, inputElement.value, "test");
        isValid = inputObject[inputElement.id](inputElement.value.trim());
    }
    
}


function validate_none(tag) {
    return true;
}


function validate_firstname(firstName) {
    let firstNameSyntax = /^[\s\S]+$/;
    let valid = firstNameSyntax.test(firstName);
    if (firstName == ""){
        alert("First Name is required");
        return false;
    }else if (valid != true){
        alert("Please enter a string for First Name");
        return false;
    }
    return true;
}


function validate_lastname(lastName) {
    let lastNameSyntax = /^[\s\S]+$/;
    valid = lastNameSyntax.test(lastName);
    if (lastName == ""){
        alert("Last Name is required");
        return false;
    }else if (valid != true){
        alert("Please enter a string for Last Name");
        return false;
    }
    return true;
}


function validate_department(department) {
    let departmentSyntax = /^[\s\S]*$/;
    valid = departmentSyntax.test(department);
    if (valid != true){
        alert("Please enter a string for Department");
        return false;
    }
    return true;
}


function validate_year(year) {
    let yearSyntax = /^\d{4}$/;
    let valid = yearSyntax.test(year);
    if (year == ""){
        alert("Year is required");
        return false;
    }else if (valid != true){
        alert("Please enter a four digit year");
        return false;
    }else if (year < 2025){
        alert("Please enter a future year");
        return false;
    }
    return true;
}


function validate_course_prefix(coursePrefix) {
    let prefixSyntax = /^[A-Z]{3,4}$/;
    valid = prefixSyntax.test(coursePrefix);
    if (coursePrefix == ""){
        alert("Course Prefix is required");
        return false;
    }else if (valid != true){
        alert("Please enter a 3,4 capital letter Course Prefix");
        return false;
    }
    return true;
}


function validate_course_number(courseNumber) {
    let numberSyntax = /^\d{3}$/;
    valid = numberSyntax.test(courseNumber);
    if (courseNumber == ""){
        alert("Course Number is required");
        return false;
    }else if (valid != true){
        alert("Please enter a 3 digit number for Course Number");
        return false;
    }else if (courseNumber > 499){
        alert("Please enter a 3 digit number less than 499 for Course Number");
        return false;
    }
    return true;
}


function validate_course_section(courseSection) {
    let sectionSyntax = /^\d{2}$/;
    valid = sectionSyntax.test(courseSection);
    if (courseSection == ""){
        alert("Course Section is required");
        return false;
    }else if (valid != true){
        alert("Please enter a 2 digit number for Course Section");
        return false;
    }
    return true;
}


function validate_room_number(room) {
    let roomNumberSyntax = /^([A-Za-z ]+?)\s(\d{2,3}[A-Za-z]?)$/;
    valid = roomNumberSyntax.test(room);
    if (valid != true){
        alert("Please enter a string and 2 or 3 digits for Room (Shelby 23b)");
        return false;
    }
    return true;
}


function validate_credit_hours(creditHours) {
    let creditHoursSyntax = /^\d{1}$/;
    valid = creditHoursSyntax.test(creditHours);
    if (creditHours == ""){
        alert("Credit Hours is required");
        return false;
    }else if (valid != true && (creditHours < 0 || creditHours > 4)){
        alert("Please enter a digit between 1-4 for Credit Hours");
        return false;
    }
    return true;
}


function validate_enrollment_cap(enrollmentCap) {
    let enrollmentCapSyntax = /^\d{2}$/;
    valid = enrollmentCapSyntax.test(enrollmentCap);
    if (enrollmentCap == ""){
        alert("Enrollment Cap is required");
        return false;
    }else if (valid != true){
        alert("Please enter a 2 digit number for Enrollment Cap");
        return false;
    }
    return true;
}



function validate_email(email) {
    let emailSyntax = /^[a-z]{3}\d{3}@marietta\.edu$/;
    valid = emailSyntax.test(email);
    if (email == ""){
        alert("Email is required");
        return false;
    }else if (valid != true){
        alert("Please enter a valid marietta email (abc123@marietta.edu)");
        return false;
    }
    return true;
}