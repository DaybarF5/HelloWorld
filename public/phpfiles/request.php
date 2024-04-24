<?php

header("Content-Type: application/json");
require_once "../../src/php/mantenimiento_empleados.php";
require_once "../../src/php/csv_actions.php";

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
if (isset($_POST['download']) && $_POST['download'] == '1') {
    $prueba = descargar();
}

//esto deja de funcionar ocasionalmente
// if (isset($_GET['file']) && isset($_POST['send']) && $_POST['send'] == '1'){
//     $prueba = cargar_empleados($_GET['file']);
//     $data1['formData'] = 'js/formData.js';
// } 

// COPIA POR SI DEJA DE FUNCIONAR
if (isset($_GET['file'])){
    $prueba = cargar_empleados($_GET['file']);
    $data1['formData'] = 'js/formData.js';
}