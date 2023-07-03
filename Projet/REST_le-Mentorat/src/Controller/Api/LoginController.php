<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LoginController extends AbstractController
{
    #[Route('/login', methods: ['POST'])]

    public function login(Request $request): Response
    {
        $formData = json_decode($request->getContent());

        $response = [
            'message' => 'les données sont bien receptionné',
            'data' => $formData,
        ];

        return $this->json($response);
    }
}
