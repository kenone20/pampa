
export interface Advantage {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Offer {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price?: string;
  tag: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
  tour: string;
}
