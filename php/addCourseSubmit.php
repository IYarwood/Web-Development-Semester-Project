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

            //$sql = "SELECT * FROM courses WHERE (days='$days' AND times='$times' AND room='$room') OR (days='$days' AND times='$times' AND instructorID='$instructor')";
            //$result = $pdo->query($sql);
            $result = $pdo->prepare("SELECT * FROM courses WHERE (days=? AND times=? AND room=?) OR (days=? AND times=? AND instructorID=?)");
            $result->execute([$days, $times, $room, $days, $times, $instructor]);  
            $count = 0;
            while ($row = $result->fetch()) {
                $count += 1;
            }
            
            if ($count < 1){
                // Proposed DB insertion change
                
                $times_value = [
                    "mwf8" => "8:00 AM to 8:50 AM" ,
                    "mwf9" => "9:00 AM to 9:50 AM",
                    "mwf10" => "10:00 AM to 10:50 AM",
                    "mwf11" => "11:00 AM to 11:50 AM",
                    "mwf12" => "12:00 PM to 12:50 PM",
                    "mwf1" => "1:00 PM to 1:50 PM",
                    "mwf2" => "2:00 PM to 2:50 PM",
                    "mwf3" => "3:00 PM to 3:50 PM",
                    "mw9" => "9:00 AM to 10:50 AM",
                    "mw1" => "1:00 PM to 2:15 PM",
                    "mw12" => "1:00 PM to 2:50 PM",
                    "mw2" => "2:00 PM to 3:15 PM",
                    "tth8" => "8:00 AM to 9:15 AM",
                    "tth9" => "9:30 AM to 10:45 AM",
                    "tth11" => "11:00 AM to 12:15 PM",
                    "tth1" => "1:00 PM to 2:15 PM",
                    "tth2" => "2:30 PM to 3:45 PM",
                    "single1" => "1:00 PM to 4:00 PM",
                    "single2" => "2:00 PM to 5:00 PM",
                    "single3" => "7:00 PM to 9:30 PM"
                ];

                $days_value = [
                    "mwf" => "Monday, Wednesday, Friday",
                    "mw" => "Monday, Wednesday",
                    "tth" => "Tuesday, Thursday",
                    "m" => "Monday",
                    "t" => "Tuesday",
                    "th" => "Thursday"
                ];

                $times = $times_value[$times];
                $days = $days_value[$days];
                

                $sql = "INSERT INTO courses (semester, year, prefix, number, section, name, room, days, times, hours, instructorID, enrollmentCap) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    
                $stmt = $pdo->prepare($sql);
    
                $stmt->execute([$semester, $year, $prefix, $number, $section, $name, $room, utf8_encode($days), utf8_encode($times), $hours, $instructor, $cap]);
    
                $message = "Course Made";
                $pdo = null; 
            }
            else{
                $message = "Course not made, course already exist at that time in that room or the professor is already busy.";
            }
        }
        catch (PDOException $e) {
            die($e->getMessage());
        }
    }
    echo 
    "<p>{$message}</p> 
    <a style='padding: 8px 16px; background-color: lightgrey; border-radius: 5px; text-decoration: none; color: black;' href='../htmlPages/addCourse.php'>Back</a>";

?>
