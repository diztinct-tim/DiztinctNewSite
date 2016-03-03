<?php
$name = $_POST["name"];
$email = $_POST["email"];
$number = $_POST["number"];
$project = $_POST["project"];
$cost = $_POST["cost"];
$message = $_POST["message"];
$time = $_POST["time"];
 
$EmailTo = "info@diztinct.com";
$Subject = "New Quote Request Received";
 
// prepare email body text
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n \n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n \n";
 
$Body .= "Phone Number: ";
$Body .= $number;
$Body .= "\n \n";
 
$Body .= "Project Type: ";
$Body .= $project;
$Body .= "\n \n";

$Body .= "Message: ";
$Body .= $message;
$Body .= "\n \n";

$Body .= "Project Budget: ";
$Body .= $cost;
$Body .= "\n \n";

$Body .= "Project Timeline: ";
$Body .= $time;
$Body .= "\n \n";
 
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}
 
?>