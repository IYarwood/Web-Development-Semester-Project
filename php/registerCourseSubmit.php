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

            $sql = "SELECT * FROM registration WHERE studentID=$student AND courseID=$course";
            $result = $pdo->query($sql); 
            $count = 0;
            while ($row = $result->fetch()) {
                $count += 1;
            }
            
            if ($count < 1){
                $sql = "INSERT INTO registration (studentID, courseID) VALUES (?,?)";
    
                $stmt = $pdo->prepare($sql);
    
                $stmt->execute([$student, $course]);
    
                echo "Registered";
                
                $pdo = null; 
            }
            else{
                echo "Student is already in this class";
            }
        }
        catch (PDOException $e) {
            die($e->getMessage());
        }
?>