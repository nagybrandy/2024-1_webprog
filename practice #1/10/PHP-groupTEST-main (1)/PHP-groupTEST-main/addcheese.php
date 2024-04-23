<?php 
 $errors = [];
 $data = [];
 $input = $_GET;
 $is_valid = validate($data, $errors, $input);
 function validate(&$data, &$errors, $input) {
     // CREATE VALIDATION LOGIC HERE!
     if(!isset($input['name']) || strlen(trim($input['name'])) === 0) {
        $errors []= 'Enter a name!';
     } 
     else if(strlen(trim($input['name'])) < 4) {
        $errors []= 'Enter an at least 4 character long name!';
     } else {
        $data['name'] = $input['name'];
     }

     if(!isset($input['type']) || strlen(trim($input['type'])) === 0) {
        $errors []= 'Enter a type!';
     } 
     else if(!preg_match('/^[a-zA-Z\s]/', $input['type'])) {
        $errors []= 'Enter a valid type!';
     } else {
        $data['type'] = $input['type'];
     }

     if(!isset($input['age_m']) || strlen(trim($input['age_m'])) === 0) {
        $errors []= 'Enter an age!';
     } 
     else if(!filter_var($input['age_m'], FILTER_VALIDATE_INT)) {
        $errors []= 'Enter a valid integer as age!';
     } else {
        $data['age_m'] = $input['age_m'];
     }
     $data['origin'] = isset($input['origin']) ? $input['origin'] : '';
     return count($errors) === 0;
 }

  // Add to the JSON if valid!

  if(count($errors) === 0){
    // read out all the data from json
    $data_str = file_get_contents('cheese_stock.json');
    $old_data = json_decode($data_str, true);

    // add the new array to the original one from the json file
    $old_data []= $data;

    // put the new big array with the new data back to the json file
    $new_json = json_encode($old_data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
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
        <input type="text" name="name" value=<?= $data['name'] ?? ''?>>
        
        <h4>Place of Origin</h4>
        <select name="origin">
            <option value="gr" <?= isset($input['origin']) && $input['origin'] == 'gr' ? 'selected' : '' ?>>Greece</option>
            <option value="fr" <?= isset($input['origin']) && $input['origin'] == 'fr' ? 'selected' : '' ?>>France</option>
            <option value="it" <?= isset($input['origin']) && $input['origin'] == 'it' ? 'selected' : '' ?>>Italy</option>
            <option value="ger" <?= isset($input['origin']) && $input['origin'] == 'ger' ? 'selected' : '' ?>>Germany</option>
        </select>
        
        <h4>Type</h4>
        <input type="text" name="type" value=<?= $data['type'] ?? ''?>>
        
        <h4>Age (in months)</h4>
        <input type="number" name="age_m" value=<?= $data['age_m'] ?? ''?>>
        
        <input type="submit" value="Submit">
    </form>
    <div id="results">
    <?php if(count($errors) === 0): ?>
        <!-- Display this if valid -->
        <h2>Successful Addition! 😍</h2>
        <a href='index.php'>Back to homepage</a>
    <?php endif;if(count($_GET) !== 0 && count($errors) > 0): ?>
        <!-- Display this if not valid -->
        <h2>Failed Addition! 😢😭</h2>
        <ul id="errors">
           <?php foreach ($errors as $key => $value): ?>
                <li><?= $value ?></li>
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
