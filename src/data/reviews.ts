import type { Review } from '../types';

export const reviews: Review[] = [
  {
    id: 'review-1',
    serviceId: 'nyama-choma-catering-20',
    userId: 'user-1',
    userName: 'amyrobson',
    rating: 5,
    comment:
      "Kenyan Delights exceeded expectations! 🌟🌟🌟🌟🌟 From setup to service, everything was impeccable. The nyama choma was perfectly grilled, and the variety of sides pleased everyone. Our guests raved about the authentic flavors. The team was professional, friendly, and ensured a seamless catering experience. Highly recommend for any event! Asante sana, Kenyan Delights!",
    createdAt: '2024-11-08T10:00:00Z',
    helpful: 24,
  },
  {
    id: 'review-2',
    serviceId: 'nyama-choma-catering-20',
    userId: 'user-2',
    userName: 'johnkimani',
    rating: 5,
    comment:
      "Absolutely fantastic service! The chefs were skilled and the food was delicious. Our corporate event was a huge success thanks to Kenyan Delights. Will definitely book again!",
    createdAt: '2024-11-15T14:30:00Z',
    helpful: 18,
  },
  {
    id: 'review-3',
    serviceId: 'nyama-choma-catering-20',
    userId: 'user-3',
    userName: 'marywanjiku',
    rating: 4,
    comment:
      "Great experience overall. The food was excellent and the staff were very professional. Only minor issue was they arrived 15 minutes late, but they made up for it with excellent service.",
    createdAt: '2024-10-22T16:45:00Z',
    helpful: 12,
  },
  {
    id: 'review-4',
    serviceId: 'home-deep-cleaning',
    userId: 'user-4',
    userName: 'peterodhiambo',
    rating: 5,
    comment:
      "Clean Sweep did an amazing job! My house has never been this clean. They paid attention to every detail and used eco-friendly products. Highly recommended!",
    createdAt: '2024-11-20T09:15:00Z',
    helpful: 31,
  },
  {
    id: 'review-5',
    serviceId: 'home-deep-cleaning',
    userId: 'user-5',
    userName: 'gracenwambi',
    rating: 4,
    comment:
      "Very thorough cleaning service. They cleaned areas I didn't even think about. Professional team and great value for money.",
    createdAt: '2024-11-10T11:00:00Z',
    helpful: 15,
  },
  {
    id: 'review-6',
    serviceId: 'car-engine-diagnostic',
    userId: 'user-6',
    userName: 'davidkiptoo',
    rating: 5,
    comment:
      "Auto Experts are true professionals! They diagnosed my engine problem quickly and fixed it at a fair price. The warranty gives me peace of mind. Excellent service!",
    createdAt: '2024-11-18T13:20:00Z',
    helpful: 22,
  },
  {
    id: 'review-7',
    serviceId: 'web-development-basic',
    userId: 'user-7',
    userName: 'faithnjeri',
    rating: 5,
    comment:
      "TechZone Kenya built an amazing website for my business! The design is modern, loads fast, and looks great on mobile. Very happy with the results!",
    createdAt: '2024-11-05T10:30:00Z',
    helpful: 19,
  },
  {
    id: 'review-8',
    serviceId: 'logo-design-branding',
    userId: 'user-8',
    userName: 'brianomondi',
    rating: 5,
    comment:
      "Outstanding work! The logo perfectly captures my brand's essence. The designer was patient with my revisions and the final result exceeded expectations. Worth every shilling!",
    createdAt: '2024-11-12T15:45:00Z',
    helpful: 27,
  },
  {
    id: 'review-9',
    serviceId: 'professional-haircut-styling',
    userId: 'user-9',
    userName: 'lucywambui',
    rating: 5,
    comment:
      "Amazing haircut! The stylist really listened to what I wanted and gave me the perfect cut. The salon is clean, modern, and the staff are so friendly. Will definitely be back!",
    createdAt: '2024-11-25T14:20:00Z',
    helpful: 34,
  },
  {
    id: 'review-10',
    serviceId: 'professional-haircut-styling',
    userId: 'user-10',
    userName: 'stevenkamau',
    rating: 5,
    comment:
      "Best barber in Nairobi! Clean fade, attention to detail, and great conversation. The price is very reasonable for the quality you get. Highly recommend!",
    createdAt: '2024-11-28T16:10:00Z',
    helpful: 28,
  },
  {
    id: 'review-11',
    serviceId: 'spa-massage-therapy',
    userId: 'user-11',
    userName: 'annanjoroge',
    rating: 5,
    comment:
      "Absolutely heavenly! The massage was incredibly relaxing and the therapist was very professional. The spa environment is peaceful and clean. Left feeling completely refreshed and rejuvenated!",
    createdAt: '2024-11-22T11:30:00Z',
    helpful: 42,
  },
  {
    id: 'review-12',
    serviceId: 'spa-massage-therapy',
    userId: 'user-12',
    userName: 'danielmutua',
    rating: 5,
    comment:
      "Booked the premium spa package and it was worth every shilling! The hot stone therapy was amazing. Perfect for stress relief after a long work week. The staff are attentive and skilled.",
    createdAt: '2024-11-30T13:45:00Z',
    helpful: 38,
  },
];

export const getReviewsByService = (serviceId: string): Review[] => {
  return reviews.filter((review) => review.serviceId === serviceId);
};

export const getReviewById = (id: string): Review | undefined => {
  return reviews.find((review) => review.id === id);
};

export const getAverageRating = (serviceId: string): number => {
  const serviceReviews = getReviewsByService(serviceId);
  if (serviceReviews.length === 0) return 0;
  
  const sum = serviceReviews.reduce((acc, review) => acc + review.rating, 0);
  return Number((sum / serviceReviews.length).toFixed(1));
};

