// for the loading state while the data is being fetched from the api this shows a loading state which will be a skeleton loader
export default function Loading() {
  return (
    <>
      <h1 className="text-2xl text-white font-bold  p-6">Products</h1>

    <div className="fixed inset-0 z-50 flex justify-center items-center w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-48 w-64 bg-gray-200 animate-pulse rounded-xl"
          />
        ))}
      </div>
    </div>
    </>
  );
}