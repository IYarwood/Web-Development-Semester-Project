<?php
    if ($_SERVER["REQUEST_METHOD"]==="POST") 
        try {
            $connString = "mysql:host=localhost;dbname=registrationSystem";
            $user = "root";
            $pass = "";
            $pdo = new PDO($connString, $user, $pass);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $semester = $_POST['semester'];
            $year = $_POST['year'];
            $prefix = $_POST['coursePrefix'];
            $number = $_POST['courseNumber'];
            $section = $_POST['courseSection'];
            $name = $_POST['courseName'];
            $room = $_POST['room'];
            $days = $_POST['days'];
            $times = $_POST['times'];
            $hours = $_POST['creditHours'];
            $instructor = $_POST['instructor'];
            $cap = $_POST['enrollmentCap'];

            $sql = "SELECT * FROM courses WHERE (days='$days' AND times='$times' AND room='$room') OR (days='$days' AND times='$times' AND instructorID='$instructor')";
            $result = $pdo->query($sql); 
            $count = 0;
            while ($row = $result->fetch()) {
                $count += 1;
            }
            
            if ($count < 1){
                $sql = "INSERT INTO courses (semester, year, prefix, number, section, name, room, days, times, hours, instructorID, enrollmentCap) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    
                $stmt = $pdo->prepare($sql);
    
                $stmt->execute([$semester, $year, $prefix, $number, $section, $name, $room, $days, $times, $hours, $instructor, $cap]);
    
                echo "Course Made";
                
                $pdo = null; 
            }
            else{
                echo "Course not made, course already exist at that time in that room or the professor is already busy.";
            }
        }
        catch (PDOException $e) {
            die($e->getMessage());
        }
?>