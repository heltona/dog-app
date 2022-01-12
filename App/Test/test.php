<?php
use App\Utils\Http\HttpClient;
use App\Repositories\CachedBreedRepository;
use App\Utils\SimpleDebugTool;
use App\Repositories\ApiBreedRepository;

spl_autoload_register(function ($className) {
    $classPath = __DIR__ . "/../../" . str_replace("\\", "/", $className) . '.php';
    if (file_exists($classPath))
        require_once $classPath;
});

$_SERVER["REQUEST_URI"] = "";

$rep = new ApiBreedRepository();
$data = $rep->getBreeds();




 SimpleDebugTool::dump($data);