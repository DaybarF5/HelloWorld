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
    session_destroy();
    header("Location: " . $_SERVER['PHP_SELF']);
}

if ($_SESSION) {
    $screen = 'ANADIR_EMP';
}
else{
    $screen = 'LOGIN';
}


//-----------------------------------------------------------------------------------



if (isset($_POST['conecta']) && $_POST['conecta'] == '1') { //boton para llevarte al formulario de conectar
    $screen = 'LOGIN';
}
//--------------------------------------------------------------------------------------------
if (isset($_POST['End']) && $_POST['End'] == '1') { //boton que te lleva hacia atras
    $screen = 'ANADIR_EMP';
}
if (isset($_POST['editEmple']) && $_POST['editEmple'] == '1') { //boton que te lleva a la pantalla de actualizar empleados
    $screen = 'ACTUALIZAR';
}
if (isset($_POST['register']) && $_POST['register'] == '1') { //boton para llevarte al formulario de registrarte
    $screen = 'REGISTRO';
}







/////////////////////////////////////////////////////////////////////////////////////////////////
if (isset($_POST['add_user']) && $_POST['add_user'] == '1') { //boton que registra el usuario
    $usuario = registrar();
} //esto va para request
/////////////////////////////////////////////////////////////////////////////////////////////////

if ($screen === 'LOGIN') {
    $data1['login'] = 'js/login.js';
}

if ($screen === 'ANADIR_EMP') {
    $data1['anadir_emp'] = 'js/anadir_emp.js';
}

if ($screen === 'ACTUALIZAR') {
    $data1 = recuperar_empleados();
    $data1['ext_act'] = 'js/ext_actualizar.js';
}
if ($screen === 'REGISTRO') {
    //LLAMAR AL JS QUE REGISTRE
}



$output = array('view' => $view, 'screen' => $screen, 'data' => $data1);
echo json_encode($output);
