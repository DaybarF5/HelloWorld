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
        }//aqui entra
        //------------------------ DE AQUI
        if ($campo == "DNI") {
            $regex_dni = '/^[0-9]{8}[A-Za-z]$/';
            print_r($empleado['valor']);
            if (!preg_match($regex_dni, $empleado['valor'])) {
                $resultado['message'] = "El DNI no es válido.";
                $resultado['status'] = false;
                return $resultado;
            }
        }
        if ($campo == "FdN") {
            function validarFechaNacimiento($parameter)
            {
                $formato = 'd/m/Y';
                $fechaObjeto = DateTime::createFromFormat($formato, $parameter);
                return $fechaObjeto && $fechaObjeto->format($formato) === $parameter;
            }

            if (!validarFechaNacimiento($empleado['valor'])) {
                $resultado['message'] = "La fecha de nacimiento no es valida.";
                $resultado['status'] = false;
                return $resultado;
            }
        }
        if ($campo == "Puesto") {
            $puestos = ['Programador', 'RRHH', 'SISTEMAS', 'VENTAS', 'INVERSIONES', 'DIRECTOR'];
            if (!in_array($empleado['valor'], $puestos)) {
                $resultado['message'] = "El Puesto no es válido.";
                $resultado['status'] = false;
                return $resultado;
            }
        }
        //------------------------ A AQUI NO ENTRA
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
