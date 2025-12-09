import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type {
  Service,
  Category,
  Provider,
  CartItem,
  Cart,
  Filters,
  SortOption,
  Booking,
  BookingStatus,
} from "../types";
import {
  services,
  categories,
  providers,
  bookings,
  getServiceById,
  getServicesByCategory,
  getServicesByProvider,
  getBookingById,
  getBookingsByUserId,
  getBookingsByStatus,
} from "../data";

interface ProductStore {
  // Data
  services: Service[];
  categories: Category[];
  providers: Provider[];
  bookings: Booking[];

  // Filters and Search
  filters: Filters;
  searchQuery: string;

  // Cart
  cart: Cart;

  // Favorites/Wishlist
  favorites: string[]; // Service IDs

  // Selected items
  selectedCategory: string | null;
  selectedProvider: string | null;

  // Current user (for bookings)
  currentUserId: string;

  // Actions - Filters
  setFilters: (filters: Partial<Filters>) => void;
  resetFilters: () => void;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (categoryId: string | null) => void;
  setSelectedProvider: (providerId: string | null) => void;
  setSortBy: (sortBy: SortOption) => void;

  // Actions - Cart
  addToCart: (item: CartItem) => void;
  removeFromCart: (serviceId: string) => void;
  updateCartItem: (serviceId: string, updates: Partial<CartItem>) => void;
  clearCart: () => void;
  getCartTotal: () => number;

  // Actions - Favorites
  toggleFavorite: (serviceId: string) => void;
  isFavorite: (serviceId: string) => boolean;

  // Getters
  getFilteredServices: () => Service[];
  getFeaturedServices: () => Service[];
  getServicesByCategory: (categoryId: string) => Service[];
  getServicesByProvider: (providerId: string) => Service[];

  // Booking Actions
  addBooking: (booking: Booking) => void;
  updateBooking: (bookingId: string, updates: Partial<Booking>) => void;
  cancelBooking: (bookingId: string, reason?: string) => void;
  getBookingsByStatus: (status: BookingStatus) => Booking[];
  getUserBookings: (userId?: string) => Booking[];
  getBookingById: (bookingId: string) => Booking | undefined;

  // Helper
  calculateCartTotal: (items: CartItem[]) => number;
}

const initialFilters: Filters = {
  sortBy: "popular",
};

