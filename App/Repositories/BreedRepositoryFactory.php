<?php
namespace App\Repositories;

class BreedRepositoryFactory
{

    private function __construct()
    {}

    public static function getInstance(): BreedRepository
    {
        $cache = new CachedBreedRepository();
        
        if(!$cache->isStale()) {
            return $cache;
        }
        
        return new ApiBreedRepository();
    }
}

