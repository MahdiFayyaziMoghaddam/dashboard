export interface Product {
  id: string;
  title: string;
  isLiked: boolean;
  price: number;
  imagesSrc: string[];
  averageRate: 1 | 2 | 3 | 4 | 5;
  numberOfRate: number;
}
