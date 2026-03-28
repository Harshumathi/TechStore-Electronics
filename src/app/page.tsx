import ClientShell from "./ClientShell";
import UserProvider from "../../Context/UserProvider";
// import products from "../data";
import { getProducts } from "../../lib/products"
// Server Component — no "use client"
// products are loaded on the server, not in the browser

export default async function Home() {
  const products = await getProducts()
  return (
    <UserProvider>
      <ClientShell products={products} />
    </UserProvider>
  );
}




