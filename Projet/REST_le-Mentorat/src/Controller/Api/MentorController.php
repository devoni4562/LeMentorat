<?php

    namespace App\Controller\Api;

    use App\Entity\Mentor;
    use App\Repository\MentorRepository;
    use Doctrine\ORM\EntityManagerInterface;
    use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
    use Symfony\Component\HttpFoundation\JsonResponse;
    use Symfony\Component\HttpFoundation\Request;
    use Symfony\Component\Routing\Annotation\Route;

    class MentorController extends AbstractController
    {
        #[Route('/api/mentors', name: 'mentor_index')]
        public function index(MentorRepository $mentorRepository): JsonResponse
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

        /**
         * @Route("/api/mentors", methods={"POST"})
         */
        public function create(Request $request, EntityManagerInterface $entityManager): JsonResponse
        {
            // Récupérez les données de la requête
            $data = json_decode($request->getContent(), true);

            // Créez un nouvel utilisateur avec les données reçues
            $mentor = new Mentor();
            $mentor->setName($data['name']);
            $mentor->setDescription($data['description']);
            $mentor->setAvatar($data['avatar']);
            // ...

            // Persistez l'utilisateur dans la base de données
            $entityManager->persist($mentor);
            $entityManager->flush();

            // Répondez avec l'utilisateur créé et le code de statut 201 (Created)
            return $this->json($mentor, JsonResponse::HTTP_CREATED);
        }

        // Implémentez d'autres actions (update, delete) selon vos besoins
    }
