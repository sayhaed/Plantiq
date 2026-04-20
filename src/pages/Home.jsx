import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import UploadZone from '../components/UploadZone';
import ResultDisplay from '../components/ResultDisplay';
import Footer from '../components/Footer';
import { identifyPlant, fileToBase64 } from '../utils/plantIdentifier';

export default function Home() {
  const [identifiedPlant, setIdentifiedPlant] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      setError('Por favor selecciona una imagen');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Obtener preview de la imagen
      const base64 = await fileToBase64(selectedFile);
      setPreviewImage(base64);

      // Simular pequeño delay para que se vea que está procesando
      await new Promise(resolve => setTimeout(resolve, 800));

      // Identificar planta
      const plant = identifyPlant(selectedFile);
      setIdentifiedPlant(plant);
    } catch (err) {
      setError(err.message || 'Error al analizar la imagen');
      setIdentifiedPlant(null);
      setPreviewImage(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIdentifiedPlant(null);
    setPreviewImage(null);
    setSelectedFile(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {!identifiedPlant ? (
          <>
            <HeroSection />
            <UploadZone 
              onFileSelect={handleFileSelect}
              isLoading={isLoading}
              onAnalyze={handleAnalyze}
            />

            {/* Mostrar errores */}
            {error && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-lg">
                  <p className="text-red-800">
                    <strong>Error:</strong> {error}
                  </p>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <ResultDisplay plant={identifiedPlant} previewImage={previewImage} />
            
            {/* Botón reset */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
              <button
                onClick={handleReset}
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Identificar Otra Planta
              </button>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
