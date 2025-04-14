<?php
    if ($_SERVER["REQUEST_METHOD"]==="POST") 
        try {
            $connString = "mysql:host=localhost;dbname=registrationSystem";
            $user = "root";
            $pass = "";
            $pdo = new PDO($connString, $user, $pass);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $student = $_POST['student'];
            $course = $_POST['course'];

            $sql = "DELETE FROM registration WHERE studentID=$student AND courseID=$course";
            $result = $pdo->query($sql); 
            echo "Course Dropped";
                
            $pdo = null; 
        }
        catch (PDOException $e) {
            die($e->getMessage());
        }
?>