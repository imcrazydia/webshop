<?php
//connecting to the database
$db = mysqli_connect('localhost', 'root', '', 'mediashirts')
or die('Error connecting to MySQL server.');
 ?>

 <!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="utf-8">
     <title></title>
   </head>
   <body>
     <h1>Thank you for the purchase</h1>
     <br>
     <h2>Your purchase has been recieved!</h2>

     <?php
     // user input security
     $name = mysqli_real_escape_string($db, $_REQUEST['name']);
     $shirt = mysqli_real_escape_string($db, $_REQUEST['shirt']);
     $size = mysqli_real_escape_string($db, $_REQUEST['size']);
     $color = mysqli_real_escape_string($db, $_REQUEST['color']);

     //Insert info execution
     $sql = "INSERT INTO info (name, shirt, size, color) VALUES ('$name', '$shirt', '$size', '$color')";
     if (mysqli_query($db, $sql)){
       echo "Records inserted succesfully.";
     } else {
       echo "ERROR: Could not able to execute $sql. " . mysqli_error($db);
     }

     //Close the connection to the database
     mysqli_close($db);
      ?>
   </body>
 </html>
