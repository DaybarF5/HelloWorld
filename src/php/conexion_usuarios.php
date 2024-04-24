<?php

function conectar()
{
    $datos = array();
    try {
        $usuario = $_REQUEST['usuario'];
        $pass = $_REQUEST['pass'];
        $bd = dirname(__FILE__) . '/../database/F5.sqlite';
        $connect = new SQLite3($bd);
        $stmt = $connect->prepare("SELECT * FROM USUARIOS WHERE usuario = ?");
        $stmt->bindValue(1, $usuario, SQLITE3_TEXT);
        $result = $stmt->execute();
        $row = $result->fetchArray(SQLITE3_ASSOC);
        if ($row) {
            if (password_verify($pass, $row['contrasena'])) {
                $datos['usuario'] = $row['usuario'];
                $datos['nombre'] = $row['nombre'];
                $datos['apellido'] = $row['apellido'];
                $datos['status'] = true;
            } else {
                $datos['message'] = 'contraseña erronea';
                $datos['status'] = false;
            }
        } else {
            $datos['message'] = 'usuario erroneo';
            $datos['status'] = false;
        }
    } catch (Exception $e) {
        $datos['message'] = "Error: " . $e->getMessage();
    }
    return $datos;
}

function registrar()
{
    $bd = dirname(__FILE__) . '/../database/F5.sqlite';

    $person['email'] = $_REQUEST['email'];
    $person['usuario'] = $_REQUEST['usuario'];
    $person['contrasena'] = password_hash($_REQUEST['contrasena'], PASSWORD_DEFAULT);
    $person['nombre'] = $_REQUEST['nombre'];
    $person['apellido'] = $_REQUEST['apellido'];
    if (!empty($_REQUEST['email']) && !empty($_REQUEST['usuario']) && !empty($_REQUEST['contrasena']) && !empty($_REQUEST['nombre']) && !empty($_REQUEST['apellido'])) {
        try {
            $connect = new SQLite3($bd);
            $stmt = $connect->prepare("INSERT INTO USUARIOS (usuario, contrasena, nombre, apellido, email) VALUES ( ?, ?, ?, ?, ?)");
            $stmt->bindParam(1, $person['usuario']);
            $stmt->bindParam(2, $person['contrasena']);
            $stmt->bindParam(3, $person['nombre']);
            $stmt->bindParam(4, $person['apellido']);
            $stmt->bindParam(5, $person['email']);
            $stmt->execute();
            $stmt->close();
            $datos['registro'] = $person;
        } catch (Exception $e) {

            $datos['message'] = 'Error: ' . $e->getMessage();
        }
    } else {
        $datos = 'Faltan campos';
    }
    return $datos;
}
