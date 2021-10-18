<?php

try {
    $_POST = json_decode(
        file_get_contents('php://input'),
        true,
        2,
        JSON_THROW_ON_ERROR
    );
} catch (Exception $e) {
    header($_SERVER["SERVER_PROTOCOL"] . "400 Bad Request");
    exit;
}

require("class/DbConnection.php");

$db = DbConnection::getConnection();



$stmt = $db->prepare(
    'INSERT INTO books (title, author, year_Published, publisher, page_count, msrp)
    VALUES (?, ?, ?, ?, ?, ?)'
);

$stmt->execute([
        $_POST['title'],
        $_POST['author'],
        $_POST['year_Published'],
        $_POST['publisher'],
        $_POST['page_count'],
        $_POST['msrp']
    ]);

    if (!$stmt -> commit()) {
        echo "Commit transaction failed";
        exit();
      }

    header('HTTP/1.1 303 See Other');
    header('Location: ../offer/?student=' . $_POST['studentId']);