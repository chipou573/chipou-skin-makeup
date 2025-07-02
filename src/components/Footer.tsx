import { Facebook, Instagram, Mail, Phone, ShoppingBag } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="text-xl font-bold text-primary mb-2">Chipou</div>
          <p>Maquillage professionnel pour tous les types de peau.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Produits</h4>
          <ul className="space-y-1">
            <li>Fond de teint</li>
            <li>Rouge à lèvres</li>
            <li>Soins visage</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="space-y-1">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +235 69806741</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@chipou.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Suivez-nous</h4>
          <div className="flex gap-3">
            <Instagram className="w-5 h-5" />
            <Facebook className="w-5 h-5" />
            <ShoppingBag className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8">© 2025 Chipou. Tous droits réservés.</div>
    </footer>
  );
}
