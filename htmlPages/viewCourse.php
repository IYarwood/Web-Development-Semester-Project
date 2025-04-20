<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Course</title>
    <link rel="stylesheet" href="../CSS/navbar.css">
    <link rel="stylesheet" href="../CSS/style.css">
    <script type="module" src="../scripts/viewCourse.js"></script>
</head>
<header>View Courses</header>
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
                        <option value="student">Student</option>
                        <option value="instructor">Instructor</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="person">Person</label>
                    <select name="person" id="person">
                        <option value="">Select Person</option>
                        <?php
                            try{
                                $connString = "mysql:host=localhost;dbname=registrationSystem";
                                $user = "root";
                                $pass = "";
                                $pdo = new PDO($connString, $user, $pass);
                                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                                
                                $sql = "SELECT * FROM student";
                                $result = $pdo->query($sql);
                                while ($row = $result->fetch()) {
                                    echo "<option class='student' value={$row['id']}>{$row['firstName']} {$row['lastName']}</option>";
                                }

                                $sql = "SELECT * FROM instructor";
                                $result = $pdo->query($sql);
                                while ($row = $result->fetch()) {
                                    echo "<option class='instructor' value={$row['id']}>{$row['firstName']} {$row['lastName']}</option>";
                                }
                            }
                            catch (PDOException $e) {
                                echo "Failed";
                            }

                        ?>
                    </select>
                </div>
            </form>  
        </div>
        <div>
            <table class="student" id="studentTable">
            <tr>
                <th>Course Prefix</th>
                <th>Course Number</th>
                <th>Course Section</th>
                <th>Course Name</th>
                <th>Days</th>
                <th>Time</th>
                <th>Room</th>
                <th>Credit Hours</th>
                <th>Instructor Name</th>
                <th>Enrollment Cap</th>
            </tr>
            <?php
            $sql = "SELECT courses.id, courses.semester, courses.prefix, courses.number, courses.section, courses.name, courses.room, courses.days, courses.times, courses.hours, courses.instructorID, instructor.firstName, instructor.lastName, registration.studentID, courses.enrollmentCap
            FROM registration
            INNER JOIN courses ON registration.courseID=courses.id
            INNER JOIN instructor ON courses.instructorID=instructor.id";
            $result = $pdo->query($sql);
            while ($row = $result->fetch()) {
                echo 
                "<tr class='student' data-studentid={$row['studentID']}>
                    <td>{$row['prefix']}</td>
                    <td>{$row['number']}</td>
                    <td>{$row['section']}</td>
                    <td>{$row['name']}</td>
                    <td>{$row['days']}</td>
                    <td>{$row['times']}</td>
                    <td>{$row['room']}</td>
                    <td>{$row['hours']}</td>
                    <td>{$row['firstName']} {$row['lastName']}</td>
                    <td>{$row['enrollmentCap']}</td>
                </tr>";
            }
            ?>
            </table>
        </div>
        <div>
        <table class="instructor" id="instructorTable">
            <tr>
                <th>Course Prefix</th>
                <th>Course Number</th>
                <th>Course Section</th>
                <th>Course Name</th>
                <th>Days</th>
                <th>Time</th>
                <th>Room</th>
                <th>Credit Hours</th>
                <th>Enrollment Cap</th>
            </tr>
            <?php
            $sql = "SELECT courses.id, courses.semester, courses.prefix, courses.number, courses.section, courses.name, courses.name, courses.room, courses.days, courses.times, courses.hours, courses.instructorID, instructor.firstName, instructor.lastName, courses.enrollmentCap
            FROM courses
            INNER JOIN instructor ON courses.instructorID=instructor.id";
            $result = $pdo->query($sql);
            while ($row = $result->fetch()) {
                echo 
                "<tr class='instructor' data-instructorid={$row['instructorID']}>
                    <td>{$row['prefix']}</td>
                    <td>{$row['number']}</td>
                    <td>{$row['section']}</td>
                    <td>{$row['name']}</td>
                    <td>{$row['days']}</td>
                    <td>{$row['times']}</td>
                    <td>{$row['room']}</td>
                    <td>{$row['hours']}</td>
                    <td>{$row['enrollmentCap']}</td>
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