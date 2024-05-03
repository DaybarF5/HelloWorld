<?php
require_once "customFunctions.php";
function conectar($parameter)
{
   
    try {
        $usuario = $parameter['usuario'];
        $pass = $parameter['pass'];

        if (!is_string($usuario)) {
            $resultado['message'] = "Usuario no valido";
            $resultado['status'] = false;
            return $resultado;
        }
        if (!is_string($pass)) {
            $resultado['message'] = "Contraseña no valida";
            $resultado['status'] = false;
            return $resultado;
        }

        $bd = dirname(__FILE__) . '/../database/F5.sqlite';
        $connect = new SQLite3($bd);
        $stmt = $connect->prepare("SELECT * FROM USUARIOS WHERE usuario = ?");
        $stmt->bindValue(1, $usuario, SQLITE3_TEXT);
        $result = $stmt->execute();
        $row = $result->fetchArray(SQLITE3_ASSOC);
        if ($row) {
            if (password_verify($pass, $row['contrasena'])) {
                $resultado['usuario'] = $row['usuario'];
                $resultado['nombre'] = $row['nombre'];
                $resultado['apellido'] = $row['apellido'];
                $resultado['status'] = true;
            } else {
                $resultado['message'] = 'contraseña erronea';
                $resultado['status'] = false;
            }
        } else {
            $resultado['message'] = 'usuario no existente';
            $resultado['status'] = false;
        }
    } catch (Exception $e) {
        $resultado['message'] = "Error: " . $e->getMessage();
    }
    return $resultado;
}

function registrar($parameter)
{
    $bd = dirname(__FILE__) . '/../database/F5.sqlite';

    $person['email'] = $parameter['email'];
    $person['usuario'] = $parameter['usuario'];
    $person['contrasena'] = password_hash($parameter['contrasena'], PASSWORD_DEFAULT);
    $person['nombre'] = $parameter['nombre'];
    $person['apellido'] = $parameter['apellido'];
    if (!empty($person['email']) && !empty($person['usuario']) && !empty($person['contrasena']) && !empty($person['nombre']) && !empty($person['apellido'])) {
        try {

            if (!is_string($person['email'])) {
                $resultado['message'] = "Email no valido";
                $resultado['status'] = false;
                return $resultado;
            }
            if (!is_string($person['usuario'])) {
                $resultado['message'] = "Usuario no valido";
                $resultado['status'] = false;
                return $resultado;
            }
            if (!is_string($person['contrasena'])) {
                $resultado['message'] = "Contraseña no valida";
                $resultado['status'] = false;
                return $resultado;
            }
            if (!is_string($person['nombre'])) {
                $resultado['message'] = "Nombre no valido";
                $resultado['status'] = false;
                return $resultado;
            }
            if (!is_string($person['apellido'])) {
                $resultado['message'] = "Apellido no valido";
                $resultado['status'] = false;
                return $resultado;
            }

            $filtroEmail = validateEmail($person['email']);
            if ($filtroEmail != true) {
                $resultado['message'] = "formato del email no valido";
                $resultado['status'] = false;
                return $resultado;
            }

            $connect = new SQLite3($bd);

            $duplicate = $connect->prepare("SELECT * FROM USUARIOS WHERE usuario = ? OR email = ?");
            $duplicate->bindValue(1, $person['usuario'], SQLITE3_TEXT);
            $duplicate->bindValue(2, $person['email'], SQLITE3_TEXT);
            $result = $duplicate->execute();
            if ($result->fetchArray(SQLITE3_ASSOC)) {
                $resultado['message'] = "Email o usuario ya registrados";
            } else {
                $stmt = $connect->prepare("INSERT INTO USUARIOS (usuario, contrasena, nombre, apellido, email) VALUES ( ?, ?, ?, ?, ?)");
                $stmt->bindParam(1, $person['usuario']);
                $stmt->bindParam(2, $person['contrasena']);
                $stmt->bindParam(3, $person['nombre']);
                $stmt->bindParam(4, $person['apellido']);
                $stmt->bindParam(5, $person['email']);
                $stmt->execute();
                $stmt->close();
                $resultado['status'] = true;
                $resultado['message'] = "Bienvenido , registro realizado.";
            }
        } catch (Exception $e) {

            $resultado['message'] = 'Error: ' . $e->getMessage();
        }
    } 
    return $resultado;
}
