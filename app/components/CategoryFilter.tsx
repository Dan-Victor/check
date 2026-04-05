"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = ["smartphones", "laptops", "fragrances", "skincare" , "groceries", "home-decoration", "furniture", "tops", "womens-dresses", "womens-shoes", "mens-shirts", "mens-shoes", "mens-watches", "womens-watches"];

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (category: string) => {
    const params = new URLSearchParams(searchParams);

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    params.set("page", "1");

    router.push(`/?${params.toString()}`);
  };

  return (
    <>
    <label htmlFor="category" className="block mb-2 text-sm font-medium  w-2xl text-white">
      Filter by Category:
    </label>
    <select
      onChange={(e) => handleChange(e.target.value)}
      className="p-3 border bg-white text-black rounded-xl "
    >
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
    </>
  );
}