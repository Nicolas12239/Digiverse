"use client";

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  contactNumber?: string;
  className?: string;
}

export const ServiceCard = ({
  title,
  description,
  icon,
  contactNumber = "96095435",
  className,
}: ServiceCardProps) => {
  const handleSubscribe = () => {
    window.open(`https://wa.me/${contactNumber}?text=Je suis intéressé par le service: ${title}`, '_blank');
  };

  return (
    <Card className={cn("h-full transition-all duration-300 hover:shadow-md", className)}>
      <CardHeader>
        {icon && <div className="mb-2 text-primary">{icon}</div>}
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Additional content can go here */}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleSubscribe} 
          className="w-full"
        >
          Souscrire <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};