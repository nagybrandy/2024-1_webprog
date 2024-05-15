<?php 
    include_once('Storage.php');
    $stor = new Storage(new JsonIO('log.json'));
    $entries = $stor->findAll();

    usort($entries, function($a, $b){
        return strcmp($a['date'], $b['date']);
    });
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 6</title>
    <link rel="stylesheet" href="src/index.css">
    <link rel="stylesheet" href="src/task.css">
</head>

<body>
    <header>
        <h1>6. Napló / Log</h1>
    </header>

    <div id="content">
        <h2>Új bejegyzés / New entry</h2>
        <form action="add.php" method="post" novalidate>
            <div class="input">
                <label for="date">Dátum / Date</label>
                <input type="date" name="date" id="date" placeholder="Teljesítmény neve / Achievement name">
            </div>
            <div class="input">
                <label for="change">Egyenlegváltozás / Balance change</label>
                <input type="number" name="change" id="change" placeholder="Egyenlegváltozás / Balance change">
            </div>
            <div class="input">
                <button type="submit">➕ Save / Mentés</button>
            </div>
        </form>

        <h2>Bejegyzések / Entries</h2>
        <ul>
            <?php foreach($entries as $entry): ?>
                <li><?= $entry["date"] ?>: <?= $entry["change"]?> Ft <a href="rem.php?id=<?= $entry['id'] ?>">Törlés / Delete</a></li>
            <?php endforeach; ?>
        </ul>
    </div>
</body>

</html>