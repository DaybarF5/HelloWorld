<?php
function descargar()
{
    $grid = [];
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
        $empleados = $grid;
        $connect->close();

        $csv = dirname(__FILE__) . '/../../public/temp/empleados.csv';
        $archivo_csv = fopen($csv, 'w');

        $cabecera = array('ID', 'Nombre', 'Primer_Apellido', 'Segundo_apellido', 'Fecha_de_nacimiento', 'DNI', 'Puesto');



        fputcsv($archivo_csv, $cabecera);

        foreach ($empleados as $empleado) {

            $row = array(
                $empleado['ID'],
                $empleado['Nom'],
                $empleado['P_Ap'],
                $empleado['S_Ap'],
                $empleado['FdN'],
                $empleado['DNI'],
                $empleado['Puesto']
            );

            fputcsv($archivo_csv, $row);
        }


        fclose($archivo_csv);
    } catch (Exception $e) {

        $data1['message'] = 'Error: ' . $e->getMessage();
    }
    return;
}

function cargar_empleados($parameter)
{
    $csv = $parameter['tmp_name'];

    $lineas_csv = file($csv, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    // recojo nombres de las columnas
    $cabecera = str_getcsv(array_shift($lineas_csv));

    $empleados = array();

    // recoger la informacion del archivo, y acomodarlo
    foreach ($lineas_csv as $linea) {
        $csv = str_getcsv($linea);
        $fila = array();
        foreach ($csv as $index => $valor) {
            $nombre_columna = $cabecera[$index];
            $fila[$nombre_columna] = $valor; // Almacenar el valor en el array temporal
        }
        $empleados[] = $fila;
    }

    $bd = dirname(__FILE__) . '/../database/F5.sqlite';
    try {
        $connect = new SQLite3($bd);
        $stmt = $connect->prepare("INSERT INTO EMPLEADOS (Nombre, Primer_Apellido, Segundo_Apellido, Fecha_de_nacimiento, DNI, Puesto) VALUES (?, ?, ?, ?, ?, ?)");

        for ($i = 0; $i < count($empleados); $i++) {
            $stmt->bindParam(1, $empleados[$i]['Nombre']);
            $stmt->bindParam(2, $empleados[$i]['Primer_Apellido']);
            $stmt->bindParam(3, $empleados[$i]['Segundo_Apellido']);
            $stmt->bindParam(4, $empleados[$i]['Fecha_de_nacimiento']);
            $stmt->bindParam(5, $empleados[$i]['DNI']);
            $stmt->bindParam(6, $empleados[$i]['Puesto']);
            $stmt->execute();
        }

        $stmt->close();

        $resultado['status'] = true;
        $resultado['message'] = "Insercion realizada correctamente, Espere...";
    } catch (Exception $e) {
        $resultado['message'] = "Error: " . $e->getMessage();
    }
    return $resultado;
}




// function lectura_csv()
// {
//     $csv = dirname(__FILE__) . '/../database/productos.csv';
//     try {
//         // leer línea por línea
//         $lineas_csv = file($csv, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

//         // recojo nombres de las columnas
//         $cabecera = str_getcsv(array_shift($lineas_csv));


//         $pedido = array();

//         // recoger la informacion del archivo, y limpiarlo
//         foreach ($lineas_csv as $linea) {
//             $csv = str_getcsv($linea);
//             $fila = array();
//             foreach ($csv as $index => $valor) {
//                 $nombre_columna = $cabecera[$index];
//                 $fila[$nombre_columna] = $valor; // Almacenar el valor en el array temporal
//             }
//             $pedido[] = $fila;
//         }
//         if ($pedido) {
//             $data1['list_ped'] = $pedido;
//             $data1['message'] = 'datos recogidos correctamente';
//         }
//     } catch (Exception $e) {
//         $data1['message'] = "Error: " . $e->getMessage();
//     }
//     return $data1;
// }
// function escritura_csv()
// {
//     $csv = dirname(__FILE__) . '/../database/productos_prueba.csv';

//     $csv_content = array(
//         array('producto', 'cantidad', 'precio_uni'));

//     try {
//         $fp = fopen($csv, 'w');
//         foreach ($csv_content as $campos) {
//             fputcsv($fp, $campos);
//         }
//     } catch (Exception $e) {
//         $data1['message'] = "Error: " . $e->getMessage();
//     }
// }
