import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <Image
                  src="/logo.png"
                  alt="ArTech Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">ArTech</span>
            </div>
            <p className="text-muted-foreground">
              Vos projets, notre technologie.
              Des solutions innovantes pour transformer vos idées en réalité.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-primary">
                <Github size={20} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary">
                <Linkedin size={20} />
              </Link>
              <Link href="mailto:contact@artech.com" className="text-muted-foreground hover:text-primary">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Nos services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#developpement" className="text-muted-foreground hover:text-primary">
                  Développement Web
                </Link>
              </li>
              <li>
                <Link href="/services#mobile" className="text-muted-foreground hover:text-primary">
                  Applications Mobiles
                </Link>
              </li>
              <li>
                <Link href="/services#consulting" className="text-muted-foreground hover:text-primary">
                  Consultation IT
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="text-muted-foreground hover:text-primary">
                  Maintenance & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contactez-nous</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                <span>+228 96095435</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                <span>contact@artech.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                <span>Hédzranawoé-Togo</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-center text-muted-foreground">
          <p>&copy; {currentYear} ArTech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};