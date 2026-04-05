"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("search") || "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }

      params.set("page", "1"); // reset page

      router.push(`/?${params.toString()}`);
    }, 500); // debounce

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="   w-full mx-auto max-w-[60%]">
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full p-4   mx-auto bg-white rounded-xl"
    />
    <br />
    </div>
  );
}