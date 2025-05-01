<?php
    if ($_SERVER["REQUEST_METHOD"]==="POST"){
        try {
            $connString = "mysql:host=localhost;dbname=registrationSystem;charset=gbk";
            $user = "root";
            $pass = "";
            $pdo = new PDO($connString, $user, $pass);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $firstName = $_POST["firstName"];
            $lastName = $_POST['lastName'];
            $department = $_POST['department'];
            $rank = $_POST['rank'];
            $email = $_POST['email'];
            $sql = "INSERT INTO instructor (firstName, lastName, department, rank, email) VALUES (?, ?, ?, ?, ?)";

            $stmt = $pdo->prepare($sql);

            $stmt->execute([$firstName, $lastName, $department, $rank, $email]);

            echo "Instructor Enrolled";
            
            $pdo = null;
        }
        catch (PDOException $e) {
            die($e->getMessage());
        }
    }
?>
<br>
<a href="../htmlPages/addInstructor.html">Back</a>