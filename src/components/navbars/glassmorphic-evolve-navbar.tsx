"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavLink {
  name: string
  href: string
}

export default function GlassmorphicEvolveNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Event", href: "/event" },
    { name: "Contact Us", href: "/contact" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5" 
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <span className="text-2xl font-bold text-blue-900">Evolve AI</span>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-navigation text-gray-800 hover:text-blue-900 transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA and University Logo */}
          <div className="hidden lg:flex items-center space-x-6">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get In Touch
            </Button>
            <div className="flex items-center space-x-1">
              <span className="text-lg font-bold text-black">CHITKARA UNIVERSITY</span>
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-800 hover:text-blue-900 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-white/20">
            <div className="flex flex-col space-y-4 pt-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-navigation text-gray-800 hover:text-blue-900 transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 space-y-4">
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white py-3 rounded-full font-medium transition-all duration-200"
                >
                  Get In Touch
                </Button>
                <div className="flex items-center justify-center space-x-1 pt-2">
                  <span className="text-sm font-bold text-black">CHITKARA UNIVERSITY</span>
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}