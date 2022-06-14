<link rel='stylesheet' href='index.css' />
<?php
if (!empty($_POST)) {
    require __DIR__ . '/connection.php';
    
      
    $login = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if (checkAuth($login,$password)) {
        setcookie('username', $login, 0, '/');
        setcookie('password', $password, 0, '/');
        header('Location:/main/index.html');
    } else {
        $error = 'Ошибка авторизации';
    }
}
?>

<div style="background-color:black;height: 1000px;">
<div style="background-color:#CDC1C1; widht:100%">
    <a href=""><img src="../image/esl15.jpg" alt="logo"></a>
   
</div>

<?php if(isset($login)){ ?> <div class="alert" style="margin-left:600; color:yellow"> <?php echo $error; ?> </div> <?php } ?>


<div style="widht:50px;margin-left:590px;margin-top:100px; color:yellow; border:2px solid rgb(73, 221, 15);margin-right:550px;padding:10px 0 0 10px;">
    <form class="form-signin" method="POST">
        <?php if(isset($fsmsg)){ echo $fsmsg;}?>
        <div style="text-align:center"><h2 style="font-size:1.3em; ">Авторизуйтесь</h2></div><br>
        <input class="form-control" type="text" name="username" placeholder="Username" required><br>
        <input type="password"  name="password" style=" margin-top:10px"; placeholder="password" required>
        <button type="submit" style=" margin-top:20px">Войти</button>
        <button onclick="document.location='/avt/avtoriz.php'">Регистрация</button>
</div>



