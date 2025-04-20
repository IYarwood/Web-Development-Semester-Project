document.addEventListener("DOMContentLoaded", function() {
    //Hidding semester and course objects
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
        //Hidding tables incase we are switching views
        const studentByCourseRows = document.querySelectorAll(".studentByCourse tr");
        for (let i = 0; i < studentByCourseRows.length; i++){
            studentByCourseRows[i].style.display = "none";
        }
        const studentBySemesterRows = document.querySelectorAll(".studentBySemester tr");
        for (let i = 0; i < studentBySemesterRows.length; i++){
            studentBySemesterRows[i].style.display = "none";
        }

        //Show course or semester based on type selected
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

    //Dataset is set in viewStudents.php <tr data-courseid={$row['id']}>, might change this in viewCourse, it is much neater
    const courseDropdown = document.querySelector("#course");
    courseDropdown.addEventListener("change", function(){
        const courseID = this.value;
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

    const semesterDropdown = document.querySelector("#semester");
    semesterDropdown.addEventListener("change", function(){
        const courseSemester = this.value;
        const studentBySemesterRows = document.querySelectorAll(".studentBySemester tr");
        studentBySemesterRows[0].style.display = "table-row";
        for (let i = 1; i < studentBySemesterRows.length; i++){
            console.log(studentBySemesterRows[i].dataset.coursesemester);
            if (studentBySemesterRows[i].dataset.coursesemester == courseSemester){
                studentBySemesterRows[i].style.display = "table-row";
            }
            else{
                studentBySemesterRows[i].style.display = "none";
            }
        }

    });
});



