<?php

function anadir_empleados($parameter)
{
    $bd = 'C:/wamp64/www/New_Project/src/database/F5.sqlite';
    $person['Nom'] = $parameter['name'];
    $person['P_Ap'] = $parameter['last'];
    $person['S_Ap'] = $parameter['last2'];
    $person['FdN'] = $parameter['date'];
    $person['DNI'] = $parameter['dni'];
    $person['Puesto'] = $parameter['position'];

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
        $data1['status'] = true;
        $data1['message'] = "El empleado " . $person['Nom'] . " " . $person['P_Ap'] . " " . $person['S_Ap'] . " con puesto: " . $person['Puesto'] . " ha sido creado correctamente";
        return $data1;
    } catch (Exception $e) {

        $data1['message'] = "Error: " . $e->getMessage();
    }
}
