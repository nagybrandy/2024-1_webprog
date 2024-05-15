<?php
include_once('Storage.php');
$stor = new Storage(new JsonIO('log.json'));
$entry = $stor->findOne(['date' => $_POST['date']]);

if ($entry === null) {
    $stor->add([
        "date" => $_POST['date'],
        "change" => intval($_POST['change'])
    ]);
} else {
    $stor->update(
        $entry['id'],
        [
            "id" => $entry['id'],
            "date" => $_POST['date'],
            "change" => $entry['change'] + intval($_POST['change'])
        ]
    );
}

header('location: index.php');
?>