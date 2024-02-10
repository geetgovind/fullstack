import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return <main>Hello World!!  
    <Link href="/users">go to user page</Link>
    <ProductCard />
  </main>;
}
