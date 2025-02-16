import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-amber-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-600">HugToyz</h3>
            <p className="text-gray-600">
              Bringing joy and comfort through premium plush toys since 2024.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase text-gray-600">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-amber-600">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-amber-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-amber-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase text-gray-600">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Email: bingwell.guo@gmail.com</li>
              <li>Response Time: Within 24 hours</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase text-gray-600">Newsletter</h4>
            <p className="text-gray-600">Stay updated with our latest products and offers.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-amber-200 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} HugToyz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}