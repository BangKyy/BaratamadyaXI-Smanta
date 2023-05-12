<?php
require "../database/connection.php";

function getUser($username, $password) {
    global $connection;
    $sql = "SELECT username, password FROM users WHERE username='$username' AND password='$password'";
    $query = $connection->query($sql);
    $result = $query->fetch_all(MYSQLI_ASSOC);
    return $result;
}

function getUsername($username) {
    global $connection;
    $sql = "SELECT username FROM users WHERE username='$username'";
    $query = $connection->query($sql);
    $result = $query->fetch_all(MYSQLI_ASSOC);
    return $result;
}
?>