<?php

namespace App\Controller\Api;

use App\Entity\Article;
use App\Repository\ArticleRepository;
use App\Repository\CategorieRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/article')]
class ArticleController extends AbstractController
{
    #[Route('/', methods: ['GET'])]
    public function getArticles(ArticleRepository $articleRepository): JsonResponse
    {
        $articles = [];

    }

    #[Route('/new', methods: ['POST'])]
public function newArticle(Request $request, ArticleRepository $articleRepository, CategorieRepository $categorieRepository)
    {
        $formData = json_decode($request->getContent());

        $newArticle = new Article();
        $newArticle->setCategory($categorieRepository->findOneBy($formData->category))
            ->setDate($formData->date)
            ->setImage($formData->image)
            ->setVideo($formData->video)
            ->setWritter($formData->writter)
            ->setParagraph($formData->paragraph);

        echo json_encode($newArticle);

        $articleRepository->save($newArticle);

    }
}
