<?php

function connect(){
    $conn = mysqli_connect("127.0.0.1", "root", "", "sait");
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    return $conn;
}

function email(){
    $str_get = $_POST["ename"];
    $conn = connect();
    $arrChartData[] = array();
    $sql = "SELECT name,email FROM `user` where name='$str_get' ";
    $res = $conn->query($sql) or trigger_error($conn->error."[$sql]");
    while($row = $res->fetch_assoc())
    {
        $arrChartData[] = $row;
    }
    foreach ( $arrChartData as $i=>$array )
    {
        if ( $i>0)
        {
            $a='';
            $a=$array['email'];
            setcookie('email',$a, 0, '/');
            echo $a;
        }
    };
    return $a;
}




function loadGoods(){
    $conn = connect();
    $sql = "SELECT * FROM teams";
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

function showplayers(){
    $conn = connect();
    $id1=$_POST['gid1'];
    $sql = "SELECT * FROM `playrs` where playrs.team='$id1'";
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
function savefamelyusername(){
    $conn = connect();
    $user=$_POST['nid'];
    $name=$_POST['user'];
    $famely=$_POST['famely'];

    $sql = "UPDATE users SET Имя ='$name', Фамилия='$famely' WHERE login  = '$user' ";
    $result = mysqli_query($conn, $sql);
    if (mysqli_query($conn,$sql)){
        echo "1";
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }
    mysqli_close($conn);
}
function addGoods(){
    $conn = connect();
    $id=$_POST['nid'];
    $player1=$_POST['nplayer1'];
    $player2=$_POST['nplayer2'];
    $player3=$_POST['nplayer3'];
    $player4=$_POST['nplayer4'];
    $player5=$_POST['nplayer5'];
    $kil1=$_POST['nk1'];
    $death1=$_POST['nd1'];
    $adr1=$_POST['nadr1'];
    $rating1=$_POST['nrating1'];
    $kil2=$_POST['nk2'];
    $death2=$_POST['nd2'];
    $adr2=$_POST['nadr2'];
    $rating2=$_POST['nrating2'];
    $kil3=$_POST['nk3'];
    $death3=$_POST['nd3'];
    $adr3=$_POST['nadr3'];
    $rating3=$_POST['nrating3'];
    $kil4=$_POST['nk4'];
    $death4=$_POST['nd4'];
    $adr4=$_POST['nadr4'];
    $rating4=$_POST['nrating4'];
    $kil5=$_POST['nk5'];
    $death5=$_POST['nd5'];
    $adr5=$_POST['nadr5'];
    $rating5=$_POST['nrating5'];


    $sql = "INSERT INTO stat_games (id_games, id_players,kills,death,adr,rating)
    VALUES ('$id','$player1','$kil1',' $death1','$adr1','$rating1'),
    ('$id','$player2','$kil2',' $death2','$adr2','$rating2'),
    ('$id','$player3','$kil3',' $death3','$adr3','$rating3'),
    ('$id','$player4','$kil4',' $death4','$adr4','$rating4'),
    ('$id','$player5','$kil5',' $death5','$adr5','$rating5')";
    
    if (mysqli_query($conn, $sql)) {
      echo "1";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);

}
function updateGoods(){
    $conn=connect();
    $id=$_POST['id'];
    $name=$_POST['gname'];
    $cost=$_POST['gcost'];
    $descr=$_POST['gdescr'];
    $img=$_POST['gimg'];

    $sql = "UPDATE tovar SET name ='$name',img='$img', descr='$descr' , cost='$cost' WHERE id = '$id' ";

    if (mysqli_query($conn,$sql)){
        echo "1";
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }
    mysqli_close($conn);
}
function deleteGoods(){
    $conn=connect();
    $id=$_POST['id'];

    $sql = " DELETE FROM `tovar` WHERE `tovar`.`id` = '$id' ";

    if (mysqli_query($conn,$sql)){
        echo "1";
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }
    mysqli_close($conn);
    writeJSON();

}

function NewGoods(){
    $conn=connect();
    $id=$_POST['nid'];
    $team1=$_POST['nteam1'];
    $team2=$_POST['nteam2'];
    $scrore_team1=$_POST['nscrore_team1'];
    $scrore_team2=$_POST['nscrore_team2'];

    $sql = "INSERT INTO games (id,team1, team2, scrore_team1,scrore_team2)
    VALUES ('$id','$team1','$team2','$scrore_team1','$scrore_team2')";
    
    if (mysqli_query($conn, $sql)) {
      echo "1";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}

function showmatch(){
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
function showmatchfull(){
    $conn = connect();
    $id1=$_POST['gid1'];
    $id2=$_POST['gid2'];
    $sql = "SELECT * FROM `teams` where teams.name='$id1' or teams.name='$id2'";
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
function loadfamelyusername(){
    $conn = connect();
    $id1=$_POST['name'];
    $sql = "SELECT * FROM `users` where login='$id1'";
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
function profilplayer (){
    $conn = connect();
    $id1=$_POST['name'];
    $sql = "SELECT * FROM `pro_player` where login='$id1'";
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
function  checkplayer(){
    $conn = connect();
    $id1=$_POST['name'];
    $sql = "SELECT * FROM `pro_player` where login ='$id1'";
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
function updateprofilplayer(){
    $conn=connect();
    $login=$_POST['name'];
    $famaly=$_POST['famaly'];
    $username=$_POST['username'];
    $ochestvo=$_POST['ochestvo'];
    $data=$_POST['data'];
    $grazhdan=$_POST['grazhdan'];
    $nomer=$_POST['nomer'];
    $soc=$_POST['soc'];
    $steam=$_POST['steam'];
    $sql = "UPDATE pro_player SET Имя='$username' ,Фамилия='$famaly',Отчество='$ochestvo',Дата_рождения='$data',Гражданство='$grazhdan',Номер_телефона='$nomer',соц_сети='$soc',ссылка_steam='$steam' WHERE login  = '$login' ";
    $result = mysqli_query($conn, $sql);
    if (mysqli_query($conn,$sql)){
        echo "1";
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }
    mysqli_close($conn);   
}
function saveprofilplayer(){
    $conn=connect();
    $login=$_POST['name'];
    $famaly=$_POST['famaly'];
    $username=$_POST['username'];
    $ochestvo=$_POST['ochestvo'];
    $data=$_POST['data'];
    $grazhdan=$_POST['grazhdan'];
    $nomer=$_POST['nomer'];
    $soc=$_POST['soc'];
    $steam=$_POST['steam'];
    $sql = "INSERT INTO pro_player (login,Имя,Фамилия,Отчество,Дата_рождения,Гражданство,Номер_телефона,соц_сети,ссылка_steam)
    VALUES ('$login','$username','$famaly','$ochestvo','$data','$grazhdan','$nomer','$soc','$steam')";   
    if (mysqli_query($conn, $sql)) {
      echo "1";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}



function showmap(){
    $conn = connect();
    $sql = "SELECT * FROM `maps`";
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
function savestatmaps(){
    $conn=connect();
    $idgame=$_POST['gidgame'];
    $map1=$_POST['idmap1'];
    $map2=$_POST['idmap2'];
    $map3=$_POST['idmap3'];
    $scrore_map1=$_POST['scoremap1'];
    $scrore_map11=$_POST['scoremap12'];
    $scrore_map2=$_POST['scoremap21'];
    $scrore_map21=$_POST['scoremap22'];
    $scrore_map3=$_POST['scoremap31'];
    $scrore_map31=$_POST['scoremap32'];
    $sql = "INSERT INTO stat_game (id_games,map_1,map_2,map_3,score_map_1,score_map1_2,score_map2_1,score_map2_2,score_map3_1,score_map3_2)
    VALUES ('$idgame','$map1','$map2','$map3','$scrore_map1','$scrore_map11','$scrore_map2','$scrore_map21','$scrore_map3','$scrore_map31')";   
    if (mysqli_query($conn, $sql)) {
      echo "1";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
function loadplayers(){
    $conn = connect();
    $sql = "SELECT * FROM `pro_player` where team is null ";
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

function newteam(){
    $conn=connect();
    $team=$_POST['name'];
    $user1=$_POST['user1'];
    $user2=$_POST['user2'];
    $user3=$_POST['user3'];
    $user4=$_POST['user4'];
    $user5=$_POST['user5'];
    $sql = "INSERT INTO zayavki (team_name,user1,user2,user3,user4,user5)
    VALUES ('$team','$user1','$user2','$user3','$user4','$user5')";   
    if (mysqli_query($conn, $sql)) {
      echo "1";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
function showzayvki(){
        $conn = connect();
        $sql = "SELECT * FROM `zayavki` ";
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
function deletezayvki(){
    $conn=connect();
    $id=$_POST['gid'];
    $sql = " DELETE FROM `zayavki` WHERE id= '$id' ";

    if (mysqli_query($conn,$sql)){
        echo "1";
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }
    mysqli_close($conn);
}
function upzayvki(){
    $conn=connect();
    $id=$_POST['gid'];
    $team=$_POST['name'];
    $user1=$_POST['user1'];
    $user2=$_POST['user2'];
    $user3=$_POST['user3'];
    $user4=$_POST['user4'];
    $user5=$_POST['user5'];
    $sql = "INSERT INTO teams (name) VALUES ('$team');
    UPDATE pro_player SET team='$team' WHERE nick ='$user1';
    UPDATE pro_player SET team='$team' where nick='$user2';
    UPDATE pro_player SET team='$team' where nick='$user3';
    UPDATE pro_player SET team='$team' where nick='$user4';
    UPDATE pro_player SET team='$team' where nick='$user5';
    DELETE FROM `zayavki` WHERE id= '$id' ";
    
    
    if (mysqli_multi_query($conn, $sql)) {
      echo "1";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
function upzayvki1(){
    $conn=connect();
    $team=$_POST['name'];
    $user1=$_POST['user1'];
    $user2=$_POST['user2'];
    $user3=$_POST['user3'];
    $user4=$_POST['user4'];
    $user5=$_POST['user5'];
    $sql = "INSERT INTO teams (name) VALUES ('$team');
    UPDATE pro_player SET team='$team' WHERE nick ='$user1';
    UPDATE pro_player SET team='$team' where nick='$user2';
    UPDATE pro_player SET team='$team' where nick='$user3';
    UPDATE pro_player SET team='$team' where nick='$user4';
    UPDATE pro_player SET team='$team' where nick='$user5'";

    
    
    if (mysqli_multi_query($conn, $sql)) {
      echo "1";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}

