<?php

namespace App\Controller\Api;

use App\Entity\Member;
use App\Repository\MemberRepository;
use App\Repository\RoleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/members')]
class MemberController extends AbstractController
{

#[Route("/staff", methods: ['GET'])]
    public function getStaff(MemberRepository $memberRepository, RoleRepository $jobRepository, UserPasswordHasherInterface $hasher, EntityManagerInterface $entityManager):JsonResponse{

        $create = new Member();
        $create->setFirstName('rayan')
            ->setLastName('ryn')
            ->setJob($jobRepository->find(6))
            ->setEmail('rayan@mentorat.com')
            ->setDescription('Commercial')
            ->setPseudo('closer2')
            ->setAvatar('rayan.jpg')
            ->setPassword($hasher->hashPassword($create, 1234))
            ->setRoles(['ROLE_USER']);
        $entityManager->persist($create);
        $entityManager->flush();

        $staff = $memberRepository->findAll();
        $data = [];
    foreach ($staff as $member) {
        $data[] = [
            'lastname' => $member->getLastName(),
            'description' => $member->getDescription(),
            'avatar' => $member->getAvatar(),
            'pseudo' => $member->getPseudo(),
            'firstname' => $member->getFirstName(),
            'job' => [
                'id' => $member->getJob()->getId(),
                'name' => $member->getJob()->getName()
                ],
            'role' => $member->getRoles(),
            'email' => $member->getEmail(),
        ];
    }
    return new JsonResponse($data);
    }

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
                'firstname' => $mentor->getFirstName(),
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
