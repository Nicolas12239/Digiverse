import Image from 'next/image';
import Link from 'next/link';
import { BannerCarousel } from '@/components/ui/banner-carousel';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Code, Database, LayoutGrid, Network, Server, Shield } from 'lucide-react';
import { ServiceCard } from '@/components/ui/service-card';

const bannerItems = [
  {
    id: '1',
    // title: 'Transformez vos idées en solutions numériques',
    description: '',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    // title: 'Expertise technique à votre service',
    description: '',
    imageUrl: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    // title: 'Solutions innovantes, résultats concrets',
    description: '',
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const featuredServices = [
  {
    title: 'Développement Web',
    description: '',
    icon: <Code className="h-10 w-10" />
  },
  {
    title: 'Applications Mobiles',
    description: '',
    icon: <LayoutGrid className="h-10 w-10" />
  },
  {
    title: 'Consultation IT',
    description: 'Expertise technique et conseils stratégiques pour optimiser votre infrastructure.',
    icon: <Network className="h-10 w-10" />
  },
  {
    title: 'Solutions Cloud',
    description: 'Migration, hébergement et gestion de vos données et applications dans le cloud.',
    icon: <Server className="h-10 w-10" />
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section with Banner */}
      <section className="relative">
        <BannerCarousel 
          items={bannerItems} 
          className="h-[500px] md:h-[600px]"
        />
        
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg">
             
              <p className="text-xl text-white/90 mb-8 drop-shadow-md">
                Vos projets, notre technologie. Des solutions innovantes pour transformer vos idées en réalité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/services">
                    Découvrir nos services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="bg-white/20 text-white border-white/60 hover:bg-white/30 hover:text-white">
                  <Link href="/contact">
                    Nous contacter
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Heading 
                title="À propos d'ArTech" 
                description="Expertise technique au service de vos projets"
              />
              <p className="text-muted-foreground mb-6">
                Fondée par des passionnés de technologie, ArTech s'est donnée pour mission d'accompagner les entreprises et les particuliers dans leur transformation numérique. Notre expertise couvre l'ensemble des besoins digitaux, du développement d'applications au designing.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>De nombreux services délivrés par les âges</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Équipe de professionnels qualifiés et passionnés</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Méthodologies agiles pour une collaboration transparente</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Engagement de qualité et satisfaction client</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/about">
                  En savoir plus sur nous
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="L'équipe ArTech" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <Heading 
            title="Nos Services" 
            description="Des solutions adaptées à vos besoins spécifiques"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/services">
                Voir tous nos services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <Heading 
            title="Pourquoi nous choisir ?" 
            description="Des avantages qui font la différence"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card p-8 rounded-lg shadow-sm border text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fiabilité et sécurité</h3>
              <p className="text-muted-foreground">
                Nous accordons une importance capitale à la sécurité de vos données et à la fiabilité de nos solutions.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm border text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Solutions sur mesure</h3>
              <p className="text-muted-foreground">
                Chaque projet est unique, c'est pourquoi nous développons des solutions entièrement personnalisées.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm border text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Network className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Support continu</h3>
              <p className="text-muted-foreground">
                Notre équipe reste à votre disposition pour vous accompagner tout au long de votre projet et après.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à donner vie à votre projet ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment ArTech peut vous aider à atteindre vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link href="/contact">
                Demander un devis
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/services">
                Découvrir nos services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}