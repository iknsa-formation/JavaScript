<?php

$content = $_POST;

$data = $content;

if(!file_exists('data.json')) {
    touch('data.json');
}
file_put_contents('data.json', json_encode($content));