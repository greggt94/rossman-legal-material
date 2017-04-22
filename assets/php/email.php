<?php

if($_POST){
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $message = $_POST['message'];

//Send Email
    mail("info@rossmanlegal.com", "This is an email from:" .$email, $message);
}

?>