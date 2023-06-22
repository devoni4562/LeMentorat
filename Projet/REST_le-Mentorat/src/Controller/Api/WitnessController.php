<?php

namespace App\Controller\Api;

use App\Repository\MentorRepository;
use App\Repository\WitnessRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class WitnessController extends AbstractController
{
    #[Route('/api/witnesses', methods: ['GET'])]
    public function getWitnesses(WitnessRepository $witnessRepository): JsonResponse
    {
        $witnesses = $witnessRepository->findAll();
        $data = [];

        foreach ($witnesses as $witness) {
            $data[] = [
                'name' => $witness->getName(),
                'testimony' => $witness->getTestitmony(),
                'avatar' => $witness->getAvatar()
            ];
        }

        return new JsonResponse($data);
    }
}
