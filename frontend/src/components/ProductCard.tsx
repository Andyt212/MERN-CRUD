import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useProductStore } from "@/store/product";
import { Pencil, Trash } from "@phosphor-icons/react";
import { toast } from "sonner";
import { useState, useRef } from "react";
import { Product } from "@/types/types.ts";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const dialogCloseRef = useRef<HTMLButtonElement>(null); // Ref for DialogClose

  const { deleteProduct, updateProduct } = useProductStore();
  const handleDeleteProduct = async (pid: string) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast.error("Error", {
        description: message,
      });
    } else {
      toast.success("Success", {
        description: message,
      });
    }
  };

  const handleUpdateProduct = async (pid: string, updatedProduct: Product) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    dialogCloseRef.current?.click();
    if (!success) {
      toast.error("Error", {
        description: message,
      });
    } else {
      toast.success("Success", {
        description: "Product updateed successfully",
      });
    }
  };

  return (
    <div className="overflow-hidden rounded-lg border-4 shadow hover:-translate-y-2 hover:shadow-xl">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="mb-2">{product.name}</h3>
        <h4 className="mb-4 text-xl font-bold">${product.price}</h4>
        <div className="flex flex-row gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" className="bg-blue-400">
                <Pencil weight="bold" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle className="pb-4">Update Product</DialogTitle>
              <DialogHeader className="gap-4">
                <Input
                  placeholder="Product Name"
                  name="name"
                  value={updatedProduct.name}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      name: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Price"
                  name="price"
                  type="number"
                  value={updatedProduct.price}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      price: e.target.value,
                    })
                  }
                  className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <Input
                  placeholder="Image URL"
                  name="image"
                  value={updatedProduct.image}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      image: e.target.value,
                    })
                  }
                />
              </DialogHeader>
              <DialogFooter>
                <Button
                  className="bg-blue-400"
                  onClick={() =>
                    handleUpdateProduct(product._id, updatedProduct)
                  }
                >
                  Update
                </Button>
                <DialogClose asChild ref={dialogCloseRef}>
                  <Button variant="secondary">Cancel</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button
            size="icon"
            className="bg-red-300"
            onClick={() => handleDeleteProduct(product._id)}
          >
            <Trash weight="fill" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
