<?php

if (!empty($_POST)){
    echo "<h1>Welcome, {$_POST['name']}!!!</h1>";
} else {
    echo "hmmm...";
}

?>