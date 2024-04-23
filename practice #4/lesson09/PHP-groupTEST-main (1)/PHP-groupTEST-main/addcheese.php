<?php
$errors = [];
$data = [];
$input = $_GET;

$is_valid = validate($data, $errors, $input);
function validate(&$data, &$errors, $input)
{
    // CREATE VALIDATION LOGIC HERE!
    //  Provide a name with at least 4 characters without spaces!
    //  Provide the type!
    //  Provide the age of the cheese!

    if (!isset($input['name']) || trim($input['name']) === "") {
        $errors[] = "Enter the name!";
    } else if (strlen($input['name']) < 4) {
        $errors[] = "Provide a name with at least 4 characters without spaces!";
    } else {
        $data['name'] = $input['name'];
    }

    if (!isset($input['type']) || trim($input['type']) === "") {
        $errors[] = "Provide the type!";
    } else if (!preg_match('/^[a-zA-Z\s]/', $input['type'])) {
        $errors[] = "Enter a valid type!";
    } else {
        $data['type'] = $input['type'];
    }

    if (!isset($input['age_m']) || trim($input['age_m']) === "") {
        $errors[] = "Enter the age of the cheese!";
    } else if (!filter_var($input['age_m'], FILTER_VALIDATE_INT)) {
        $errors[] = "Enter a valid integer for age!";
    } else {
        $data['age_m'] = $input['age_m'];
    }
    $data['origin'] = $input['origin'];
    return count($errors) === 0;
}

// Add to the JSON if valid!
if($is_valid) {
    $data_str = file_get_contents('cheese_stock.json');
    $original_array = json_decode($data_str, true);

    $data['origin'] = $input['origin'];
    $original_array []= $data;

    $new_json = json_encode($original_array, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    file_put_contents('cheese_stock.json', $new_json);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Cheese Arrived!</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>New Cheese Arrived!</h1>

    <form action="addcheese.php" method="get" novalidate> 
        <h4>Cheese Name</h4>
        <input type="text" name="name" value=<?= $data['name'] ?? '' ?> >
        
        <h4>Place of Origin</h4>
        <select name="origin">
            <option value="gr" <?= isset($data['origin']) && $data['origin'] == 'gr' ? 'selected': '' ?> >Greece</option>
            <option value="fr" <?= isset($data['origin']) && $data['origin'] == 'fr' ? 'selected': '' ?>>France</option>
            <option value="it" <?= isset($data['origin']) && $data['origin'] == 'it' ? 'selected': '' ?>>Italy</option>
            <option value="ger" <?= isset($data['origin']) && $data['origin'] == 'ger' ? 'selected': '' ?>>Germany</option>
        </select>
        
        <h4>Type</h4>
        <input type="text" name="type" value=<?= $data['type'] ?? '' ?>>
        
        <h4>Age (in months)</h4>
        <input type="number" name="age_m" value=<?= $data['age_m'] ?? ''?>>
        
        <input type="submit" value="Submit">
    </form>
    <div id="results">
        <!-- Display this if valid -->
        <?php if (count($errors) === 0): ?>
            <h2>Successful Addition! 😍</h2>
            <a href='index.php'>Back to homepage</a>
        <?php else: ?>
            <!-- Display this if not valid -->
            <h2>Failed Addition! 😢😭</h2>
            <ul id="errors">
                <?php foreach ($errors as $item): ?>
                        <li><?= $item ?></li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>
    </div>

    <ul id="help">
            <li><a href="addcheese.php?name=&origin=gr&type=&age_m=">❌cheesename ❌cheesetype ❌cheeseage</a></li>
            <li><a href="addcheese.php?name=Feta&origin=gr&type=&age_m=">✅cheesename ❌cheesetype ❌cheeseage</a></li>
            <li><a href="addcheese.php?name=Feta&origin=gr&type=white&age_m=">✅cheesename ✅cheesetype ❌cheeseage</a></li>
            <li><a href="addcheese.php?name=Feta&origin=gr&type=white&age_m=3">✅cheesename ✅cheesetype ✅cheeseage</a></li>
    </ul>
</body>
</html>
