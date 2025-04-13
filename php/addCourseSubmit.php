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
            $room = $_PSOT['room'];
            $days = $_POST['days'];
            $times = $_POST['times'];
            $hours = $_POST['creditHours'];
            $instructor = $_POST['intructor'];
            $cap = $_POST['enrollmentCap'];

            $sql = "INSERT INTO courses (semester, prefix, number, section, name, room, days, times, hours, instructorID, enrollmentCap) VALUES (?,?,?,?,?,?,?,?,?,?,?)";

            $stmt = $pdo->prepare($sql);

            $stmt->execute([$semester, $year, $prefix, $number, $section, $name,$room, $days, $times, $hours, $instructor, $cap]);

            echo "Course Made";
            
            $pdo = null; 
        }
        catch (PDOException $e) {
            die($e->getMessage());
        }
?>