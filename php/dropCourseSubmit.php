<?php
    $message = "";
    if ($_SERVER["REQUEST_METHOD"]==="POST"){ 
        try {
            $connString = "mysql:host=localhost;dbname=registrationSystem";
            $user = "root";
            $pass = "";
            $pdo = new PDO($connString, $user, $pass);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

            $student = $_POST['student'];
            $course = $_POST['course'];

            //$sql = "DELETE FROM registration WHERE studentID=$student AND courseID=$course";
            //$result = $pdo->query($sql); 
            $result = $pdo->prepare("DELETE FROM registration WHERE studentID=? AND courseID=?");
            $result->execute([$student, $course]);

            $message = "Course Dropped";
            $pdo = null; 
        }
        catch (PDOException $e) {
            die($e->getMessage());
        }
    }
    echo 
    "<p>{$message}</p> 
    <a style='padding: 8px 16px; background-color: lightgrey; border-radius: 5px; text-decoration: none; color: black;' href='../htmlPages/registerCourse.php'>Back</a>";

?>
