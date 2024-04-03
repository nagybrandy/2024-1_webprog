<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>TASK 1</h1>
    <?php $name = 'Bendi' ?>
    <h1>Hello <?php echo $name ?>!</h1>
    <?php echo date("Y-m-d H:i:s") ?>


    <h1>TASK2</h1>
    <?php
        $array = ['apple', 'pear', 'banana', 'cherry'];
    ?>


    <h2>BAD PRACTICE: echoing tags</h2>
    <ul>
        <?php
            list1();
            function list1(){
                global $array;
                for ($i=0; $i < count($array); $i++) { 
                    echo "<li>" . $array[$i] . "</li>";
                }
            }
        ?>
    </ul>

    <h2>Good practice</h2>

    <?php /* <?= it's the same as <?php echo */  ?>
    <ul>
        <?php foreach($array as $fruit): ?>
            <li><?= $fruit ?></li>
        <?php endforeach; ?>
    </ul>
    
    <h2>Task3 - Increasing sized Hello World Texts</h2>

   <?php 
    $fontSize = 12;
    $repeat = 10;
    
    for ($i = 1; $i <= $repeat; $i++): ?>
        <p style='font-size:<?= $fontSize ?>px;'>Hello World</p>   
        <?php $fontSize += 2; ?>
    <?php endfor; ?>

    <h2>TASK 4: objects</h2>
    <?php 
        $movieTypes = [
            5 => "Action",
            6 => "Comedy",
            7 => "Drama"
        ];
        /* we can't do that: echo $array; */
        var_dump($movieTypes);
        var_dump($array);
    ?>

    <table>
        <?php foreach($movieTypes as $key => $value): ?>
            <tr>
                <th><?= $key ?></th>
                <td><?= $value ?></td>
            </tr>
        <?php endforeach; ?>
    </table>

</body>
</html>