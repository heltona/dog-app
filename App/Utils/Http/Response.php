<?php
namespace App\Utils\Http;

class Response
{
    private $payload;
    
    public function __construct(string $payload)
    {
        $this->payload = $payload;
    }
    
    public function asText(): string
    {
        return $this->payload;
    }
    
    public function asJson(): object
    {
        return json_decode($this->payload);
    }
}

