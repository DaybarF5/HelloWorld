<?php

//TODAS ESTAS FUNCIONES DEVOLVERAN TRUE SI SON VALIDAS
//SI NO, DEVOLVERA NULL

function validateEmail($parameter)
{
    if (filter_var($parameter, FILTER_VALIDATE_EMAIL)) {
        return true;
    }
}
//--------------------------------------------------------------------------------------------
function validateDate($parameter)
{
    function validateFormat($date)
    {
        $formato = 'd/m/Y';
        $fechaObjeto = DateTime::createFromFormat($formato, $date);
        // Verifica si la fecha es válida y si coincide con el formato especificado
        return $fechaObjeto && $fechaObjeto->format($formato) === $date;
    }
    if (validateFormat($parameter)) {
        return true;
    }
}
//--------------------------------------------------------------------------------------------
function validateDNI($parameter)
{
    $regex_dni = '/^[0-9]{8}[A-Za-z]$/';
    if (preg_match($regex_dni, $parameter)) {
        return true;
    }
}
//--------------------------------------------------------------------------------------------
function validateJob($parameter)
{
    $puestos = ['Programador', 'RRHH', 'SISTEMAS', 'VENTAS', 'INVERSIONES', 'DIRECTOR'];
    if (in_array($parameter, $puestos)) {
        return true;
    }
}
//--------------------------------------------------------------------------------------------