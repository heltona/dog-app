<?php
namespace App\Http;

class Session
{
    private $data;
    
    public function __construct()
    {
        session_start();
        $this->data = &$_SESSION;
    }
    
    public function getAttribute(string $attr)
    {
        return $this->data[$attr];
    }
    
    public function setAttribute(string $key, $data)
    {
        $this->data[$key] = $data;
        
    }
}

