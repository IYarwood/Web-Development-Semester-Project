document.addEventListener("DOMContentLoaded", function() {
    const courses = document.querySelectorAll(".course");
    for (let i = 0; i < courses.length; i++){
        courses[i].hidden=true;
    }
    const semesters = document.querySelectorAll(".semester");
    for (let i = 0; i < semesters.length; i++){
        semesters[i].hidden=true;
    }

    const type = document.querySelector("#type");
    type.addEventListener("change", function(){
        const type = this.value;
        if (type == "course"){
            const semesters = document.querySelectorAll(".semester");
            for (let i = 0; i < semesters.length; i++){
                semesters[i].hidden=true;
            }
            const courses = document.querySelectorAll(".course");
            for (let i = 0; i < courses.length; i++){
                courses[i].hidden=false;
            }
        }
        else if(type == "semester"){
            const courses = document.querySelectorAll(".course");
            for (let i = 0; i < courses.length; i++){
                courses[i].hidden=true;
            }
            const semesters = document.querySelectorAll(".semester");
            for (let i = 0; i < semesters.length; i++){
                semesters[i].hidden=false;
            }
        }
    });


    const courseDropdown = document.querySelector("#course");
    courseDropdown.addEventListener("change", function(){
        const courseID = this.value;
        console.log(courseID);
        const studentByCourseRows = document.querySelectorAll(".studentByCourse tr");
        studentByCourseRows[0].style.display = "table-row";
        for (let i = 1; i < studentByCourseRows.length; i++){
            if (studentByCourseRows[i].dataset.courseid == courseID){
                studentByCourseRows[i].style.display = "table-row";
            }
            else{
                studentByCourseRows[i].style.display = "none";
            }
        }
    });
});

