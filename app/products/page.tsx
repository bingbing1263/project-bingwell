import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Cuddly Bear",
    description: "A soft and huggable teddy bear perfect for all ages.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1559454403-b8fb88521f77?w=600&h=400&q=80",
    category: "Animals",
  },
  {
    id: 2,
    name: "Rainbow Unicorn",
    description: "Magical unicorn with rainbow mane and sparkly details.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1563901935883-cb61f5d49be4?w=600&h=400&q=80",
    category: "Fantasy",
  },
  {
    id: 3,
    name: "Sleepy Sloth",
    description: "Ultra-soft sloth plush that's perfect for naptime.",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&q=80",
    category: "Animals",
  },
  {
    id: 4,
    name: "Baby Dragon",
    description: "Adorable dragon plush with detailed wings and scales.",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1558679908-541bcf1249ff?w=600&h=400&q=80",
    category: "Fantasy",
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-amber-600 mb-8">Our Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <span className="text-lg font-bold text-amber-600">
                  ${product.price}
                </span>
              </div>
              <p className="text-gray-600">{product.description}</p>
              <Button className="w-full">View Details</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}