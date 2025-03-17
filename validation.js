document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener("submit", function(e){
        e.preventDefault();
        let name = document.getElementById("firstName").value;
        if (name == ""){
            alert("Please enter a string for Name");
        }


        let type = typeof name;
        console.log(type);
        if (type == "null"){
            console.log("Please enter string");
        }
        

    });
});