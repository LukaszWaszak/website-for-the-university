<?php
$name = ($_POST["name"]);
$surname = ($_POST["surname"]);
$email = ($_POST["email"]);
$message = ($_POST["message"]);
$accept = ($_POST["accept-data"]);




echo  "<br /> Name:" .$name; 
echo  "<br /> Surname:" .$surname; 
echo  "<br /> Email:" .$email;
echo  "<br /> Message:" .$message;
echo  "<br /> Accept:" .$accept;



?>