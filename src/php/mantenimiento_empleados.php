<?php
require_once "customFunctions.php";
function recuperar_empleados()
{
    $grid = [];
    $data1 = [];
    $bd = dirname(__FILE__) . '/../database/F5.sqlite';
    $connect = new SQLite3($bd);
    try {
        $stmt = $connect->prepare("SELECT * FROM EMPLEADOS");
        $result = $stmt->execute();

        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {

            array_push($grid, array(
                'ID' => $row['ID'],
                'Nom' => $row['Nombre'],
                'P_Ap' => $row['Primer_Apellido'],
                'S_Ap' => $row['Segundo_Apellido'],
                'FdN' => $row['Fecha_de_nacimiento'],
                'DNI' => $row['DNI'],
                'Puesto' => $row['Puesto']
            ));
        }
        $data1['prueba'] = $grid;

        $connect->close();
        //print_r($data1);
        return $data1;
    } catch (Exception $e) {

        $data1['message'] = 'Error: ' . $e->getMessage();
    }
}

function actualizar_empleados($empleado)
{
    $resultado = ['status' => false, 'message' => 'Inicio actualizar empleado.'];

    $bd = dirname(__FILE__) . '/../database/F5.sqlite';

    $connect = new SQLite3($bd);

    switch ($empleado['campo']) {
        case 'Nom':
            $campo = "Nombre";
            break;
        case 'P_Ap':
            $campo = "Primer_Apellido";
            break;
        case 'S_Ap':
            $campo = "Segundo_Apellido";
            break;
        case 'FdN':
            $campo = "Fecha_de_nacimiento";
            break;
        case 'DNI':
            $campo = "DNI";
            break;
        case 'Puesto':
            $campo = "Puesto";
            break;
        default:
            $campo = null;
            break;
    }
    try {
        if (!is_string($empleado['valor'])) {
            $resultado['status'] = false;
            $resultado['message'] = "Modificación abortada, datos no deseados.";
            return $resultado;
        }

        if ($campo == "DNI") {
            $filtro = validateDNI_NIF_NIE($empleado['valor']);
            if ($filtro != true) {
                $resultado['message'] = "DNI no existente.";
                $resultado['status'] = false;
                return $resultado;
            }
        }
        if ($campo == "Fecha_de_nacimiento") {
            $filtro = validateDate($empleado['valor']);
            if ($filtro != true) {
                $resultado['message'] = "Fecha no existente.";
                $resultado['status'] = false;
                return $resultado;
            }
        }
        if ($campo == "Puesto") {
            $filtro = validateJob($empleado['valor']);
            if ($filtro != true) {
                $resultado['message'] = "Puesto no existente.";
                $resultado['status'] = false;
                return $resultado;
            }
        }
        $query = "UPDATE EMPLEADOS SET {$campo} = :dato WHERE ID = :ID";
        $stmt = $connect->prepare($query);
        $stmt->bindValue(':dato', $empleado['valor'], SQLITE3_TEXT);
        $stmt->bindValue(':ID', $empleado['id'], SQLITE3_INTEGER);
        $result = $stmt->execute();

        if ($result) {
            $resultado['status'] = true;
            $resultado['message'] = "Modificación realizada correctamente.";
        } else {
            $resultado['message'] =  "No se pudo realizar la modificación.";
        }

        // Cerrar la conexión a la base de datos
        $connect->close();
    } catch (Exception $e) {
        $resultado['status'] = false;
        $resultado['message'] = "Error: " . $e->getMessage();
    }

    return $resultado;
}
