<?php
    $name  = "Bendi"
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello <?php echo $name; ?>!</h1>

    <h2>Increasing 'Hello World' titles</h2>
    <?php 
        // bad practice
        for ($i=0; $i < 3; $i++) { 
            echo '<h3>Hello World</h3>';
        }
    ?>
    
    <!--  good practice -->
    <?php for ($i=0; $i < 10; $i++): ?>
        <h3 style='font-size: <?= $i * 4 ?>px'>Hello World</h3>
    <?php endfor; ?>

    <h2>List of my favourite animals</h2>
    <?php
        $list = ['lion', 'turtle', 'peacock', 'seal', 'crocodile'];
        var_dump($list);
    ?>

    <ul>
        <?php foreach ($list as $key => $value): ?>
            <li><?= ($key < 3) ? ($key . " - " . $value)  : "N/A"; ?></li>
        <?php endforeach; ?>
    </ul>
    <h2>Movie types dropdown</h2>
    <?php
        $movies = [
            5 => "comedy",
            6 => "romantic",
            7 => "drama"
        ]
    ?>
    <select name="" id="">
        <?php foreach ($movies as $key => $value): ?>
            <option value=<?= $key ?>><?= $value ?></option>
        <?php endforeach; ?>
    </select>
</body>
</html>