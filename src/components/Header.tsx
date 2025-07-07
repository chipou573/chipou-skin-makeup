import { Search, User, Menu } from "lucide-react";
import { useState } from "react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-pink-100 to-pink-200 px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo + texte collés au bord gauche */}
        <div className="flex items-center gap-3">
          <img
            src="src/assets/logo.png"
            alt="Logo Chipou"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-pink-700">
            Chipou Skin & Makeup
          </span>
        </div>

        {/* Navigation desktop centrée */}
        <nav className="hidden md:flex gap-6 text-pink-700 font-medium text-sm absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a href="#accueil" className="hover:text-pink-500 transition">
            Accueil
          </a>
          <a href="#apropos" className="hover:text-pink-500 transition">
            À propos
          </a>
          <a href="#produits" className="hover:text-pink-500 transition">
            Produits
          </a>
          <a href="#contact" className="hover:text-pink-500 transition">
            Contact
          </a>
        </nav>

        {/* Icônes & menu hamburger mobile */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-pink-700 hover:text-pink-500 cursor-pointer transition" />
          <User className="w-5 h-5 text-pink-700 hover:text-pink-500 cursor-pointer transition" />

          {/* Bouton hamburger visible seulement en mobile */}
          <Menu
            className="w-6 h-6 text-pink-700 md:hidden cursor-pointer hover:text-pink-500 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-pink-700 px-6 py-4 shadow-md">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            <a href="#accueil" className="hover:text-pink-500 transition">
              Accueil
            </a>
            <a href="#apropos" className="hover:text-pink-500 transition">
              À propos
            </a>
            <a href="#produits" className="hover:text-pink-500 transition">
              Produits
            </a>
            <a href="#contact" className="hover:text-pink-500 transition">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
