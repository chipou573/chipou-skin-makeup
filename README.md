# 💄 Chipou Skin & Maquillage

Bienvenue dans le projet **Chipou Skin & Maquillage**, une plateforme élégante et interactive dédiée à la beauté de la peau et au maquillage professionnel. Ce projet combine design raffiné, base de données relationnelle solide et composants web modulaires.

![Logo Chipou](./src/assets/logo.png) <!-- Remplace par le bon chemin si nécessaire -->

---

## ✨ Fonctionnalités principales

- 🎨 Interface interactive et responsive (Adobe XD + Tailwind CSS)
- 🧱 Architecture modulaire avec React + TypeScript
- 🗃️ Base de données relationnelle avec MCD, MLD, MPD
- ��️ Pages produits, profils utilisateurs, diagnostic personnalisé
- 📱 Design Web1920 optimisé pour desktop et mobile

---

## 🛠️ Technologies utilisées

| Frontend        | Backend / Données     | Outils & Design        |
|-----------------|------------------------|------------------------|
| React + TypeScript | MCD / MLD / MPD (Merise) | Adobe XD              |
| Tailwind CSS    | PostgreSQL (ou MySQL)  | Git & GitHub           |
| Vite            |                        | Figma (optionnel)      |

---

## 🚀 Lancer le projet en local

```bash
# Cloner le dépôt
git clone https://github.com/chipou573/chipou-skin-maquillage.git

# Accéder au dossier
cd chipou-skin-maquillage

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev


structure du projet

chipou-skin-maquillage/
├── public/
├── src/
│   ├── assets/         # Images, logos
│   ├── components/     # Composants React réutilisables
│   ├── pages/          # Pages principales (Accueil, Produits, Profil)
│   ├── styles/         # Fichiers CSS/Tailwind
│   └── App.tsx         # Point d’entrée principal
├── README.md
└── package.json
