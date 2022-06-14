<?php
function connect(){
    $conn = mysqli_connect("127.0.0.1", "root", "", "sait");
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    return $conn;
}


function checkAuth(string $login,string $password): bool {
    $conn = connect();
    $sql = "SELECT * FROM `users` WHERE login LIKE '$login' and password=$password";
    $result = mysqli_query($conn, $sql);
    $row_cnt = mysqli_num_rows($result);
    
    if($row_cnt>0){
        $flag="1";
        return true;
    }else{
        $flag="0";
    }
    return false;
    mysqli_close($conn);
}


function getUserLogin(): ?string
{
    $loginFromCookie = $_COOKIE['username'] ?? '';
    $passwordFromCookie = $_COOKIE['password'] ?? '';

    if (checkAuth($loginFromCookie,$passwordFromCookie)) {
        return $loginFromCookie;
    }

    return null;
}
