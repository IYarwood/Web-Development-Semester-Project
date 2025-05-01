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

            $firstName = $_POST["firstName"];
            $lastName = $_POST['lastName'];
            $department = $_POST['department'];
            $rank = $_POST['rank'];
            $email = $_POST['email'];
            $sql = "INSERT INTO instructor (firstName, lastName, department, rank, email) VALUES (?, ?, ?, ?, ?)";

            $stmt = $pdo->prepare($sql);

            $stmt->execute([$firstName, $lastName, $department, $rank, $email]);

            $message = "Instructor Enrolled";
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