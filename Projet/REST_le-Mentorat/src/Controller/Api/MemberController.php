<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/member')]
class MemberController extends AbstractController
{
    //----------------------------------------------MENTORS-----------------------------------------------------------//
    #[Route('/mentor', methods: ['GET'])]
    public function getMentors(MentorRepository $mentorRepository): JsonResponse
    {
        $mentors = $mentorRepository->findAll();
        $data = [];
        foreach ($mentors as $mentor) {
            $data[] = [
                'name' => $mentor->getName(),
                'description' => $mentor->getDescription(),
                'avatar' => $mentor->getAvatar(),
            ];
        }

        return new JsonResponse($data);
    }

    //----------------------------------------------MENTORS-----------------------------------------------------------//

}
