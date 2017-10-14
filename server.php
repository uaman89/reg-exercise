<?php
$fields = ['email', 'birthday', 'password1', 'password2'];

var_dump($_POST);
if (!empty($_POST)){

    $user = $_POST['email'] ? $_POST['email'] : 'unknown user';

    echo "<h1>Welcome, {$user}!!!</h1>";

    foreach ($fields as $key){
        if (!isset($_POST[$key])){
            echo "<b>{$key}</b> - missed!<br/>";
        }
    }

} else {
    echo "hmmm...";
}

?>