<?php
namespace App\Http;

class Request
{

    private static $request;
    private $requestAttr;
    private $path;

    private function __construct()
    {
        $this->requestAttr = array_merge($_GET, $_POST);
        $this->path = explode("?", $_SERVER['REQUEST_URI'])[0];
        
    }

    public static function getInstance()
    {
        if (! self::$request)
            self::$request = new Request();
        return self::$request;
    }

    public function getRequestPath(): string
    {
        return $this->path;
    }

    public function getRequestMethod(): string
    {
        return $_SERVER["REQUEST_METHOD"];
    }

    public function getRequestAttribute(string $attribute)
    {
        return $this->requestAttr[$attribute] ?? "";
    }
    
    public function getSession(): Session
    {
        return new Session();
    }

    // other methods are out of scope
}

