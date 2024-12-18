import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-900">TutorInn</h1>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Subjects</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          </nav>
        </div>
      </div>
    </header>
  );
}