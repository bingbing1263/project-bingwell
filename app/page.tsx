import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full bg-amber-50">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-amber-600">
                Toyz for Hugging
              </h1>
              <p className="text-xl text-gray-600">
                Discover our collection of premium plush toys designed to bring joy
                and comfort to people of all ages.
              </p>
              <Button size="lg" asChild>
                <Link href="/products">Shop Now</Link>
              </Button>
            </div>
            <div className="relative h-[400px] hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1555448248-2571daf6344b?w=800&h=800&q=80"
                alt="Cute plush toys arrangement"
                fill
                className="object-cover rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-600">
            Popular Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Animals",
                image: "https://images.unsplash.com/photo-1558679908-541bcf1249ff?w=600&h=400&q=80",
              },
              {
                title: "Fantasy",
                image: "https://images.unsplash.com/photo-1563901935883-cb61f5d49be4?w=600&h=400&q=80",
              },
              {
                title: "Characters",
                image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&q=80",
              },
            ].map((category) => (
              <Card key={category.title} className="overflow-hidden group">
                <Link href="/products" className="block relative">
                  <div className="relative h-64">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-amber-600">
              Join Our Newsletter
            </h2>
            <p className="text-gray-600">
              Subscribe to receive updates about new products, special offers, and
              exclusive discounts.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}