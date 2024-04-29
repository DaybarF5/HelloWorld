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
    if (!empty($person['Nom']) && !empty($person['P_Ap']) && !empty($person['S_Ap']) && !empty($person['FdN']) && !empty($person['DNI']) && !empty($person['Puesto'])) {
        try {

            if (!is_string($person['Nom'])) {
                $data1['message'] = "Nombre no valido";
                $data1['status'] = false;
                return $data1;
                
            }
            if (!is_string($person['P_Ap'])) {
                $data1['message'] = "Primer Apellido no valido";
                $data1['status'] = false;
                return $data1;
            }
            if (!is_string($person['S_Ap'])) {
                $data1['message'] = "Segundo Apellido no valido";
                $data1['status'] = false;
                return $data1;
            }

            if (is_string($person['FdN'])) {
                function validarFechaNacimiento($parameter)
                {
                    $formato = 'd/m/Y';
                    $fechaObjeto = DateTime::createFromFormat($formato, $parameter);
                    return $fechaObjeto && $fechaObjeto->format($formato) === $parameter;
                }

                if (!validarFechaNacimiento($person['FdN'])) {
                    $data1['message'] = "La fecha de nacimiento no es valida.";
                    $data1['status'] = false;
                    return $data1;
                }
            }

            if (is_string($person['DNI'])) {
                $regex_dni = '/^[0-9]{8}[A-Za-z]$/';
                if (!preg_match($regex_dni, $person['DNI'])) {
                    $data1['message'] = "El DNI no es válido.";
                    $data1['status'] = false;
                    return $data1;
                }
            }
            if (is_string($person['Puesto'])) {
                $puestos = ['Programador','RRHH','SISTEMAS','VENTAS','INVERSIONES','DIRECTOR'];
                if (!in_array($person['Puesto'],$puestos)){
                    $data1['message'] = "El Puesto no es válido.";
                    $data1['status'] = false;
                    return $data1;
                }
            }

            $connect = new SQLite3($bd);
            $duplicate = $connect->prepare("SELECT * FROM EMPLEADOS WHERE DNI = ?");
            $duplicate->bindValue(1, $person['DNI'], SQLITE3_TEXT);
            $result = $duplicate->execute();
            if ($result->fetchArray(SQLITE3_ASSOC)) {
                $data1['message'] = "Persona ya existente, consulte el DNI";
            } else {
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
                $data1['message'] = "El empleado ha sido creado correctamente";
            }
        } catch (Exception $e) {

            $data1['message'] = "Error: " . $e->getMessage();
        }
    } else {
        $data1['message'] = 'Faltan campos';
    }
    return $data1;
}
