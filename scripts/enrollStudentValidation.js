import { triggerPopUp } from './submitPopUp.js';
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener("submit", function(e){
        e.preventDefault();
        let firstName = document.getElementById("firstName").value.trim();
        let lastName = document.getElementById("lastName").value.trim();
        let year = document.getElementById("year").value.trim();
        let major = document.getElementById("major").value.trim();
        let email = document.getElementById("email").value.trim();

        let error = false;

        let firstNameSyntax = /^[\s\S]+$/;
        let valid = firstNameSyntax.test(firstName);
        if (firstName == ""){
            alert("First Name is required");
            error = true;
        }else if (valid != true){
            alert("Please enter a string for First Name");
            error = true;
        }

        let lastNameSyntax = /^[\s\S]+$/;
        valid = lastNameSyntax.test(lastName);
        if (lastName == ""){
            alert("Last Name is required");
            error = true;
        }else if (valid != true){
            alert("Please enter a string for Last Name");
            error = true;
        }

        let majorSyntax = /^[\s\S]*$/;
        valid = majorSyntax.test(major);
        if (valid != true){
            alert("Please enter a string for Major");
            error = true;
        }

        let emailSyntax = /^[a-z]{3}\d{3}@marietta\.edu$/;
        valid = emailSyntax.test(email);
        if (email == ""){
            alert("Email is required");
            error = true;
        }else if (valid != true){
            alert("Please enter a valid marietta email (abc123@marietta.edu)");
            error = true;
        }

        if (error == false){
            const formElement = document.getElementById("form");
            triggerPopUp(formElement);
            formElement.submit();
        }
    });
});
