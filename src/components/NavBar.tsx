import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">FORESEE</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#team"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Meet the Team
            </a>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              Download
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-400 text-gray-300 hover:bg-gray-800"
            >
              GitHub
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 border-t border-gray-800">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#features"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#team"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Meet the Team
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  Download
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-gray-400 text-gray-300 hover:bg-gray-800"
                >
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
