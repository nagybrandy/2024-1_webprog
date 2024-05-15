<?php
    include('data.php');
    function huDate($datestring){
        return str_replace('-', '.', $datestring) . '.';
    }
    function last5hit($data){
        return huDate(array_values(
            array_filter(
                $data, 
                function($d){
                    return $d["winners"]["5"]["count"] > 0;
                }
            )
        )[0]["date"]);
    }

    function displayWin($row){
        if ($row['count'] === 0) return "---";
        return "<b>{$row['count']}</b> <i>({$row['prize']} Ft)</i>";
    }

    function countTotal($data, $type){
        return array_sum(array_map(fn($d) => $d["winners"][$type]["count"], $data));
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 4</title>
    <link rel="stylesheet" href="src/index.css">
    <link rel="stylesheet" href="src/task.css">
</head>

<body>
    <header>
        <h1>4. Statisztika / Statistics</h1>
    </header>
    <div id="content">
        <div id="last">
            Legutóbbi telitalálat / Latest jackpot win: <b><?= last5hit($data) ?></b>
        </div>
        <table>
            <tr>
                <th>
                    Sorsolás dátuma<br>
                    Draw date
                </th>
                <th>
                    Nyerőszámok<br>
                    Winning numbers
                </th>
                <th>
                    5 találat<br>
                    5 correct
                </th>
                <th>
                    4 találat<br>
                    4 correct
                </th>
                <th>
                    3 találat<br>
                    3 correct
                </th>
                <th>
                    2 találat<br>
                    2 correct
                </th>
            </tr>
            <?php foreach($data as $d): ?>
                <tr <?= $d["winners"]["5"]["count"] > 0 ? 'class="jackpot"' : '' ?> >
                    <td><?= huDate($d['date']) ?></td>
                    <td><?= implode(', ', $d['numbers']) ?></td>
                    <?php for($i = 5; $i >= 2; $i--): ?>
                        <td><?= displayWin($d['winners'][$i]) ?></td>
                    <?php endfor; ?>
                </tr>
            <?php endforeach; ?>
            <tr>
                <td colspan="2"></td>
                <?php for($i = 5; $i >= 2; $i--): ?>
                    <td><b><?= countTotal($data, $i) ?></b></td>
                <?php endfor; ?>
            </tr>
        </table>
    </div>
</body>

</html>