<?php

function anadir_empleados()
{
    $bd = 'C:/wamp64/www/New_Project/src/database/F5.sqlite';

    $person['Nom'] = $_REQUEST['Field0001'];
    $person['P_Ap'] = $_REQUEST['Field0002'];
    $person['S_Ap'] = $_REQUEST['Field0003'];
    $person['FdN'] = $_REQUEST['Field0004'];
    $person['DNI'] = $_REQUEST['Field0005'];
    $person['Puesto'] = $_REQUEST['Field0006'];

    try {
        $connect = new SQLite3($bd);
        // $result = $connect->query("SELECT 1");
        $stmt = $connect->prepare("INSERT INTO EMPLEADOS (Nombre, Primer_Apellido, Segundo_Apellido, Fecha_de_nacimiento, DNI, Puesto) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bindParam(1, $person['Nom']);
        $stmt->bindParam(2, $person['P_Ap']);
        $stmt->bindParam(3, $person['S_Ap']);
        $stmt->bindParam(4, $person['FdN']);
        $stmt->bindParam(5, $person['DNI']);
        $stmt->bindParam(6, $person['Puesto']);
        $stmt->execute();
        $stmt->close();
        $data1['prueba'] = $person;
        return $data1;
    } catch (Exception $e) {

        $data1['message'] = "Error: " . $e->getMessage();
    }
}
