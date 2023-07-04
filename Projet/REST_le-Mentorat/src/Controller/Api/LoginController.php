<?php

namespace App\Controller\Api;

use App\Repository\MemberRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class LoginController extends AbstractController
{


    #[Route('/login', methods: ['POST'])]

    public function login(Request $request, UserPasswordHasherInterface $hasher, MemberRepository $memberRepository): Response
    {
        $formData = json_decode($request->getContent());

        $user = $memberRepository->findByEmailOrPseudo($formData->login);

        if ($user === null) {
            $response = [
                'message' => 'Utilisateur non trouvé.',

            ];
        } else {
            if ($hasher->isPasswordValid($user, $formData->password)) {
                $response = [
                    'message' => 'Connexion réussie.',
                    'admin' => $user,
                ];
            } else {
                $response = [
                    'message' => 'Mot de passe incorrect.',
                ];
            }
        }

        return $this->json($response);
    }

}
