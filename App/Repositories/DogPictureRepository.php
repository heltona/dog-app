<?php
namespace App\Repositories;

use App\Utils\Http\HttpClient;
use App\Utils\SimpleDebugTool;

class DogPictureRepository
{
    private const ENDPOINT = "https://dog.ceo/api/breed";

    public function getPictures(string $breed)
    {
        $url = self::ENDPOINT . "/" . $breed . "/images";
        $http = new HttpClient();
        $response = $http->get($url)->asText();
        return $response;
    }
}

