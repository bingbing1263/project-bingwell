import Image from "next/image";
import { Card } from "@/components/ui/card";

const values = [
  {
    title: "Quality First",
    description: "Every toy is crafted with premium materials and rigorous quality control.",
  },
  {
    title: "Safety Assured",
    description: "All our products meet or exceed international safety standards.",
  },
  {
    title: "Sustainable Practices",
    description: "We're committed to eco-friendly manufacturing and packaging.",
  },
  {
    title: "Customer Joy",
    description: "Creating happiness through huggable companions is our mission.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-amber-50">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">
              Our Story
            </h1>
            <p className="text-xl text-gray-600">
              Creating moments of joy through the perfect hug since 2024.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1555448248-2571daf6344b?w=800&h=800&q=80"
                alt="Our workshop"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-amber-600">Our Mission</h2>
              <p className="text-gray-600">
                At HugToyz, we believe in the power of a simple hug. Our mission is to create
                the highest quality plush toys that bring comfort, joy, and endless smiles to
                people of all ages. Each toy is thoughtfully designed and crafted with love,
                ensuring it becomes a cherished companion for years to come.
              </p>
              <p className="text-gray-600">
                We take pride in our commitment to quality, safety, and sustainability. Every
                HugToyz product undergoes rigorous testing to meet international safety
                standards while maintaining the perfect balance of softness and durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-600 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="p-6">
                <h3 className="text-xl font-semibold text-amber-600 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}