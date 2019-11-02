<?php 
ini_set('display_errors',1);            //错误信息
ini_set('display_startup_errors',1);    //php启动错误信息
error_reporting(-1);                    //打印出所有的 错误信息
Print "Hello, World!";



$path = 'zhanlan-wanjie';

$dirs = array();

include './db_conn.php';
$conn = OpenCon();
       


// directory handle
$dir = dir($path);

while (false !== ($entry = $dir->read())) {
    if ($entry != '.' && $entry != '..') {
       if (is_dir($path . '/' .$entry)) {
            $dirs[] = $entry; 
       }
    }
}
sort($dirs);
// echo "<pre>"; print_r($dirs); exit;


$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')";

if (!mysqli_query($conn, "")) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

 
if (mysqli_query($conn, $sql)) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
 

CloseCon($conn);
?>