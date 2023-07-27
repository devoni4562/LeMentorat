<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    #[Route('/getConferenceSubscribeLink', methods: ['GET'])]
    public function getConferenceLink(): JsonResponse
    {
        $filePath = $this->getParameter('kernel.project_dir').'/public/res/txt/conference_subscribe_link.txt';

        if (file_exists($filePath)){
            $link = file_get_contents($filePath);

            return new JsonResponse($link);
        }

        return new JsonResponse(null);
    }
}
