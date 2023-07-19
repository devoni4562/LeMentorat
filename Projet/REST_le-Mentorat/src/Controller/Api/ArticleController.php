<?php

namespace App\Controller\Api;

use App\Entity\Article;
use App\Repository\ArticleRepository;
use App\Repository\CategorieRepository;
use App\Repository\MemberRepository;
use App\Service\FileUploader;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/article')]
class ArticleController extends AbstractController
{
    #[Route('/', methods: ['GET'])]
    public function getArticles(ArticleRepository $articleRepository): JsonResponse
    {
        $articles = $articleRepository->findAll();

        $response = [];
        foreach ($articles as $article) {
            $response[] = [
                'id' => $article->getId(),
                'writer' => [
                    'id' => $article->getWritter()->getId(),
                    'lastname' => $article->getWritter()->getLastName(),
                    'description' => $article->getWritter()->getDescription(),
                    'avatar' => $article->getWritter()->getAvatar(),
                    'pseudo' => $article->getWritter()->getPseudo(),
                    'firstname' => $article->getWritter()->getFirstName(),
                    'job' => [
                        'id' => $article->getWritter()->getJob()->getId(),
                        'name' => $article->getWritter()->getJob()->getName()
                    ],
                    'role' => $article->getWritter()->getRoles(),
                    'email' => $article->getWritter()->getEmail(),
                ],
                'video'=>  $article->getVideo(),
                'image'=>$article->getImage(),
                'date'=>$article->getDate()->format('Y-m-d'),
                'paragraph'=>$article->getParagraph(),
                'category'=> [
                    'id' => $article->getCategory()->getId(),
                    'wording' => $article->getCategory()->getLibelle()
                ],
                'title' => $article->getTitle(),
                ];
        }

        return new JsonResponse($response);

    }

    /**
     * @throws \Exception
     */
    #[Route('/new', methods: ['POST'])]
public function newArticle(Request $request, FileUploader $fileUploader, ArticleRepository $articleRepository, CategorieRepository $categorieRepository, MemberRepository $memberRepository): JsonResponse
    {
        $formData = $request->request->all();



        $newArticle = new Article();
        $newArticle->setCategory($categorieRepository->find($formData['category']))
            ->setDate(new \DateTime())
            ->setWritter($memberRepository->find($formData['writterId']))
            ->setParagraph($formData['paragraph'])
            ->setTitle($formData['title'])
        ->setVideo($formData['video']);

        if ($request->files->get('image') !== null) {
            $newArticle->setImage($fileUploader->upload($request->files->get('image'), $this->getParameter('article_img_dir'), $formData['title']));
                }

        $articleRepository->save($newArticle, true);



        $response = [
            'id' => $newArticle->getId(),
            'writter' => [
                'id' => $newArticle->getWritter()->getId(),
                'lastname' => $newArticle->getWritter()->getLastName(),
                'description' => $newArticle->getWritter()->getDescription(),
                'avatar' => $newArticle->getWritter()->getAvatar(),
                'pseudo' => $newArticle->getWritter()->getPseudo(),
                'firstname' => $newArticle->getWritter()->getFirstName(),
                'job' => [
                    'id' => $newArticle->getWritter()->getJob()->getId(),
                    'name' => $newArticle->getWritter()->getJob()->getName()
                ],
                'role' => $newArticle->getWritter()->getRoles(),
                'email' => $newArticle->getWritter()->getEmail(),
            ],
            'video'=> $newArticle->getVideo(),
            'image'=>$newArticle->getImage(),
            'date'=>$newArticle->getDate(),
            'paragraph'=>$newArticle->getParagraph(),
            'category'=> [
                'id' => $newArticle->getCategory()->getId(),
                'wording' => $newArticle->getCategory()->getLibelle()
            ],
            'title' => $newArticle->getTitle(),

        ];


        return new  JsonResponse($response);
    }


}
