import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useProductStore } from "@/store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    _id: "",
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast.error("Error", {
        description: message,
      });
    } else {
      toast.success("Success", {
        description: message,
      });
    }
    setNewProduct({ name: "", price: "", image: "", _id: ""});
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/2 p-8">
        <h1 className="mb-16 text-center lg:text-7xl font-bold text-5xl">
          Create new Product
        </h1>
        <div className="w-full rounded-lg border p-6 shadow-md">
          <div className="flex flex-col gap-6">
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              name="price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <Button size="lg" className="w-full" onClick={handleAddProduct}>
              Add Product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
