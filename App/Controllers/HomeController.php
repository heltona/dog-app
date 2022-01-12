<?php
namespace App\Controllers;

use App\Repositories\BreedRepositoryFactory;
use App\Utils\SimpleDebugTool;
use App\Repositories\CachedBreedRepository;
use App\Repositories\DogPictureRepository;
use App\Http\Request;

class HomeController extends AbstractController
{
    private $breedRep;
    private $picsRep;
    
    public function __construct()
    {
        $this->breedRep = BreedRepositoryFactory::getInstance();
        $this->picsRep = new DogPictureRepository();
    }
    public function getHome()
    {
        
        $data = $this->breedRep->getBreeds();
        
        $this->renderView("home", array("breeds" => $data));
    }
    
    public function getDogPictures()
    {
        $breed = str_replace("-", "/", Request::getInstance()->getRequestAttribute("breed"));
        $data = $this->picsRep->getPictures($breed);
        $this->writeText($data);
    }
}

