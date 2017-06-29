<?php
$file = fopen("input.json", "r");
while(!feof($file)) {
    echo fread($file, 1024);
}
?>

