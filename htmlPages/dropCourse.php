<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drop Course</title>
    <link rel="stylesheet" href="../CSS/navbar.css">
    <link rel="stylesheet" href="../CSS/style.css">
    <script type="module" src="../scripts/validation.js"></script> 
</head>
<body>
    <header>Drop Course</header>
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
    <main>
        <div class="form-container">
            <form action="../php/dropCourseSubmit.php" method="POST" id="form">
                
                <div class="form-group">
                    <label for="student">Student</label>
                    <select name="student" id="student">
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
                                    echo "<option value={$row['id']}>{$row['firstName']} {$row['lastName']}</option>";
                                }
                                $pdo = null;
                            }
                            catch (PDOException $e) {
                                echo "Failed";
                            }

                        ?>

                    </select>
                </div>

                <div class="form-group">
                    <label for="course">Course</label>
                    <select name="course" id="course">
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
                                    echo "<option value={$row['id']}>{$row['name']} {$row['semester']} {$row['year']}</option>";
                                }
                                $pdo = null;
                            }
                            catch (PDOException $e) {
                                echo "Failed";
                            }

                        ?>

                    </select>
                </div>
                <!--
                
                <div class="form-group">
                    <label for="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" required>
                </div>
                
                <div class="form-group">
                    <label for="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" required>
                </div>
                
                <div class="form-group">
                    <label for="semester">Semester:</label>
                    <select id="semester" name="semester" required>
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="fall">Fall</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="year">Year:</label>
                    <input type="number" id="year" name="year" required>
                </div>
                
                <div class="form-group">
                    <label for="coursePrefix">Course Prefix:</label>
                    <input type="text" id="coursePrefix" name="coursePrefix" required>
                </div>
                
                <div class="form-group">
                    <label for="courseNumber">Course Number:</label>
                    <input type="number" id="courseNumber" name="courseNumber" required>
                </div>
                
                <div class="form-group">
                    <label for="courseSection">Course Section:</label>
                    <input type="number" id="courseSection" name="courseSection" required>
                </div>
                -->
                
                <button>Submit</button>
            </form>  
        </div>
    </main>  
    <footer>
        Web Development Project by Ian Yarwood, Corey Verkouteren, and Aditya Shah
    </footer>
</body>
</html>
