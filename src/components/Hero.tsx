function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-1 px-6 py-3 bg-gradient-to-br from-pink-100 to-white min-h-[40vh] items-center animate-fadeIn">

      <div className="flex flex-col items-end text-right">
        <span className="inline-block bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-xs font-semibold mb-2 animate-slideUp">
          Bienvenue chez Chipou
        </span>
        <h1 className="text-base md:text-xl font-extrabold text-pink-700 leading-snug mb-2 animate-slideUp">
          Sublimez votre peau <br />
          avec notre maquillage expert
        </h1>
        <p className="text-gray-700 mb-2 text-xs md:text-sm animate-fadeIn max-w-md">
          Découvrez notre sélection de produits professionnels adaptés à tous les types de peau.
        </p>
        <div className="flex justify-end flex-wrap gap-2">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-xs font-medium animate-bounceIn">
            Produits
          </button>
          <button className="border border-pink-600 text-pink-600 hover:bg-pink-50 px-4 py-2 rounded-full text-xs font-medium animate-bounceIn">
            Diagnostic
          </button>
        </div>
      </div>
      <div className="flex justify-start items-center h-full ml-4">
        <img
          src="src/assets/image.jpeg"
          alt="Maquillage professionnel"
          className="w-44 h-44 shadow-md object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
