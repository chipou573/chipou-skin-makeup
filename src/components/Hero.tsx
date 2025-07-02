export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto p-8 text-center">
      <header className="mb-12">
        <img
          src="src/assets/logo.jpeg"
          alt="Logo Chipou"
          className="mx-auto h-24 mb-6 rounded-full object-cover"
        />
        <h1 className="text-4xl font-bold text-primary mb-4">Bienvenue chez Chipou</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Découvrez notre maquillage professionnel adapté à tous les types de peau.
        </p>
      </header>

    <section className="grid md:grid-cols-2 gap-8 px-6 py-20 bg-gradient-to-r from-pink-50 to-pink-100">
        <div className="p-6 bg-white rounded shadow">💄 Produits de qualité</div>
        <div className="p-6 bg-white rounded shadow">👥 Clients satisfaits</div>
        <div className="p-6 bg-white rounded shadow">📦 Livraison rapide</div>
      </section>
    </div>
  );
}
