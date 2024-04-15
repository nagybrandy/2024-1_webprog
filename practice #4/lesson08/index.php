<?php 
    $errors = []; // store the errors
    $data = []; // store the correct values
    $input = $_GET;
    //echo $_GET['name'];
    //var_dump($input);
    function validate($input, &$errors, &$data) {
        // name must be given, it has to be at least 3 characters
        if(!isset($input['name']) || trim($input['name']) === "" ){
            $errors []= "Enter the name!";
        } else if (strlen($input['name']) < 3) {
            $errors []= "The name must be at least 3 characters!";
        } else {
            $data['name'] = $input['name'];
        }

        if(!isset($input['email']) || trim($input['email']) === "" ){
            $errors []= "Enter the email!";
        } else if(!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
            $errors []= "Enter a valid email address!";
        } else {
            $data['email'] = $input['email'];
        }

        if(!isset($input['cardnum']) || trim($input['cardnum']) === "" ){
            $errors []= "Enter the card number!";
        } else if(!preg_match('/^\d{12}$/', $input['cardnum'])) {
            $errors []= "Enter a valid card number!";
        } else {
            $data['cardnum'] = $input['cardnum'];
        }
        // "                 asd asd asd            \n" -trim> "asd asd asd" (strip)
        return count($errors) === 0;
    }
    
    validate($input, $errors, $data);
    if(count($errors) === 0) $data = [];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/elte-fi/www-assets@19.10.16/styles/mdss.min.css">
</head>
<body style="background-color: <?= $_GET['bgcolor'] ?? "#eee" ?>">
    <h1>You might have a chance to win a new Iphone!!!😍😍</h1>
    <h2>The only thing you have to do is fill out this form.</h2>
    <form action="index.php" method="get" novalidate>
        <h4>Name</h4>
        <input type="text" name="name" id="" value=<?= $data['name'] ?? "" ?>>

        <h4>E-mail</h4>
        <input type="email" name="email" id="" value=<?= $data['email'] ?? "" ?>>

        <h4>Card Number</h4>
        <input type="text" name="cardnum" id="" value=<?= $data['cardnum'] ?? "" ?>>

        <h4>CCV/CVV</h4>
        <input type="text" name="cvv" id="">

        <h4>Color</h4>
        <select name="color" id="">
            <option value="1">Blue</option>
            <option value="2">Red</option>
            <option value="3">Black</option>
        </select>

        <h4>Expiry date</h4>
        <input type="date" name="date" id="">

        <h4>Agreeing to the contract<input type="checkbox" name="agree" id=""></h4>
    
    <input type="submit" value="Send">
    </form>
    <?php if(count($errors) > 0): ?>
        <ul style="color:red">
           <?php foreach($errors as $value): ?>
                <li><?= $value ?></li>
           <?php endforeach; ?>
        </ul>
    <?php else: ?>
        <h1>YOU'VE JUST WON A NEW IPHONE! 😍😍</h1>
    <?php endif ?>
    <a href="/index.php?bgcolor=%23aaa">Dark gray</a>
    <a href="/index.php?bgcolor=lightgreen">Lightgreen</a>
    <a href="https://www.google.com/search?q=lions">Search</a>
</body>
</html>