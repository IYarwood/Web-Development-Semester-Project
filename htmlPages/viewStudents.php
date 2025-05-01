<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Students</title>
    <link rel="stylesheet" href="../CSS/navbar.css">
    <link rel="stylesheet" href="../CSS/style.css">
    <script type="module" src="../scripts/viewStudents.js"></script>
</head>
<header>View Students</header>
<nav>
    <ul>
        <li><a href="main.html">Home</a></li>
        <li><a href="studentEnroll.html">Student Enrollment</a></li>
        <li><a href="addInstructor.html">Add Instructor</a></li>
        <li><a href="addCourse.php">Add Course</a></li>
        <li><a href="registerCourse.php">Register Course</a></li>
        <li><a href="dropCourse.php">Drop Course</a></li>
        <li><a href="viewCourse.php">View Course</a></li>
        <li><a href="viewStudents.php">View Student</a></li>
        <li><a href="userManual.html">User Manual</a></li>
        <li><a href="programmerManual.html">Programmer Manual</a></li>
        
    </ul>
</nav>
<body>
    <main>
        <div class="form-container">
            <form action="" method="POST" id="form">
            <div class="form-group">
                    <label for="type">Type</label>
                    <select name="type" id="type">
                        <option value="">Select Type</option>
                        <option value="course">Course</option>
                        <option value="semester">Semester</option>
                    </select>
                </div>
            <div class="form-group">
                <label for="course" class="course">Course</label>
                <select name="course" id="course" class="course">
                    <option value="">Select Course</option>
                    <?php
                        try{
                            $connString = "mysql:host=localhost;dbname=registrationSystem";
                            $user = "root";
                            $pass = "";
                            $pdo = new PDO($connString, $user, $pass);
                            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                            
                            $sql = "SELECT * FROM courses";
                            $result = $pdo->query($sql);
                            while ($row = $result->fetch()) {
                                echo "<option class='course' value={$row['id']}>{$row['prefix']} {$row['name']}</option>";
                            }
                        }
                        catch (PDOException $e) {
                            echo "Failed";
                        }

                    ?>
                </select>
            </div>
            <div class="form-group">
                <label for="semester" class="semester">Semester</label>
                <select name="semester" id="semester" class="semester">
                    <option selected>Select Semester</option>
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                    <option value="fall">Fall</option>
                </select>
            </div>
            </form>  
        </div>
        <div>
            <table class="studentByCourse" id="studentByCourse">
            <tr>
                <th>Student Name</th>
                <th>Student Year</th>
                <th>Student Major</th>
                <th>Student Email</th>
            </tr>
            <?php
            $sql = "SELECT courses.id, student.firstName, student.lastName, student.year, student.major, student.email
            FROM registration
            INNER JOIN student ON registration.studentID=student.id
            INNER JOIN courses ON registration.courseID=courses.id";
            $result = $pdo->query($sql);
            while ($row = $result->fetch()) {
                echo 
                "<tr data-courseid={$row['id']}>
                    <td>{$row['firstName']} {$row['lastName']}</td>
                    <td>{$row['year']}</td>
                    <td>{$row['major']}</td>
                    <td>{$row['email']}</td>
                </tr>";
            }
            ?>
            </table>
        </div>
        
        <div>
        <table class="studentBySemester" id="studentBySemester">
            <tr>
                <th>Student Name</th>
                <th>Student Year</th>
                <th>Student Major</th>
                <th>Student Email</th>
                <th>Course Prefix</th>
                <th>Course Number</th>
                <th>Course Section</th>
            </tr>
            <?php
            $sql = "SELECT courses.semester, student.firstName, student.lastName, student.year, student.major, student.email, courses.prefix, courses.number, courses.section
            FROM registration
            INNER JOIN student ON registration.studentID=student.id
            INNER JOIN courses ON registration.courseID=courses.id";
            $result = $pdo->query($sql);
            while ($row = $result->fetch()) {
                echo 
                "<tr data-coursesemester={$row['semester']}>
                    <td>{$row['firstName']} {$row['lastName']}</td>
                    <td>{$row['year']}</td>
                    <td>{$row['major']}</td>
                    <td>{$row['email']}</td>
                    <td>{$row['prefix']}</td>
                    <td>{$row['number']}</td>
                    <td>{$row['section']}</td>
                </tr>";
            }

            $pdo = null;
            ?>
        </table>
        </div>
        
        
    </main>  
    <footer>
        Web Development Project by Ian Yarwood, Corey Verkouteren, and Aditya Shah
    </footer>
</body>
</html>