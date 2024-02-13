import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="container ">
      Next App on Vercel&nbsp;
      <div className="container">
        <Link
          href="/users"
          className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          go to user page
        </Link>
      </div>
      <ProductCard />
    </main>
  );
}
