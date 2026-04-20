export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¡Descubre el mundo de tus plantas!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Sube una foto y obtén toda la información sobre tu planta: tipo, cuidados, historia y más.
          </p>
          
          {/* Decorative plants */}
          <div className="flex justify-between items-end">
            <div className="hidden lg:block text-6xl">🪴</div>
            <div className="flex justify-center">
              <div className="text-8xl opacity-20">🌱</div>
            </div>
            <div className="hidden lg:block text-6xl">🌿</div>
          </div>
        </div>
      </div>
    </section>
  );
}
