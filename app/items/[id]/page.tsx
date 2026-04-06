
import { getSingleProduct } from "@/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>; // params is now a Promise
}) {
  // await the params before using
  const params = await paramsPromise;
  const { id } = params;

  let product;
  try {
    product = await getSingleProduct(id);
  } catch (error) {
    notFound(); // shows 404 if product not found
  }

  return (
    <main className="p-6 w-full mx-auto bg-black text-black  ">
        <div className='text-black bg-white mx-auto flex justify-center p-6 items-center flex-col h-auto rounded-xl w-[80%]'>
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

      <Image
        src={product.thumbnail}
        alt={product.title}
        width={400}
        height={400}
        className="rounded mb-4 object-contain"
        loading="lazy"
      />

      <p className="mb-2 md:w-[50%] text-center">{product.description}</p>
      <p className="mb-2 font-semibold text-lg">${product.price}</p>
      <p className="mb-2"> Rating: {product.rating}</p>
      <p className="text-gray-500">{product.category}</p>

      <p className="mt-12">
        <a href="/" className="text-blue-600 underline">
          ← Back to Products
        </a>
      </p>
      </div>
    </main>
  );
}