import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl">🌿</div>
            <span className="text-2xl font-bold text-green-700">PlantIQ</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-green-700 transition">Inicio</a>
            <a href="#" className="text-gray-700 hover:text-green-700 transition">Identificar Planta</a>
            <a href="#" className="text-gray-700 hover:text-green-700 transition">Guía Cuidados</a>
            <a href="#" className="text-gray-700 hover:text-green-700 transition">Comunidad</a>
            <a href="#" className="text-gray-700 hover:text-green-700 transition">Blog</a>
          </div>

          {/* Search y Perfil */}
          <div className="hidden md:flex items-center gap-4">
            <input
              type="text"
              placeholder="Buscar"
              className="bg-gray-100 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
              Mi Perfil
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <a href="#" className="text-gray-700 hover:text-green-700 transition">Inicio</a>
            <a href="#" className="text-gray-700 hover:text-green-700 transition">Identificar Planta</a>
            <a href="#" className="text-gray-700 hover:text-green-700 transition">Guía Cuidados</a>
            <a href="#" className="text-gray-700 hover:text-green-700 transition">Comunidad</a>
            <a href="#" className="text-gray-700 hover:text-green-700 transition">Blog</a>
            <input
              type="text"
              placeholder="Buscar"
              className="bg-gray-100 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
              Mi Perfil
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
