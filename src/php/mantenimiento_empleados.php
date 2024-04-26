<?php

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
        return $data1;
    } catch (Exception $e) {
        
        $data1['message'] ='Error: '. $e->getMessage();
    }
}

function actualizar_empleados($empleado)
{

    $resultado = ['status' => false, 'message' => 'Inicio actualizar empleado.'];
    
    $bd = dirname(__FILE__).'/../database/F5.sqlite';

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
        $query = "UPDATE EMPLEADOS SET {$campo} = :dato WHERE ID = :ID";
        $stmt = $connect->prepare($query);
        $stmt->bindValue(':dato', $empleado['valor'], SQLITE3_TEXT);
        $stmt->bindValue(':ID', $empleado['id'], SQLITE3_INTEGER);
        $result = $stmt->execute();

        if ($result) {
            $resultado['status'] = true;
            $resultado['message'] = "Insercion realizada correctamente.";
        } else {
            $resultado['message'] =  "No se pudo realizar la inserción.";
        }

        // Cerrar la conexión a la base de datos
        $connect->close();
    } catch (Exception $e) {

        $resultado['message'] = "Error: " . $e->getMessage();
    }

    return $resultado;
}
