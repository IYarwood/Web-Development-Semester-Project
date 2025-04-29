<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Course</title>
    <link rel="stylesheet" href="../CSS/navbar.css">
    <link rel="stylesheet" href="../CSS/style.css">
    <script src="../scripts/daysTimeDropdown.js"></script>
    <script src="../scripts/validation.js"></script>
</head>
<body>
    <header>Add Course</header>
    
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
            <form action="../php/addCourseSubmit.php" method="POST" id="form">
                <div class="form-group">
                    <label for="semester">Semester:</label>
                    <select id="semester" name="semester" required>
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="fall">Fall</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="year">Course Year:</label>
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
                
                <div class="form-group">
                    <label for="courseName">Course Name:</label>
                    <input type="text" id="courseName" name="courseName" required>
                </div>
                
                <div class="form-group">
                    <label for="room">Room:</label>
                    <input type="text" id="room" name="room" required>
                </div>
                
                <div class="form-group">
                <label for="days">Days Offered:</label>
                <select id="days" name="days" required>
                    <option value="" disabled selected>Select Days...</option>
                    <option value="mwf">Monday, Wednesday, Friday</option>
                    <option value="mw">Monday, Wednesday</option>
                    <option value="tth">Tuesday, Thursday</option>
                    <option value="m">Monday</option>
                    <option value="t">Tuesday</option>
                    <option value="th">Thursday</option>
                </select>
                </div>

                <div class="form-group">
                <label for="times">Times Offered:</label>
                <select id="times" name="times" required>
                    <option value="" disabled selected>Select Times...</option>
                    <option value="mwf8" class="mwf">8:00 AM - 8:50 AM</option>
                    <option value="mwf9" class="mwf">9:00 AM - 9:50 AM</option>
                    <option value="mwf10" class="mwf">10:00 AM - 10:50 AM</option>
                    <option value="mwf11" class="mwf">11:00 AM - 11:50 AM</option>
                    <option value="mwf12" class="mwf">12:00 PM - 12:50 PM</option>
                    <option value="mwf1" class="mwf">1:00 PM - 1:50 PM</option>
                    <option value="mwf2" class="mwf">2:00 PM - 2:50 PM</option>
                    <option value="mwf3" class="mwf">3:00 PM - 3:50 PM</option>
                    <option value="mw9" class="mw">9:00 AM - 10:50 AM</option>
                    <option value="mw1" class="mw">1:00 PM - 2:15 PM</option>
                    <option value="mw12" class="mw">1:00 PM - 2:50 PM</option>
                    <option value="mw2" class="mw">2:00 PM - 3:15 PM</option>
                    <option value="tth8" class="tth">8:00 AM - 9:15 AM</option>
                    <option value="tth9" class="tth">9:30 AM - 10:45 AM</option>
                    <option value="tth11" class="tth">11:00 AM - 12:15 PM</option>
                    <option value="tth1" class="tth">1:00 PM - 2:15 PM</option>
                    <option value="tth2" class="tth">2:30 PM - 3:45 PM</option>
                    <option value="single1" class="single">1:00 PM - 4:00 PM</option>
                    <option value="single2" class="single">2:00 PM - 5:00 PM</option>
                    <option value="single3" class="single">7:00 PM - 9:30 PM</option>
                </select>
                </div>

                <div class="form-group">
                    <label for="creditHours">Credit Hours:</label>
                    <input type="number" id="creditHours" name="creditHours" required>
                </div>

                <div class="form-group">
                    <label for="instructor">Instructor</label>
                    <select name="instructor" id="instructor">
                        <?php
                            try{
                                $connString = "mysql:host=localhost;dbname=registrationSystem;charset=gbk";
                                $user = "root";
                                $pass = "";
                                $pdo = new PDO($connString, $user, $pass);
                                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                                
                                $sql = "SELECT * FROM instructor";
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
                    <label for="enrollmentCap">Enrollment Cap:</label>
                    <input type="number" id="enrollmentCap" name="enrollmentCap" required>
                </div>
                
                <button>Submit</button>
            </form>  
        </div>
    </main>  
    <footer>
        Web Development Project by Ian Yarwood, Corey Verkouteren, and Aditya Shah
    </footer>
</body>
</html>