<?php

namespace App\Entity;

use App\Repository\WitnessRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: WitnessRepository::class)]
class Witness
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $avatar = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $testitmony = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(string $avatar): static
    {
        $this->avatar = $avatar;

        return $this;
    }

    public function getTestitmony(): ?string
    {
        return $this->testitmony;
    }

    public function setTestitmony(string $testitmony): static
    {
        $this->testitmony = $testitmony;

        return $this;
    }
}
