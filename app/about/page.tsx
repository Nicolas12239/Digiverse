import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Trophy, Users, Clock, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <section className="mb-16">
        <Heading
          title="À propos d'ArTech"
          description="Découvrez notre histoire, notre mission et nos valeurs"
          centered
        />
        <div className="mt-12 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="L'équipe ArTech"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20 flex items-center">
            <div className="max-w-md p-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Notre Histoire</h2>
              <p className="text-lg">
                Fondée en 2025, ArTech est née de la passion pour l'innovation et la technologie, avec la mission d'aider les entreprises à prospérer dans l'ère numérique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-card p-8 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Target className="h-6 w-6 mr-2 text-primary" />
            Notre Mission
          </h2>
          <p className="text-muted-foreground mb-4">
            Chez ArTech, notre mission est d'accompagner les entreprises et les particuliers dans leur transformation numérique en proposant des solutions technologiques innovantes, fiables et sur mesure.
          </p>
          <p className="text-muted-foreground">
            Nous nous engageons à comprendre les besoins spécifiques de chaque client pour leur offrir des services qui répondent précisément à leurs attentes et qui contribuent à leur succès.
          </p>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Users className="h-6 w-6 mr-2 text-primary" />
            Notre Vision
          </h2>
          <p className="text-muted-foreground mb-4">
            Notre vision est de devenir un acteur incontournable dans le domaine des solutions numériques, reconnu pour notre expertise technique, notre capacité d'innovation et notre engagement envers la satisfaction client.
          </p>
          <p className="text-muted-foreground">
            Nous aspirons à créer un impact positif à travers nos solutions technologiques, en contribuant à la croissance et à la réussite de nos clients.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-16">
        <Heading
          title="Nos Valeurs"
          description="Les principes qui guident nos actions au quotidien"
          centered
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
            <p className="text-muted-foreground">
              Nous visons l'excellence dans tout ce que nous faisons, en offrant des solutions de la plus haute qualité.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
            <p className="text-muted-foreground">
              Nous croyons en la puissance de la collaboration et du travail d'équipe pour atteindre les meilleurs résultats.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Engagement</h3>
            <p className="text-muted-foreground">
              Nous sommes engagés envers nos clients, nos partenaires et notre communauté pour créer un impact positif.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Intégrité</h3>
            <p className="text-muted-foreground">
              Nous agissons avec honnêteté, transparence et éthique dans toutes nos interactions professionnelles.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-16">
        <Heading
          title="Notre Équipe"
          description="Des professionnels passionnés et expérimentés"
          centered
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card overflow-hidden rounded-lg shadow-sm border">
            <div className="relative h-[200px]">
              <Image
                src=""
                alt="CEO Portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1"></h3>
              <p className="text-primary mb-4">CEO & Fondateur</p>
              <p className="text-muted-foreground">
                De l'expérience dans plusieurs domaines pour vous servir.
              </p>
            </div>
          </div>
          <div className="bg-card overflow-hidden rounded-lg shadow-sm border">
            <div className="relative h-[200px]">
              <Image
                src=""
                alt="CTO Portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1"></h3>
              <p className="text-primary mb-4">Directrice Technique</p>
              <p className="text-muted-foreground">
                Experte en architecture logicielle et en développement d'applications complexes.
              </p>
            </div>
          </div>
          <div className="bg-card overflow-hidden rounded-lg shadow-sm border">
            <div className="relative h-[200px]">
              <Image
                src=""
                alt="Project Manager Portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1"></h3>
              <p className="text-primary mb-4">Chef de Projets</p>
              <p className="text-muted-foreground">
                Spécialiste en gestion de projets agiles et en coordination d'équipes pluridisciplinaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground p-8 md:p-12 rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Prêt à collaborer avec nous ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Découvrez comment ArTech peut vous aider à concrétiser vos projets et à atteindre vos objectifs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Contactez-nous <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}