<?php
function OpenCon()
 {
    $servername = "localhost:3307";
    $username = "root";
    $password = "pwd";
    $db = "pan_db";
    // Create connection
    $conn = mysqli_connect($servername, $username, $password,$db);
    // Check connection
    if (!$conn) {
       die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully";
             
     return $conn;
}
     
function CloseCon($conn)
{
     $conn -> close();
}

function isExist($conn,$sql){
    $res=mysqli_query($conn,$sql);
    if (mysqli_num_rows($res) > 0) {
         return true;
    }
    return false;
}
       
?>