"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabase';
import { Heading } from '@/components/ui/heading';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Bookmark, Bell, Settings, LogOut } from 'lucide-react';
import { ServiceCard } from '@/components/ui/service-card';

interface Profile {
  id: string;
  name: string;
  email: string;
}

const services = [
  {
    title: 'Développement Web',
    description: 'Sites vitrines, applications web complexes et e-commerce sur mesure pour votre entreprise.'
  },
  {
    title: 'Applications Mobiles',
    description: 'Applications iOS et Android natives ou cross-platform adaptées à vos besoins.'
  },
  {
    title: 'Consultation IT',
    description: 'Expertise technique et conseils stratégiques pour optimiser votre infrastructure.'
  },
  {
    title: 'Solutions Cloud',
    description: 'Migration, hébergement et gestion de vos données et applications dans le cloud.'
  },
  {
    title: 'Cybersécurité',
    description: 'Protection de vos données et systèmes contre les menaces informatiques.'
  },
  {
    title: 'Maintenance & Support',
    description: 'Assistance technique continue et maintenance de vos solutions numériques.'
  }
];

export default function DashboardPage() {
  const { user, loading: authLoading, signOut } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [authLoading, user, router]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user?.id) {
        try {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

          if (error) {
            throw error;
          }

          if (data) {
            setProfile(data as Profile);
          }
        } catch (error) {
          console.error('Error fetching profile:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    if (user) {
      fetchProfile();
    }
  }, [user]);

  if (authLoading || loading) {
    return (
      <div className="container flex justify-center items-center h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 md:p-12 rounded-lg mb-8">
        <Heading
          title={`Bonjour ${profile?.name || 'utilisateur'} !`}
          description="Bienvenue sur votre tableau de bord"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bookmark className="h-5 w-5 mr-2 text-primary" />
              Mon Profil
            </CardTitle>
            <CardDescription>Informations personnelles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <span className="font-medium">Nom :</span> {profile?.name}
              </div>
              <div>
                <span className="font-medium">Email :</span> {profile?.email}
              </div>
              <div className="pt-4">
                <Button size="sm" variant="outline" asChild>
                  <a href="/profile">Modifier mon profil</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="h-5 w-5 mr-2 text-primary" />
              Notifications
            </CardTitle>
            <CardDescription>Vos dernières alertes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground italic">
              Aucune notification pour le moment.
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="h-5 w-5 mr-2 text-primary" />
              Paramètres
            </CardTitle>
            <CardDescription>Gérez votre compte</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button size="sm" variant="outline" className="w-full justify-start">
              Préférences
            </Button>
            <Button size="sm" variant="outline" className="w-full justify-start">
              Sécurité
            </Button>
            <Button 
              size="sm" 
              variant="destructive" 
              className="w-full justify-start"
              onClick={signOut}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Se déconnecter
            </Button>
          </CardContent>
        </Card>
      </div>

      <Heading
        title="Nos Services"
        description="Découvrez nos services et contactez-nous pour en savoir plus"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}