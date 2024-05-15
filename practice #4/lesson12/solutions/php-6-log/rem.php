<?php
include_once('Storage.php');
$stor = new Storage(new JsonIO('log.json'));
$entry = $stor->findById($_GET['id'] ?? -1);

if ($entry !== null) {
    $stor -> delete($entry['id']);
} 

header('location: index.php');
?>