import { useRef, useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

export default function UploadZone({ onFileSelect, isLoading, onAnalyze }) {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file) => {
    setFileName(file.name);

    // Crear preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
    };
    reader.readAsDataURL(file);

    // Pasar archivo al componente padre
    onFileSelect(file);
  };

  const handleInputChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        
        {/* Preview de imagen */}
        <div className="hidden md:flex justify-center">
          {preview ? (
            <div className="w-full max-w-sm">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          ) : (
            <div className="w-full max-w-sm text-center">
              <div className="text-6xl mb-4">🪴</div>
              <p className="text-gray-500">Aquí aparecerá el preview de tu foto</p>
            </div>
          )}
        </div>

        {/* Zona drag-drop */}
        <div>
          <div
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleClick}
            className={`border-2 border-dashed rounded-lg p-8 md:p-12 text-center cursor-pointer transition ${
              isDragging
                ? 'border-green-600 bg-green-50'
                : 'border-gray-300 hover:border-green-600 hover:bg-green-50'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/gif,image/webp"
              onChange={handleInputChange}
              className="hidden"
            />

            <div className="flex justify-center mb-4">
              <FiUploadCloud size={48} className="text-green-600" />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Sube la foto de tu planta
            </h3>
            <p className="text-gray-600 mb-4">
              Arrastra y suelta aquí o haz clic para seleccionar
            </p>
            <p className="text-sm text-gray-500">
              Formatos: JPG, PNG, GIF, WebP (máx. 5MB)
            </p>

            {fileName && (
              <div className="mt-4 p-3 bg-green-100 rounded-lg">
                <p className="text-green-800 text-sm">
                  ✓ Archivo seleccionado: {fileName}
                </p>
              </div>
            )}
          </div>

          {/* Mobile preview */}
          {preview && (
            <div className="md:hidden mt-6">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          )}

          {/* Botón de análisis */}
          {preview && (
            <div className="mt-6">
              <button
                onClick={onAnalyze}
                disabled={isLoading}
                className="w-full bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                {isLoading ? 'Analizando...' : 'ANALIZAR PLANTA'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
