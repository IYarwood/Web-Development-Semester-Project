document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener("submit", function(e){
        e.preventDefault();
        let firstName = document.getElementById("firstName").value.trim();
        let lastName = document.getElementById("lastName").value.trim();
        let department = document.getElementById("department").value.trim();
        let rank = document.getElementById("rank").value.trim();
        let email = document.getElementById("email").value.trim();

        let fields = ["First Name", "Last Name", "Department", "Rank", "Email"]

        let enteredValues = [firstName, lastName, department, rank, email];

        
        for (let i = 0; i < enteredValues.length; i++){
            if (enteredValues[i] == ""){
                alert("Please enter value for " + fields[i]);
            }
        }

        let firstNameSyntax = /^[\s\S]+$/;
        let valid = firstNameSyntax.test(firstName);
        if (valid != true){
            alert("Please enter a string")
        }

        let lastNameSyntax = /^[\s\S]+$/;
        valid = lastNameSyntax.test(lastName);
        if (valid != true){
            alert("Please enter a string");
        }

        let departmentSyntax = /^[\s\S]+$/;
        valid = departmentSyntax.test(department);
        if (valid != true){
            alert("Please enter a string");
        }

        let emailSyntax = /^[a-z]{3}\d{3}@marietta\.edu$/;
        valid = emailSyntax.test(email);
        if (valid != true){
            alert("Please enter a valid marietta email (abc123@marietta.edu)");
        }
    });
});
