document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener("submit", function(e){
        e.preventDefault();
        let firstName = document.getElementById("firstName").value.trim();
        let lastName = document.getElementById("lastName").value.trim();
        let year = document.getElementById("year").value.trim();
        let major = document.getElementById("major").value.trim();
        let email = document.getElementById("email").value.trim();

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

        //Still thinking about non required fields
        let majorSyntax = /^[\s\S]*$/;
        valid = majorSyntax.test(major);
        if (valid != true){
            alert("Please enter a string for major");
        }

        let emailSyntax = /^[a-z]{3}\d{3}@marietta\.edu$/;
        valid = emailSyntax.test(email);
        if (email == ""){
            alert("Email is required");
        }else if (valid != true){
            alert("Please enter a valid marietta email (abc123@marietta.edu)");
        }
    });
});
