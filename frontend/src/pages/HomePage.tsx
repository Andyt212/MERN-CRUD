import { useProductStore } from "@/store/product";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  return (
    <div className="flex flex-col gap-8 px-12">
      <h1 className="flex justify-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text p-4 text-center text-4xl font-bold text-transparent lg:text-5xl">
        Current Products 🚀
      </h1>

      <div className="flex justify-center">
        <div className="grid w-10/12 grid-cols-2 gap-10 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

      {products.length === 0 && (
        <h2 className="text-center text-3xl font-bold text-gray-500">
          No products found 😢{" "}
          <Link to={"/create"}>
            <span className="text-blue-500 hover:underline">
              Create a product
            </span>
          </Link>
        </h2>
      )}
    </div>
  );
};

export default HomePage;
