<?php

function connect(){
    $conn = mysqli_connect("127.0.0.1", "root", "", "sait");
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    return $conn;
}

function loadallgame(){
    $conn = connect();
    $sql = "SELECT * FROM `games`";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}
function shownameteam(){
    $conn = connect();
    $team1=$_POST['gid1'];
    $team2=$_POST['gid2'];
    $sql = "SELECT * FROM `teams` where teams.id='$team1' or teams.id='$team2'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}
function showallgame(){
    $conn = connect();
    $id=$_POST['gid'];
    $sql = "SELECT * FROM `stat_game` where id_games='$id'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}