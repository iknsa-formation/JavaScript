<?php

$content = $_POST;
$firstname = $_POST['firstname'];

//var_dump($firstname);die;
//$data .= $content;

if(!file_exists('data.json')) {
    touch('data.json');
}
file_put_contents('data.json', json_encode($content, FILE_APPEND));