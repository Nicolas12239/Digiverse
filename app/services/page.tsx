import React from 'react';
import { Heading } from '@/components/ui/heading';
import { ServiceCard } from '@/components/ui/service-card';
import { Code, Database, LayoutGrid, Network, Shield, Server, Smartphone, Workflow, HelpCircle, ArrowUpRightSquare } from 'lucide-react';

const services = [
  {
    id: 'developpement',
    title: 'Développement Web',
    description: 'Sites vitrines, applications web complexes et e-commerce sur mesure pour votre entreprise.',
    icon: <Code className="h-10 w-10" />
  },
  {
    id: 'mobile',
    title: 'Coneption Graphique',
    description: 'Des flyers, des logos, des designs epoustoufflants pour vous.',
    icon: <Smartphone className="h-10 w-10" />
  },
  {
    id: 'consulting',
    title: 'Community manager',
    description: 'Des expertises en communications pour vous aider à élever vos entrprises.',
    icon: <HelpCircle className="h-10 w-10" />
  },
  {
    id: 'cloud',
    title: 'Solutions SAas',
    description: 'Des solutions adaptés pour vos différents services.',
    icon: <Server className="h-10 w-10" />
  },
  {
    id: 'securite',
    title: 'Des blogs',
    description: 'Des blogs pour montrer à peu près vos compétences et autres.',
    icon: <Shield className="h-10 w-10" />
  },
  {
    id: 'integration',
    title: 'Mentoring',
    description: 'Des propositions de mentorat pourtoutes les personnes avides de connaissances.',
    icon: <Workflow className="h-10 w-10" />
  },
  {
    id: 'apis',
    title: 'Développement d\'APIs',
    description: 'Création d\'interfaces de programmation pour connecter vos services et applications.',
    icon: <ArrowUpRightSquare className="h-10 w-10" />
  },
  {
    id: 'database',
    title: 'Solutions de Bases de Données',
    description: 'Conception, optimisation et maintenance de bases de données performantes.',
    icon: <Database className="h-10 w-10" />
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Assistance technique continue et maintenance de vos solutions numériques.',
    icon: <Network className="h-10 w-10" />
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Heading
        title="Nos Services"
        description="Découvrez l'ensemble des prestations que nous proposons pour répondre à vos besoins."
        centered
        className="mb-12"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>

      <div className="mt-20 bg-card p-8 rounded-lg shadow-sm border">
        <Heading
          title="Vous ne trouvez pas ce que vous cherchez ?"
          description="Nous proposons également des services sur mesure adaptés à vos besoins spécifiques."
        />
        <p className="mb-6">
          Notre équipe d'experts est à votre disposition pour étudier votre projet et vous proposer une solution adaptée.
          N'hésitez pas à nous contacter pour discuter de vos besoins spécifiques.
        </p>
        <p className="text-lg font-medium">
          Contactez-nous au <span className="text-primary">96095435</span> ou via notre formulaire de contact.
        </p>
      </div>
    </div>
  );
}