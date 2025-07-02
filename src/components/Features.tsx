import { Smile, CheckCircle, Leaf, Droplet, Feather, Heart } from "lucide-react";

const features = [
  { icon: Smile, title: "Naturel", desc: "Maquillage à base d'ingrédients naturels." },
  { icon: CheckCircle, title: "Testé", desc: "Testé dermatologiquement." },
  { icon: Leaf, title: "Vegan", desc: "100% cruelty-free." },
  { icon: Droplet, title: "Hydratant", desc: "Formules qui respectent votre peau." },
  { icon: Feather, title: "Léger", desc: "Sensation de peau nue garantie." },
  { icon: Heart, title: "Adapté", desc: "Pour tous types de peaux." },
];

export default function Features() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Pourquoi choisir Chipou ?</h2>
        <p className="text-gray-600">Des produits pensés pour sublimer chaque peau</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="p-6 rounded-lg shadow-md border hover:shadow-xl transition-all"
          >
            <Icon className="w-6 h-6 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}