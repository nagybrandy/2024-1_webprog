<?php
    $data_str = file_get_contents('cheese_stock.json');
    $data = json_decode($data_str, true);
/*     var_dump($data); */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cheeseology Department Stock</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Cheeseology Department Stock</h1>
    <table> <!-- Cheese table -->
        <tr>
            <th>Origin</th>
            <th>Name</th>
            <th>Type</th>
            <th>Age (months)</th>
        </tr>
        <!-- Sample data -->
        <tr>
            <td><img src="img/gr.png"</td>
            <td>Tasty cheese</td>
            <td>moldy</td>
            <td>6 months</td>
        </tr>
        <?php foreach ($data as $cheese): ?>
            <tr class="<?= $cheese['age_m'] > 24 ? 'old' : '' ?>">
                <td><img src="img/<?= $cheese['origin']; ?>.png"></td>
                <td><?= $cheese['name'] ?></td>
                <td><?= $cheese['type'] ?></td>
                <td><?= $cheese['age_m'] ?> months</td>
            </tr>
        <?php endforeach; ?>
    </table>

    <a href='addcheese.php'>New cheese has arrived!</a>
</body>
</html>
