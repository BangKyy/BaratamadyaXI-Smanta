<?php
require "../php-utils/login.php";

header('Content-Type: application/json; charset=utf-8');
$REQUEST = json_decode(file_get_contents('php://input'), true);
$reqMethod = $_SERVER["REQUEST_METHOD"];

function getRequest($key, $request) {
    $isKeyExists = key_exists($key, $request);
    $value = $isKeyExists ? $request[$key] : "";
    $value = preg_replace("/([\<\>\/\-])/", "", $value);
    return $value;
}

switch ($reqMethod) {
    case "POST": {
        $output = [
            "error" => false,
            "errorMessage" => "",
        ];
        $username = getRequest("username", $REQUEST);
        $password = getRequest("password", $REQUEST);
        $user = getUser($username, $password);
        if (!$user) {
            $output["error"] = true;
            $output["errorMessage"] = "Data tidak valid";
        }
        echo json_encode($output);
        break;
    }
    case "PATCH": {
        $username = getRequest("username", $REQUEST);
        $output = [
            "error" => false,
            "errorMessages" => "",
        ];
        $user = getUsername($username);
        if (!$user) {
            $output["error"] = true;
            $output["errorMessages"] = "Username tidak valid";
        }
        echo json_encode($output);
        break;
    }
    default: {
        $errorObj = [
            "error" => true,
            "errorMessage" => "Telah terjadi kesalahan",
        ];
        echo json_encode($errorObj);
    }
}
?>