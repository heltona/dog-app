<?php
namespace App\Repositories;

//not implemented; just to see how the problem could be solved
class CachedBreedRepository implements BreedRepository
{    
    private const STALE = 3600;
 
    
    public function getBreeds(): array
    {
        return array();
        
    }
    
    public function isStale():bool
    {   
        return true;   
    }    
    //could be local database, session or flat file
    public function persistCache(array $data)
    {
        //do nothing
    }    
}

