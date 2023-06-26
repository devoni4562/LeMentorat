<?php

namespace App\Controller\Api;

use App\Entity\Member;
use App\Repository\MemberRepository;
use App\Repository\RoleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/members')]
class MemberController extends AbstractController
{
    //----------------------------------------------MENTORS-----------------------------------------------------------//
    #[Route('/mentors', methods: ['GET'])]
    public function getMentors(MemberRepository $memberRepository): JsonResponse
    {

        $mentors = $memberRepository->getByJobId(2);
        $data = [];
        foreach ($mentors as $mentor) {
            $data[] = [
                'lastname' => $mentor->getLastName(),
                'description' => $mentor->getDescription(),
                'avatar' => $mentor->getAvatar(),
                'pseudo' => $mentor->getPseudo(),
            ];
        }


        return new JsonResponse($data);

    }

    #[Route('/mentors', methods: ['POST'])]
    public function createMentor(RoleRepository $roleRepository, EntityManagerInterface $entityManager): void
    {

    }

    //---------------------------------------------WITNESSES----------------------------------------------------------//

    #[Route('/witnesses', methods: ['GET'])]
    public function getWitnesses(MemberRepository $memberRepository): JsonResponse
    {
        $witnesses = $memberRepository->getByJobId(3);
        $data = [];
        foreach ($witnesses as $witness) {
            $data[] = [
                'lastname' => $witness->getLastName(),
                'description' => $witness->getDescription(),
                'avatar' => $witness->getAvatar(),
                'pseudo' => $witness->getPseudo(),
            ];
        }


        return new JsonResponse($data);
    }

}
