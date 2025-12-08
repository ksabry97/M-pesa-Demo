// Common type definitions for the application

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'customer' | 'provider' | 'admin';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  providerId: string;
  providerName: string;
  providerAvatar?: string;
  rating: number;
  reviewCount: number;
  image: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  serviceCount: number;
}

export interface Provider {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  reviewCount: number;
  serviceCount: number;
  specialties: string[];
  verified: boolean;
}

export interface Language {
  code: string;
  name: string;
  i18nCode: string;
}

export interface Country {
  code: string;
  name: string;
  flag?: string;
}

