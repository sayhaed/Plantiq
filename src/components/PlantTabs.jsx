import { useState } from 'react';
import { FiDroplet, FiSun, FiThermometer, FiAlertCircle } from 'react-icons/fi';

export default function PlantTabs({ plant }) {
  const [activeTab, setActiveTab] = useState('resumen');

  const tabs = [
    { id: 'resumen', label: 'Resumen', icon: '📋' },
    { id: 'cuidados', label: 'Cuidados Específicos', icon: '🌱' },
    { id: 'historia', label: 'Datos Históricos', icon: '📚' },
    { id: 'crecimiento', label: 'Guía de Crecimiento', icon: '📈' },
    { id: 'enfermedades', label: 'Enfermedades Comunes', icon: '⚠️' },
    { id: 'galeria', label: 'Galería de Fotos', icon: '📸' },
  ];

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="border-b border-gray-200 overflow-x-auto">
        <div className="flex gap-1 md:gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 md:px-4 py-3 whitespace-nowrap text-sm md:text-base font-medium transition border-b-2 ${
                activeTab === tab.id
                  ? 'border-green-600 text-green-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              <span className="hidden sm:inline">{tab.icon} </span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs Content */}
      <div className="py-8">
        {/* Resumen */}
        {activeTab === 'resumen' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Información General</h3>
            <p className="text-gray-700 leading-relaxed">
              {plant.descripcionGeneral}
            </p>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Nombre científico:</strong> {plant.nombreCientifico}
              </p>
              <p className="text-sm text-blue-800 mt-2">
                <strong>Nombre común:</strong> {plant.nombreComun}
              </p>
            </div>
          </div>
        )}

        {/* Cuidados Específicos */}
        {activeTab === 'cuidados' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Cuidados Específicos</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* Luz */}
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-2">
                  <FiSun className="text-yellow-600" size={24} />
                  <h4 className="font-semibold text-gray-800">Luz</h4>
                </div>
                <p className="text-gray-700">{plant.cuidados.luz}</p>
              </div>

              {/* Riego */}
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <FiDroplet className="text-blue-600" size={24} />
                  <h4 className="font-semibold text-gray-800">Riego</h4>
                </div>
                <p className="text-gray-700">{plant.cuidados.riego}</p>
              </div>

              {/* Humedad */}
              <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💧</span>
                  <h4 className="font-semibold text-gray-800">Humedad</h4>
                </div>
                <p className="text-gray-700">{plant.cuidados.humedad}</p>
              </div>

              {/* Temperatura */}
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <FiThermometer className="text-red-600" size={24} />
                  <h4 className="font-semibold text-gray-800">Temperatura</h4>
                </div>
                <p className="text-gray-700">{plant.cuidados.temperatura}</p>
              </div>
            </div>
          </div>
        )}

        {/* Datos Históricos */}
        {activeTab === 'historia' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Historia y Curiosidades</h3>
            <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-gray-700 leading-relaxed">
                {plant.historia}
              </p>
            </div>
          </div>
        )}

        {/* Guía de Crecimiento */}
        {activeTab === 'crecimiento' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Guía de Crecimiento</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Tipo de suelo</h4>
                <p className="text-gray-700">
                  Suelo fértil y bien drenado. Mezcla con compost para mejor nutrición.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Propagación</h4>
                <p className="text-gray-700">
                  Se puede propagar mediante esquejes en agua o tierra durante la primavera y verano.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Abono</h4>
                <p className="text-gray-700">
                  Aplicar abono líquido cada 2-4 semanas durante la estación de crecimiento (primavera y verano).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Enfermedades Comunes */}
        {activeTab === 'enfermedades' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Enfermedades Comunes</h3>
            <div className="space-y-3">
              {plant.enfermedades.map((enfermedad, index) => (
                <div key={index} className="p-4 bg-orange-50 rounded-lg border border-orange-200 flex gap-3">
                  <FiAlertCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-orange-800">{enfermedad}</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      Síntomas: Inspecciona regularmente las hojas y tallos. Aplica neem o insecticidas naturales si es necesario.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Galería */}
        {activeTab === 'galeria' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Galería de Fotos</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {plant.galeria.map((foto, index) => (
                <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                    <span className="text-4xl">🌿</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">
              Imágenes de demostración. En versión futura se cargarán imágenes reales.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
