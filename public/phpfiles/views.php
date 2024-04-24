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




//-------
if (empty($_SESSION['screen'])) {
    $_SESSION['screen'] = 'LOGIN';
}


if (isset($_POST['logIn']) && $_POST['logIn'] == '1') { // si se pulsa el boton de conectar
    $usuario = conectar(); //se ejecuta una funcion que se llama conectar
    if ($usuario['status'] === true) { //si el status es true, se asignan datos de sesion
        $_SESSION['usuario'] = $usuario['usuario'];
        $_SESSION['nombre'] = $usuario['nombre'];
        $_SESSION['apellido'] = $usuario['apellido'];
        $_SESSION['screen'] = 'ANADIR_EMP';
    }
}

if (isset($_POST['conecta']) && $_POST['conecta'] == '1') { //boton para llevarte al formulario de conectar
    $_SESSION['screen'] = 'LOGIN';
}
if (isset($_POST['register']) && $_POST['register'] == '1') { //boton para llevarte al formulario de registrarte
    $_SESSION['screen'] = 'REGISTRO';
}
if (isset($_POST['add_user']) && $_POST['add_user'] == '1') { //boton que registra el usuario y te lleva al login para iniciar sesion
    $usuario = registrar();
}

if (isset($_POST['disconnect']) && $_POST['disconnect'] == '1') { //boton que te desconecta y te lleva a la pantalla principal
    session_unset();
    $_SESSION['screen'] = 'LOGIN';
    header("Location: " . $_SERVER['PHP_SELF']);
}

if (isset($_POST['Accept']) && $_POST['Accept'] == '1') { //boton que acciona el formulario de añadir empleados.
    anadir_empleados();
}

if (isset($_POST['editEmple']) && $_POST['editEmple'] == '1') { //boton que te lleva a la pantalla de actualizar empleados
    $_SESSION['screen'] = 'ACTUALIZAR';
}


if ($_SESSION['screen'] == 'ACTUALIZAR') {
    //condicional muy importante para no perder los datos cuando refrescas en la pantalla de actualizar
    //aprovechando su sesion, se hace la petición (consigo solo hacerla 1 vez por refresh)
    $data1 = recuperar_empleados();
    $data1['ext_act'] = 'js/ext_actualizar.js';
}

// if ((isset($_POST['csv']) && $_POST['csv'] == '1') || (isset($_SESSION['screen']) && $_SESSION['screen'] != 'OPERAR_CSV')) {
//     $_SESSION['screen'] = 'OPERAR_CSV';
//     $data1['formData'] = 'js/formData.js';
// }

if ((isset($_POST['csv']) && $_POST['csv'] == '1')){
    $_SESSION['screen'] = 'OPERAR_CSV';
    $data1['formData'] = 'js/formData.js';
}

if ($_SESSION['screen'] == 'OPERAR_CSV') {
    $data1['formData'] = 'js/formData.js';
}


if (isset($_POST['End']) && $_POST['End'] == '1') {
    //Boton que se encuentra en la pantalla de ACTUALIZAR, al pulsar en el, te lleva al inicio.
    $_SESSION['screen'] = 'ANADIR_EMP';
}


$output = array('view' => $view, 'screen' => $_SESSION['screen'], 'data' => $data1);
echo json_encode($output);
