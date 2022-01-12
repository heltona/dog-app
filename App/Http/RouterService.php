<?php
namespace App\Http;


use Exception;
use App\Controllers\NotFoundController;
use App\Controllers\AbstractController;
use App\Utils\SimpleDebugTool;


class RouterService
{

    private $routes;

    public function __construct()
    {
        $this->routes = array("GET" => array(), "POST" => array());
        
        $data = json_decode(file_get_contents("../config/router.json"));
        
        $this->buildRoutesFromJson("GET", $data->GET);
        $this->buildRoutesFromJson("POST", $data->POST);        
        

    }
    private function buildRoutesFromJson(string $requestMethod, array $routes)
    {
        $this->routes[$requestMethod] = array();
        foreach($routes as $route)
        {
            $this->routes[$requestMethod][$route->endpoint] = array($route->class, $route->method);
        }
    }

    private function getRoute(Request $req)
    {
        $cMethod = $this->routes[$req->getRequestMethod()];

        if (! $cMethod)
            throw new Exception("Not supported method");

        $cPath = $cMethod[$req->getRequestPath()];

        if (! $cPath)
            throw new Exception("Not supported method");
        
        return $cPath;
    }

    public function getController(Request $req): AbstractController
    {
        try {
            
            $controller = $this->getRoute($req);
            return new $controller[0];
            
        } catch (Exception $ex) {
            return new NotFoundController();
        }
    }

    public function getMethod(Request $req): string
    {
        try {
            
            $route = $this->getRoute($req);
            return $route[1];
        } catch (Exception $ex) {
            return "getNotFounPage";
        }
    }
}

