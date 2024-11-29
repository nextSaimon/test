"use client"
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Mobile menu button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed z-50 top-4 right-4 p-2 rounded-md bg-gray-800 text-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu (slide from left) */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
        md:relative md:transform-none md:shadow-none md:w-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex flex-col md:flex-row md:items-center p-4 gap-4">
          <Link 
            href="/" 
            className="text-gray-800 hover:text-gray-600 transition-colors text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/students" 
            className="text-gray-800 hover:text-gray-600 transition-colors text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Students
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-800 hover:text-gray-600 transition-colors text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link 
            href="/study" 
            className="text-gray-800 hover:text-gray-600 transition-colors text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Study
          </Link>
        
          <Link 
            href="/courses" 
            className="text-gray-800 hover:text-gray-600 transition-colors text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Courses
          </Link>
          <Link 
            href="/t" 
            className="text-gray-800 hover:text-gray-600 transition-colors text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Title
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
