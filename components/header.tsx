"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-amber-600">
              HugToyz
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
             <Link href="/about" className="text-gray-600 hover:text-amber-600">
              About Us
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-amber-600">
              Products
            </Link>
            <Link href="/about/design" className="text-gray-600 hover:text-amber-600">
              Design & Production
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-amber-600">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-4 px-2 pb-3 pt-2">
            <Link
                href="/about"
                className="block px-3 py-2 text-gray-600 hover:text-amber-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/products"
                className="block px-3 py-2 text-gray-600 hover:text-amber-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about/design"
                className="block px-3 py-2 text-gray-600 hover:text-amber-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Design & Production
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-amber-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}