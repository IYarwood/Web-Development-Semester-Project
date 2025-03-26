document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener("submit", function(e){
        e.preventDefault();
        let firstName = document.getElementById("firstName").value.trim();
        let lastName = document.getElementById("lastName").value.trim();
        let department = document.getElementById("department").value.trim();
        let rank = document.getElementById("rank").value.trim();
        let email = document.getElementById("email").value.trim();

        let firstNameSyntax = /^[\s\S]+$/;
        let valid = firstNameSyntax.test(firstName);
        if (firstName == ""){
            alert("First Name is required");
        }else if (valid != true){
            alert("Please enter a string")
        }

        let lastNameSyntax = /^[\s\S]+$/;
        valid = lastNameSyntax.test(lastName);
        if (lastName == ""){
            alert("Last Name is required");
        }else if (valid != true){
            alert("Please enter a string");
        }

        let departmentSyntax = /^[\s\S]*$/;
        valid = departmentSyntax.test(department);
        if (valid != true){
            alert("Please enter a string");
        }

        let emailSyntax = /^[a-z]{3}\d{3}@marietta\.edu$/;
        valid = emailSyntax.test(email);
        if (email == ""){
            alert("Alert is required");
        }else if (valid != true){
            alert("Please enter a valid marietta email (abc123@marietta.edu)");
        }
    });
});
