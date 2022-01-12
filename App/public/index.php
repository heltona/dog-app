<?php
use App\Http\Dispatcher;


spl_autoload_register(function ($className) {
    $classPath = __DIR__ . "/../../" . str_replace("\\", "/", $className) . '.php';
    if (file_exists($classPath))
        require_once $classPath;
});


$dispatcher = new Dispatcher();
$dispatcher->run();