const initialCart: Cart = {
  items: [],
  total: 0,
  currency: "KES",
};

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      // Initial state
      services,
      categories,
      providers,
      bookings,
      filters: initialFilters,
      searchQuery: "",
      cart: initialCart,
      favorites: [],
      selectedCategory: null,
      selectedProvider: null,
      currentUserId: "user-001", // Default user ID

      // Filter actions
      setFilters: (newFilters) =>
        set((state) => ({
          filters: { ...state.filters, ...newFilters },
        })),

      resetFilters: () =>
        set({
          filters: initialFilters,
          searchQuery: "",
          selectedCategory: null,
          selectedProvider: null,
        }),

      setSearchQuery: (query) => set({ searchQuery: query }),

      setSelectedCategory: (categoryId) =>
        set({
          selectedCategory: categoryId,
          filters: { ...get().filters, categoryId: categoryId || undefined },
        }),

      setSelectedProvider: (providerId) =>
        set({
          selectedProvider: providerId,
          filters: { ...get().filters, providerId: providerId || undefined },
        }),

      setSortBy: (sortBy) =>
        set((state) => ({
          filters: { ...state.filters, sortBy },
        })),

      // Cart actions
      addToCart: (item) =>
        set((state) => {
          const existingItemIndex = state.cart.items.findIndex(
            (i) =>
              i.serviceId === item.serviceId && i.packageId === item.packageId
          );

          let newItems: CartItem[];
          if (existingItemIndex >= 0) {
            // Update existing item
            newItems = [...state.cart.items];
            newItems[existingItemIndex] = {
              ...newItems[existingItemIndex],
              quantity: newItems[existingItemIndex].quantity + item.quantity,
            };
          } else {
            // Add new item
            newItems = [...state.cart.items, item];
          }

          const total = get().calculateCartTotal(newItems);

          return {
            cart: {
              ...state.cart,
              items: newItems,
              total,
            },
          };
        }),

      removeFromCart: (serviceId) =>
        set((state) => {
          const newItems = state.cart.items.filter(
            (item) => item.serviceId !== serviceId
          );
          const total = get().calculateCartTotal(newItems);

          return {
            cart: {
              ...state.cart,
              items: newItems,
              total,
            },
          };
        }),

      updateCartItem: (serviceId, updates) =>
        set((state) => {
          const newItems = state.cart.items.map((item) =>
            item.serviceId === serviceId ? { ...item, ...updates } : item
          );
          const total = get().calculateCartTotal(newItems);

          return {
            cart: {
              ...state.cart,
              items: newItems,
              total,
            },
          };
        }),

      clearCart: () => set({ cart: initialCart }),

      getCartTotal: () => get().cart.total,

      // Favorites actions
      toggleFavorite: (serviceId) =>
        set((state) => ({
          favorites: state.favorites.includes(serviceId)
            ? state.favorites.filter((id) => id !== serviceId)
            : [...state.favorites, serviceId],
        })),

      isFavorite: (serviceId) => get().favorites.includes(serviceId),

      // Getters
      getFilteredServices: () => {
        const { filters, searchQuery, services } = get();
        let filtered = [...services];

        // Apply category filter
        if (filters.categoryId) {
          filtered = filtered.filter(
            (service) => service.categoryId === filters.categoryId
          );
        }

        // Apply provider filter
        if (filters.providerId) {
          filtered = filtered.filter(
            (service) => service.providerId === filters.providerId
          );
        }

        // Apply price range filter
        if (filters.minPrice !== undefined) {
          filtered = filtered.filter(
            (service) => service.basePrice >= filters.minPrice!
          );
        }
        if (filters.maxPrice !== undefined) {
          filtered = filtered.filter(
            (service) => service.basePrice <= filters.maxPrice!
          );
        }

        // Apply rating filter
        if (filters.rating !== undefined) {
          filtered = filtered.filter(
            (service) => service.rating >= filters.rating!
          );
        }

        // Apply verified filter
        if (filters.verified !== undefined) {
          filtered = filtered.filter(
            (service) => service.verified === filters.verified
          );
        }

        // Apply search query
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          filtered = filtered.filter(
            (service) =>
              service.name.toLowerCase().includes(query) ||
              service.description.toLowerCase().includes(query) ||
              service.tags?.some((tag) => tag.toLowerCase().includes(query))
          );
        }

        // Apply sorting
        switch (filters.sortBy) {
          case "rating":
            filtered.sort((a, b) => b.rating - a.rating);
            break;
          case "price-low":
            filtered.sort((a, b) => a.basePrice - b.basePrice);
            break;
          case "price-high":
            filtered.sort((a, b) => b.basePrice - a.basePrice);
            break;
          case "newest":
            // Since we don't have created date, use ID as proxy
            filtered.reverse();
            break;
          case "popular":
          default:
            filtered.sort((a, b) => b.reviewCount - a.reviewCount);
            break;
        }

        return filtered;
      },

      getFeaturedServices: () => services.filter((service) => service.featured),

      getServicesByCategory: (categoryId) => getServicesByCategory(categoryId),

      getServicesByProvider: (providerId) => getServicesByProvider(providerId),

      // Booking actions
      addBooking: (booking) =>
        set((state) => ({
          bookings: [...state.bookings, booking],
        })),

      updateBooking: (bookingId, updates) =>
        set((state) => ({
          bookings: state.bookings.map((booking) =>
            booking.id === bookingId
              ? {
                  ...booking,
                  ...updates,
                  updatedAt: new Date().toISOString(),
                }
              : booking
          ),
        })),

      cancelBooking: (bookingId, reason) =>
        set((state) => ({
          bookings: state.bookings.map((booking) =>
            booking.id === bookingId
              ? {
                  ...booking,
                  status: "cancelled" as BookingStatus,
                  cancelledAt: new Date().toISOString(),
                  cancellationReason: reason,
                  updatedAt: new Date().toISOString(),
                }
              : booking
          ),
        })),

      getBookingsByStatus: (status) => {
        const { bookings, currentUserId } = get();
        return bookings.filter(
          (booking) =>
            booking.status === status && booking.userId === currentUserId
        );
      },

      getUserBookings: (userId) => {
        const { bookings, currentUserId } = get();
        const targetUserId = userId || currentUserId;
        return bookings.filter((booking) => booking.userId === targetUserId);
      },

      getBookingById: (bookingId) => {
        const { bookings } = get();
        return bookings.find((booking) => booking.id === bookingId);
      },

      // Helper function to calculate cart total (not exposed in interface)
      calculateCartTotal: (items: CartItem[]): number => {
        return items.reduce((total, item) => {
          const service = getServiceById(item.serviceId);
          if (!service) return total;

          let itemPrice = service.basePrice;

          // If package is selected, use package price
          if (item.packageId && service.packages) {
            const pkg = service.packages.find((p) => p.id === item.packageId);
            if (pkg) {
              itemPrice = pkg.price;
            }
          }

          return total + itemPrice * item.quantity;
        }, 0);
      },
    }),
    {
      name: "mpesa-marketplace-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        cart: state.cart,
        favorites: state.favorites,
        bookings: state.bookings,
      }),
    }
  )
);
