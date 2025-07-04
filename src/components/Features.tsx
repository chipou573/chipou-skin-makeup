import {
  Smile,
  Droplet,
  Feather,
  Heart,
  ShoppingCart,
  ClipboardList,
  Truck,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: Smile,
    title: "Naturel",
    desc: "Maquillage à base d'ingrédients naturels.",
    produit: "Fond de teint bio à l'argile rose",
    image: "src/assets/image1_.png",
    bgcolor: "bg-blue-500",
    showImage: true,
  },
  {
    icon: Droplet,
    title: "Hydratant",
    desc: "Formules qui respectent votre peau.",
    produit: "Sérum teinté hydratant à l'aloe vera",
    image: "src/assets/image2.jpg",
    bgcolor: "bg-fuchsia-500",
    showImage: true,
  },
  {
    icon: Feather,
    title: "Léger",
    desc: "Sensation de peau nue garantie.",
    produit: "BB crème aérienne SPF 20",
    image: "src/assets/image3.jpg",
    bgcolor: "bg-indigo-500",
    showImage: true,
  },
  {
    icon: Heart,
    title: "Adapté",
    desc: "Pour tous types de peaux.",
    produit: "Poudre minérale universelle",
    image: "src/assets/image4.jpg",
    bgcolor: "bg-green-500",
    showImage: true,
  },
];

const services = [
  { icon: ShoppingCart, title: "Achat" },
  { icon: ClipboardList, title: "Commande" },
  { icon: Truck, title: "Livraison" },
  { icon: Headset, title: "Assistance" },
];

export default function Features() {
  return (
    <>
      {/* Section Produits */}
      <section className="px-4 py-6 bg-[#fdfaf7] max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-pink-700">Pourquoi choisir Chipou ?</h2>
          <p className="text-gray-600 text-sm">Des produits pensés pour sublimer chaque peau</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
          {features.map(({ icon: Icon, title, desc, produit, image, bgcolor, showImage }) => (
            <div
              key={title}
              className="p-3 rounded shadow-sm border bg-white flex flex-col justify-between w-56 h-56 mx-auto"
            >
              <div>
                <div className={`inline-flex items-center justify-center w-6 h-6 rounded-full mb-2 ${bgcolor}`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{title}</h3>
                <p className="text-gray-600 text-xs leading-tight">{desc}</p>
                <p className="mt-1 text-xs italic font-medium">{produit}</p>
              </div>

              {showImage && (
                <div className="mt-3">
                  <img
                    src={image}
                    alt={produit}
                    className="rounded w-full object-contain border"
                    style={{ maxHeight: "70px" }}
                  />
                  <button
                    onClick={() => alert(`Ajouté au panier : ${produit}`)}
                    className="mt-2 bg-pink-600 hover:bg-pink-500 text-white text-xs px-3 py-1 rounded-full transition"
                  >
                    Ajouter
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section Nos Services */}
      <section className="px-4 py-6 bg-white max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-base font-bold text-pink-700">Nos services</h2>
          <p className="text-gray-600 text-xs">Une expérience complète de A à Z</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
          {services.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="p-2 border rounded-lg shadow-sm bg-[#fdfaf7] aspect-square flex flex-col justify-center items-center max-w-[120px] mx-auto"
            >
              <Icon className="mb-1 text-pink-600 w-5 h-5" />
              <p className="text-xs font-medium text-gray-700">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Nos Chiffres */}
      <section className="px-4 py-6 bg-[#fdfaf7] max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-base font-bold text-pink-700">Nos chiffres</h2>
          <p className="text-gray-600 text-xs">Une communauté en pleine confiance</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-pink-700">
          <div className="bg-white p-4 rounded shadow-sm aspect-square flex flex-col justify-center items-center max-w-[140px] mx-auto">
            <p className="text-xl font-bold">+2,500</p>
            <p className="text-[10px] text-gray-700">Produits achetés</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm aspect-square flex flex-col justify-center items-center max-w-[140px] mx-auto">
            <p className="text-xl font-bold">+2,200</p>
            <p className="text-[10px] text-gray-700">Produits livrés</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm aspect-square flex flex-col justify-center items-center max-w-[140px] mx-auto">
            <p className="text-xl font-bold">+1,900</p>
            <p className="text-[10px] text-gray-700">Clients satisfaits</p>
          </div>
        </div>
      </section>
    </>
  );
}
