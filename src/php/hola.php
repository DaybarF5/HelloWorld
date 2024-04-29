<?php
$regex_dni = '/^[0-9]{8}[A-Za-z]$/';

$dni = "12456728A";
if (!preg_match($regex_dni, $dni)) {
    echo "El DNI no es válido.";
}
echo "</br>";
//--------------------------------------------------------------------------------------------
$email = "ejemplo@factor5.com";

if (filter_var($email , FILTER_VALIDATE_EMAIL)) {
    echo "El correo electrónico es válido.";
} else {
    echo "El correo electrónico no es válido.";
}
echo "</br>";
//--------------------------------------------------------------------------------------------
// function validarFechaNacimiento($parameter) {
//     $formato = 'd/m/Y';
//     $fechaObjeto = DateTime::createFromFormat($formato, $parameter);
//     // Verifica si la fecha es válida y si coincide con el formato especificado
//     return $fechaObjeto && $fechaObjeto->format($formato) === $parameter;
// }

// $fecha = "25/13/2000";
// if (!validarFechaNacimiento($fecha)) {
//     echo "La fecha de nacimiento no es válida.";
// }
?>