<?php
$action = $_POST['action'];

require_once 'function.php';

switch ($action) {
    case 'loadallgame':
        loadallgame();
        break;
    case 'showallgame':
        showallgame();
        break;
    case 'shownameteam':
        shownameteam();
        break;
}