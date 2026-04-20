import plants from '../data/plants.json';

/**
 * Identifica una planta basado en la imagen subida
 * Por ahora, retorna una planta aleatoria como demostración
 * En el futuro, esto puede conectarse con ML/IA
 */
export const identifyPlant = (file) => {
  // Validación básica del archivo
  if (!file) {
    throw new Error('No se proporcionó archivo');
  }

  // Validar tipo de archivo
  const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  if (!validTypes.includes(file.type)) {
    throw new Error('Tipo de archivo inválido. Solo se permiten: JPG, PNG, GIF, WebP');
  }

  // Validar tamaño (máx 5MB)
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    throw new Error('Archivo muy grande. Máximo 5MB');
  }

  // Retornar una planta aleatoria (simulación)
  // En producción, aquí iría lógica de ML/IA
  const randomIndex = Math.floor(Math.random() * plants.length);
  return plants[randomIndex];
};

/**
 * Convierte un archivo a base64 para mostrar preview
 */
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * Obtiene una planta por ID
 */
export const getPlantById = (id) => {
  return plants.find(plant => plant.id === id);
};

/**
 * Obtiene todas las plantas
 */
export const getAllPlants = () => {
  return plants;
};
