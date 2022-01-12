<?php
namespace App\Http;



class ControllerProxyConfigurer
{

    private $proxies;

    public function __construct()
    {
        //this could go to a config file
        $this->proxies = array(
           
        );
        
    }
    
    public function getProxy(object $obj)
    {   
        if(isset($this->proxies[get_class($obj)]))
        {
            $proxyClass = $this->proxies[get_class($obj)];
            $obj = new $proxyClass($obj);
        }
        
        return $obj;
    }
}

