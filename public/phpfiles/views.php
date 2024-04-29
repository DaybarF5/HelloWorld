<?php
session_start();
header("Content-Type: application/json");
// $current_folder = dirname(__FILE__);
// echo $current_folder;
require_once "../../src/php/registro_empleados.php";
require_once "../../src/php/mantenimiento_empleados.php";
require_once "../../src/php/conexion_usuarios.php";
require_once "../../src/php/csv_actions.php";
//-------
$data1 = [];
$view = '/jsonfiles/HelloWorld.json';



if (isset($_POST['disconnect']) && $_POST['disconnect'] == '1') { //boton que te desconecta y te lleva a la pantalla principal
    unset($_SESSION['usuario']);
    $_SESSION['screen'] = 'LOGIN';
}

if (empty($_SESSION['usuario']) && $_SESSION['screen'] != 'REGISTRO') {
    $_SESSION['screen'] = 'LOGIN';
}

if (isset($_POST['conecta']) && $_POST['conecta'] == '1') { //boton para llevarte al formulario de login
    $_SESSION['screen'] = 'LOGIN';
}
//--------------------------------------------------------------------------------------------
if (isset($_POST['anadirEmp']) && $_POST['anadirEmp'] == '1') { //boton para llevarte al formulario de añadir empleados
    $_SESSION['screen'] = 'ANADIR_EMP';
}
if (isset($_POST['register']) && $_POST['register'] == '1') { //boton para llevarte al formulario de registrarte
    $_SESSION['screen'] = 'REGISTRO';
}
if (isset($_POST['back']) && $_POST['back'] == '1') { //boton para ir hacia atras
    $_SESSION['screen'] = 'DASHBOARD';
}

if ($_SESSION['screen'] === 'LOGIN') {
    $data1['login'] = 'js/login.js?v'.microtime();
}

if ($_SESSION['screen'] === 'ANADIR_EMP') {
    $data1['anadir_emp'] = 'js/anadir_emp.js?v'.microtime();
}

if ($_SESSION['screen'] === 'DASHBOARD') {
    $data1 = recuperar_empleados();
    $data1['ext_act'] = 'js/ext_actualizar.js?v'.microtime();
}

if ($_SESSION['screen'] === 'REGISTRO') {
    $data1['registrar'] = 'js/registrar.js?v'.microtime();
}



$output = array('view' => $view, 'screen' => $_SESSION['screen'], 'data' => $data1);
echo json_encode($output);
