<?php
require __DIR__ . '/connection.php';
$login = getUserLogin();
?>
<html>
<head>
    <title>Главная страница</title>
</head>
<body>
<?php if ($login === null): ?>
<a href="avtoriz.php">Авторизуйтесь</a>
<?php else: ?>
Добро пожаловать, <?= $login ?>
<br>
<?= $smsg ?>
<a href="/vxod.php">Выйти</a>
<?php endif; ?>
</body>
</html>