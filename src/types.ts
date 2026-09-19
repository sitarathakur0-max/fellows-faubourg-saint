export type PageTab = 'home' | 'menu' | 'about' | 'reviews' | 'contact';

export interface FoodHighlight {
  id: string;
  name: string;
  category: 'pasta' | 'antipasti' | 'dessert';
  badge?: string;
  description: string;
  isBestseller?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  highlightDish?: string;
  type: 'positive' | 'balanced';
}

export interface RestaurantDetails {
  name: string;
  type: string;
  address: string;
  neighborhood: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  services: string[];
  hoursText: string;
  hoursDetail: string;
  menuUrl: string;
  reservationUrl: string;
  directionsUrl: string;
}
