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

function validateFormat($date)
{
    $formato = 'd/m/Y';
    $fechaObjeto = DateTime::createFromFormat($formato, $date);
    // Verifica si la fecha es válida y si coincide con el formato especificado
    return $fechaObjeto && $fechaObjeto->format($formato) === $date;
}
//esta es la que vale
function validateDate($parameter)
{

    if (validateFormat($parameter)) {
        return true;
    }
}
//--------------------------------------------------------------------------------------------
function validateDNI_NIF_NIE($parameter)
{
    $regex_dni_nif = '/^[0-9]{8}[A-Za-z]$/';
    $regex_nie = '/^[XYZ][0-9]{7}[A-Za-z]$/';

    if (preg_match($regex_dni_nif, $parameter)) {
        return true;
    }
    
    elseif (preg_match($regex_nie, $parameter)) {
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
function validateNIE($parameter)
{
    $regex_nie = '/^[XYZ][0-9]{7}[A-Za-z]$/';
    if (preg_match($regex_nie, $parameter)) {
        return true;
    }
}
