import Image from "next/image";
import { Card } from "@/components/ui/card";

const designPrinciples = [
  {
    title: "Child-Centric Design",
    description: "Every toy is designed with children's developmental needs in mind, focusing on tactile experiences and emotional comfort.",
  },
  {
    title: "Safety First",
    description: "We use non-toxic materials and conduct rigorous safety testing to exceed international standards.",
  },
  {
    title: "Durability",
    description: "Our toys are built to withstand years of love and play while maintaining their shape and softness.",
  },
  {
    title: "Emotional Connection",
    description: "Each design aims to create an immediate emotional bond through expressive features and huggable forms.",
  },
];

const productionSteps = [
  {
    title: "Design & Prototyping",
    description: "Our designers create detailed sketches and digital models, followed by hand-crafted prototypes for testing.",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&h=600&q=80",
  },
  {
    title: "Material Selection",
    description: "We source premium, hypoallergenic materials that meet our strict quality and sustainability standards.",
    image: "https://images.unsplash.com/photo-1544441892-794166f1e3be?w=800&h=600&q=80",
  },
  {
    title: "Production",
    description: "Skilled artisans carefully craft each toy using precision stitching and quality control at every step.",
    image: "https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?w=800&h=600&q=80",
  },
  {
    title: "Quality Assurance",
    description: "Every toy undergoes thorough testing for safety, durability, and comfort before packaging.",
    image: "https://images.unsplash.com/photo-1484069560501-87d72b0c3669?w=800&h=600&q=80",
  },
];

export default function DesignPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-amber-50">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">
              Design Philosophy
            </h1>
            <p className="text-xl text-gray-600">
              Crafting joy through thoughtful design and meticulous production.
            </p>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-600 mb-12 text-center">
            Our Design Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designPrinciples.map((principle) => (
              <Card key={principle.title} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-amber-600 mb-4">
                  {principle.title}
                </h3>
                <p className="text-gray-600">{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-600 mb-12 text-center">
            Our Production Process
          </h2>
          <div className="space-y-16">
            {productionSteps.map((step, index) => (
              <div
                key={step.title}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="relative h-[300px] md:h-[400px]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover rounded-lg shadow-xl"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-600 text-white font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-amber-600">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-amber-600">
              Our Quality Standards
            </h2>
            <p className="text-lg text-gray-600">
              Every HugToyz product undergoes extensive testing and quality control to ensure it meets
              our high standards for safety, durability, and comfort. We comply with and exceed
              international toy safety standards, including EN71, ASTM F963, and CPSIA requirements.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {['Safety Tested', 'Non-Toxic', 'Hypoallergenic', 'Durability Certified'].map((cert) => (
                <div key={cert} className="p-4 bg-amber-50 rounded-lg">
                  <p className="font-semibold text-amber-600">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}