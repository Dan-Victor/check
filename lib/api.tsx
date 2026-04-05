// declared the base url for the api
const BASE_URL = "https://dummyjson.com/products";

// function to fetch products with pagination, search and category filter
export const getProducts = async (
  page: number = 1,
  limit: number = 20,
  search?: string,
  category?: string
) => {
  // calculating the skip value for pagination
  const skip = (page - 1) * limit;

  // default url (no search or filter)
  let url = `${BASE_URL}?limit=${limit}&skip=${skip}`;

  // if user is searching
  if (search) {
    url = `${BASE_URL}/search?q=${search}&limit=${limit}&skip=${skip}`;
  }

  // if category is selected (overrides search)
  if (category) {
    url = `${BASE_URL}/category/${category}?limit=${limit}&skip=${skip}`;
  }

  // fetching the products
  const response = await fetch(url);

  // error handling
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  // convert to JSON
  const data = await response.json();

  return data;
};

// function to fetch a single product by id
export async function getSingleProduct(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}