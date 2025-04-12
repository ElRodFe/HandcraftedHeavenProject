// User interface
export interface User {
    id: number;
    name: string;
    email: string;
    password: string; // Consider hashing passwords securely
    role: 'admin' | 'client' | 'seller';
  }
  
  // Product interface
  export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    category: 'ceramics' | 'fibers' | 'home-goods' | 'jewelery';
    user_id: number; // Foreign key referencing the seller
  }
  
  // Review interface
  export interface Review {
    id: number;
    user_id: number; // Foreign key referencing the user
    product_id: number; // Foreign key referencing the product
    description: string;
  }
  
  // Order interface
  export interface Order {
    id: number;
    user_id: number; // Foreign key referencing the user
    product_id: number; // Foreign key referencing the product
    quantity: number;
    date: string; // ISO 8601 format (e.g., "2025-04-12T10:00:00Z")
  }