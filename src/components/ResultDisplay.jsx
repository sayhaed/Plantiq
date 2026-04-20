import PlantTabs from './PlantTabs';

export default function ResultDisplay({ plant, previewImage }) {
  if (!plant) return null;

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Resultado de la Identificación */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Resultado de la Identificación
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            
            {/* Imagen y datos básicos */}
            <div className="flex flex-col items-center">
              {previewImage && (
                <div className="w-full max-w-sm mb-6">
                  <img
                    src={previewImage}
                    alt={plant.nombre}
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                  />
                </div>
              )}
              
              <div className="w-full bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
                <p className="text-sm text-gray-600 mb-2">Identificación Completa! Tu planta es una:</p>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {plant.nombre}
                </h3>
                <p className="text-lg text-gray-600 italic mb-4">
                  {plant.nombreComun}
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <strong>Nombre científico:</strong> {plant.nombreCientifico}
                  </p>
                </div>
              </div>
            </div>

            {/* Resumen rápido */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200 text-center">
                <div className="text-3xl mb-2">☀️</div>
                <h4 className="font-semibold text-gray-800 text-sm mb-2">Luz</h4>
                <p className="text-xs text-gray-700">{plant.cuidados.luz.split('.')[0]}</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200 text-center">
                <div className="text-3xl mb-2">💧</div>
                <h4 className="font-semibold text-gray-800 text-sm mb-2">Riego</h4>
                <p className="text-xs text-gray-700">{plant.cuidados.riego.split('.')[0]}</p>
              </div>

              <div className="bg-cyan-50 p-4 rounded-lg border-2 border-cyan-200 text-center">
                <div className="text-3xl mb-2">🌫️</div>
                <h4 className="font-semibold text-gray-800 text-sm mb-2">Humedad</h4>
                <p className="text-xs text-gray-700">Moderada a Alta</p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200 text-center">
                <div className="text-3xl mb-2">🌡️</div>
                <h4 className="font-semibold text-gray-800 text-sm mb-2">Temperatura</h4>
                <p className="text-xs text-gray-700">{plant.cuidados.temperatura.split('.')[0]}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs de información */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <PlantTabs plant={plant} />
        </div>
      </div>
    </section>
  );
}
