<?php

$message = json_decode($_POST["message"]);

echo  "Message was succesfully send: " . $message->val;

?>