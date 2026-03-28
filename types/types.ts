export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: number;
  image: string;
  isBestSeller: boolean;
  brand: string;
}

export interface CartItem extends Product {
  quantity: number;
}
