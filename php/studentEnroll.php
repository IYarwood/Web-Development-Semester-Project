<?php
    if ($_SERVER["REQUEST_METHOD"]==="POST") 
        try {
            $connString = "mysql:host=localhost;dbname=registrationSystem;charset=gbk";
            $user = "root";
            $pass = "";
            $pdo = new PDO($connString, $user, $pass);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $firstName = $_POST["firstName"];
            $lastName = $_POST['lastName'];
            $year = $_POST['year'];
            $major = $_POST['major'];
            $email = $_POST['email'];
            $sql = "INSERT INTO student (firstName, lastName, year, major, email) VALUES (?, ?, ?, ?, ?)";

            $stmt = $pdo->prepare($sql);

            $stmt->execute([$firstName, $lastName, $year, $major, $email]);

            echo "Student Enrolled";
            
            $pdo = null;
        }
        catch (PDOException $e) {
            die($e->getMessage());
        }
?>