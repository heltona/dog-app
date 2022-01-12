<?php
namespace App\Utils\Http;


class HttpClient
{   
    public function get(string $url): Response
    {
        $resource = curl_init($url);
        curl_setopt($resource, CURLOPT_RETURNTRANSFER, 1);
        $response = curl_exec($resource);
        
        return new Response($response);
    }  
    
    public function post(string $url, array $payload )
    {
        throw new \Exception("Not implemented method.");
    }
}

