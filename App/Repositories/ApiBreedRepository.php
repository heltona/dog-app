<?php
namespace App\Repositories;

use App\Utils\Http\HttpClient;
use App\Utils\SimpleDebugTool;

class ApiBreedRepository implements BreedRepository
{
    private $cache;
    
    public function __construct()
    {
        $this->cache = new CachedBreedRepository();
    }
    private const endpoint = "https://dog.ceo/api/breeds/list/all";

    public function getBreeds(): array
    {
        $result = array();
        $http = new HttpClient();        
        $data = $http->get(self::endpoint)->asJson();
        
        if($data && $data->status = "success") {
            $result = $this->prepareData($data->message);
            $this->cache->persistCache($result);
            
        }
                
        return $result;
        
    }
    private function prepareData(object $data)
    {
        $result = array();
        foreach($data as $key => $value) {
            if(count($value) != 0) {
                foreach($value as $breed) {
                    array_push($result, $key . "-" . $breed);
                }
            } else {
                array_push($result, $key);
                
            }
        }
        
        
        return $result;
    }
}

