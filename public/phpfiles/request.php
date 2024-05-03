<?php
session_start();
header("Content-Type: application/json");
require_once "../../src/php/mantenimiento_empleados.php";
require_once "../../src/php/csv_actions.php";
require_once "../../src/php/registro_empleados.php";
require_once "../../src/php/conexion_usuarios.php";
$resultado = ['status' => false, 'message' => 'Petición si procesar'];

if (isset($_REQUEST['peticion']) && trim($_REQUEST['peticion']) != "") {
    switch (trim($_REQUEST['peticion'])) {
        case 'actualizar_empleado':

            $empleado['id'] = $_REQUEST['id'];
            $empleado['campo'] = $_REQUEST['campo'];
            $empleado['valor'] = $_REQUEST['valor'];

            $resultado = actualizar_empleados($empleado);
            echo json_encode($resultado);
            break;
    }
}



if (isset($_REQUEST['download']) && $_REQUEST['download'] == '1') {
    $prueba = descargar();
}

if (isset($_POST['anadir'])) {
    $crear = anadir_empleados($_POST);
    echo json_encode($crear);
}


if (isset($_FILES['file'])) {
    $file = cargar_empleados($_FILES['file']);
    echo json_encode($file);
}

if (isset($_POST['login'])) { // si se pulsa el boton de conectar
    $usuario = conectar($_POST); //se ejecuta una funcion que se llama conectar
    if ($usuario['status'] === true) { //si el status es true, se asignan datos de sesion
        $_SESSION['usuario'] = $usuario['usuario'];
        $_SESSION['screen'] = 'DASHBOARD';
    }
    echo json_encode($usuario);
}

if (isset($_POST['registrar'])) {
    $usuario = registrar($_POST);
    echo json_encode($usuario);
}
