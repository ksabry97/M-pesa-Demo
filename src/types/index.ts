// Core types for the M-Pesa Demo application

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
  serviceCount: number;
  image?: string;
  featured?: boolean;
}

export interface Provider {
  id: string;
  name: string;
  slug: string;
  description: string;
  logo?: string;
  location: string;
  verified: boolean;
  rating: number;
  reviewCount: number;
  phone?: string;
  email?: string;
  categories: string[]; // Category IDs
}

export interface ServicePackage {
  id: string;
  name: string;
  description: string;
  capacity: number; // e.g., number of people
  price: number;
  currency: string;
  duration: number; // in minutes
  features: string[];
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  categoryId: string;
  providerId: string;
  images: string[];
  basePrice: number;
  currency: string;
  pricingType: 'fixed' | 'per-session' | 'per-hour' | 'package';
  duration?: number; // in minutes
  rating: number;
  reviewCount: number;
  featured?: boolean;
  verified?: boolean;
  packages?: ServicePackage[];
  terms?: string[];
  tags?: string[];
}

export interface Review {
  id: string;
  serviceId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  createdAt: string;
  helpful: number;
}

export interface StaffMember {
  id: string;
  name: string;
  avatar?: string;
  providerId: string;
  services: string[]; // Service IDs
}

export interface CartItem {
  serviceId: string;
  packageId?: string;
  quantity: number;
  selectedDate?: string;
  selectedTime?: string;
  selectedStaff?: string;
  specialRequests?: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  currency: string;
}

// Filter and Sort types
export type SortOption = 'popular' | 'rating' | 'price-low' | 'price-high' | 'newest';

export interface Filters {
  categoryId?: string;
  providerId?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  verified?: boolean;
  search?: string;
  sortBy?: SortOption;
}

// Booking types
export type BookingStatus = 'pending' | 'ready' | 'active' | 'cancelled' | 'completed';

export interface Booking {
  id: string;
  serviceId: string;
  packageId?: string;
  providerId: string;
  userId: string;
  status: BookingStatus;
  bookingDate: string; // ISO date string
  bookingTime: string; // Time string (e.g., "14:00")
  duration: number; // in minutes
  quantity: number;
  totalPrice: number;
  currency: string;
  location?: string;
  specialRequests?: string;
  staffId?: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  cancelledAt?: string; // ISO date string
  cancellationReason?: string;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  paymentMethod?: string;
}