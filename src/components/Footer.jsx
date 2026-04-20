import { FiFacebook, FiInstagram, FiYoutube, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Logo y Descripción */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl">🌿</div>
              <span className="text-xl font-bold text-white">PlantIQ</span>
            </div>
            <p className="text-sm text-gray-400">
              Identifica plantas y aprende todo sobre sus cuidados.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-semibold text-white mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition">Inicio</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Identificar Planta</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Guía de Cuidados</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition">Acerca de Nosotros</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Contacto</a></li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="font-semibold text-white mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-green-400 transition">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="hover:text-green-400 transition">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="hover:text-green-400 transition">
                <FiYoutube size={20} />
              </a>
              <a href="#" className="hover:text-green-400 transition">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>© {currentYear} PlantIQ. Todos los derechos reservados. Hecho con 🌱 para los amantes de las plantas.</p>
        </div>
      </div>
    </footer>
  );
}
