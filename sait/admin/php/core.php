<?php
$action = $_POST['action'];

require_once 'function.php';

switch ($action) {
    case 'init':
        init();
        break;
    case 'loadGoods':
        loadGoods();
        break;
    case 'NewGoods':
        NewGoods();
        break;
    case 'selectOneGoods':
        selectOneGoods();
        break;
    case 'addGoods':
        addGoods();
        break;
    case 'showmatch':
        showmatch();
        break;
    case 'showmap':
        showmap();
        break;
    case 'showmatchfull':
        showmatchfull();
        break;
    case 'savestatmaps':
        savestatmaps();
        break;
    case 'showplayers':
        showplayers();
        break; 
    case 'savefamelyusername':
        savefamelyusername();
        break; 
    case 'loadfamelyusername':
        loadfamelyusername();
        break; 
    case 'saveprofilplayer':
        saveprofilplayer();
        break;
    case 'profilplayer':
        profilplayer();
        break;
    case 'checkplayer':
        checkplayer();
        break;
    case 'updateprofilplayer':
        updateprofilplayer();
        break;
    case 'loadplayers':
        loadplayers();
        break;
    case 'newteam':
        newteam();
        break;
    case 'showzayvki':
        showzayvki();
        break;
    case 'deletezayvki':
        deletezayvki();
        break;
    case 'upzayvki':
        upzayvki();
        break;
    case 'upzayvki1':
        upzayvki1();
        break;
}