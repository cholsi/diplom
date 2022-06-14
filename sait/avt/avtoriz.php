

<html>
<head>
    <title>Форма авторизации</title>
</head>
<body style=" margin: 0;
    padding: 0;
    background-color:red;">
<?php if (isset($error)): ?>
<span style="color: red;">
    <?= $error ?>
</span>
<?php endif; ?>


<?php 
require __DIR__ . '/connection.php';

$conn = connect();
    if((isset($_POST['username'])) && isset($_POST['password'])){
        $username=$_POST['username'];
        $password=$_POST['password'];
        $email=$_POST['email'];

        $query="INSERT INTO users (login,password,email) values ('$username','$password','$email')";
        $result=mysqli_query($conn, $query);

        if($result){
            $smsg="1";
            header('Location: /avt/vxod.php');
        }
        else{
            $smsg="Повторите попытку";
        }
    }
?>
<div style="background-color:black;height: 1000px;">
<div style="background-color:#CDC1C1; widht:100%">
    <a href=""><img src="../image/esl15.jpg" alt="logo"></a>
   
</div>
<div style="widht:50px;margin-left:590px;margin-top:100px; color:yellow; border:2px solid rgb(73, 221, 15);margin-right:550px;padding:10px 0 0 10px;">
<form class="form-signin" method="POST">
        <?php if(isset($smsg)){ ?> <div class="alert"> <?php echo $smsg; ?> </div> <?php } ?>
        <div style="margin-bottom=10px;text-align:center"><h2 >Регистрация</<h2></div><br>
        <input class="form-control" style="margin-bottom:5px" type="text" name="username" placeholder="Username" required><br>
        <input type="email" style="margin-bottom:5px"name="email" placeholder="Email" required><br>
        <input type="password" name="password" placeholder="password" required><br>
        <button type="submit" style="margin-top:15px">Зарегестрироваться</button>

      </form>



</div>
</body>
</html>