import  products  from "../src/data"
import type { Product } from "../types/types"

export async function getProducts(): Promise<Product[]> {
  return products
}