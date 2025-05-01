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
            $year = $_POST['classYear'];
            $major = $_POST['major'];
            $email = $_POST['email'];
            $sql = "INSERT INTO student (firstName, lastName, year, major, email) VALUES (?, ?, ?, ?, ?)";

            $stmt = $pdo->prepare($sql);

            $stmt->execute([$firstName, $lastName, $year, $major, $email]);

            $message = "Student Enrolled";
            
            $pdo = null;
        }
        catch (PDOException $e) {
            die($e->getMessage());
        }
    }
    echo 
    "<p>{$message}</p> 
    <a style='padding: 8px 16px; background-color: lightgrey; border-radius: 5px; text-decoration: none; color: black;' href='../htmlPages/studentEnroll.html'>Back</a>";

?>
