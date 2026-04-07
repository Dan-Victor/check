import { getProducts } from "../lib/api";
import ItemCard from "./components/ItemCard";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import Link from "next/link";


//typescript types for the product data
interface ItemCardProps {
  id: number;
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
     page?: string
     search?: string;
     category?: string; }>;
})
 {
  const params = await searchParams;
  const page = Number(params.page) || 1;

// Extract search and category from params, providing default empty strings if they are not present
   const search = params.search || "";
  const category = params.category || "";

  const data = await getProducts(page, 20, search, category);

  return (
    <main className="p-6 text-black bg-black mx-auto">
      <h1 className="text-2xl text-white font-bold mb-6">Products</h1>
     
        <SearchBar />
  <CategoryFilter />

      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-screen items-stretch">
        
        {/* Check if there are no products and display a message, otherwise map through the products and display them using the ItemCard component */}
        {data?.products?.length === 0 ? (
          <p className="text-center col-span-full md:text-3xl text-2xl text-red-300">
            No products found
          </p>
        ) : (
          data.products.map((product: ItemCardProps) => (
            <ItemCard key={product.id} product={product} />
          ))
        )}

      </div>
     
{/* Pagination Controls */}
<div className="flex justify-center items-center  gap-4 mt-8 w-full mx-auto ">
  
  {/* Previous Button */}
  <Link
    href={`/?page=${page - 1}`}
    className={`px-4 py-2 rounded ${
      page === 1
        ? "bg-gray-300 cursor-not-allowed pointer-events-none"
        : "bg-white hover:bg-gray-200"
    }`}
  >
    Previous
  </Link>

  {/* Page Indicator */}
  <span className="text-white font-semibold">
    Page {page} of {Math.ceil(data.total / data.limit)}
  </span>

  {/* Next Button */}
  <Link
    href={`/?page=${page + 1}`}
    className={`px-4 py-2 rounded ${
      page >= Math.ceil(data.total / data.limit)
        ? "bg-gray-300 cursor-not-allowed pointer-events-none"
        : "bg-white hover:bg-gray-200"
    }`}
  >
    Next
  </Link>

</div>
    </main>
  );
}