<?php



function conectar($parameter)
{
    $datos = array();
    try {
        $usuario = $parameter['usuario'];
        $pass = $parameter['pass'];
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
            $datos['message'] = 'usuario no existente';
            $datos['status'] = false;
        }
    } catch (Exception $e) {
        $datos['message'] = "Error: " . $e->getMessage();
    }
    return $datos;
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

            if (!is_string($person['email']) || !filter_var($person['email'], FILTER_VALIDATE_EMAIL)) {
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
    } else {
        $resultado['message'] = 'Faltan campos';
    }
    return $resultado;
}
