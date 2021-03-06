<?php
namespace App\Controllers;

abstract class AbstractController
{
    protected function renderView(string $viewName, array $data)
    {
        //not a pretty function, but does the job
        extract($data);
        
        //not pretty way, but does the job 
        include "../views/" . $viewName . ".php";
    }
    
    protected function writeText($text)
    {
        echo $text;
    }
    
 
}

