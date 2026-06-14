# StudiBooth — Landing Page

Landing page pour la **location de photobooth et de caméra 360°** en région **PACA**
(Provence-Alpes-Côte d'Azur), pour mariages, événements et baptêmes.

## ✨ Contenu

Page unique, responsive et sans dépendance (HTML / CSS / JS pur) :

- **Hero** accrocheur avec statistiques et appels à l'action
- **Prestations** : Photobooth premium · Caméra 360° · Pack Duo
- **Occasions** : Mariages · Événements · Baptêmes
- **Galerie** d'ambiance
- **Comment ça marche** en 4 étapes
- **Tarifs** en 3 formules tout compris
- **Témoignages** clients
- **Zone d'intervention** (départements 04, 05, 06, 13, 83, 84)
- **FAQ**
- **Formulaire de devis** (génère un email pré-rempli via `mailto`)
- Menu mobile, animations au scroll, CTA flottant

## 🚀 Lancer le site

Aucune installation requise. Ouvrez simplement `index.html` dans un navigateur,
ou servez le dossier :

```bash
python3 -m http.server 8000
# puis ouvrez http://localhost:8000
```

## 🛠️ Personnalisation

| Élément | Où le modifier |
| --- | --- |
| Nom, téléphone, email, Instagram | `index.html` (section `#contact` et footer) |
| Tarifs et formules | `index.html` (section `#tarifs`) |
| Couleurs / thème | variables CSS dans `:root` (`styles.css`) |
| Villes & départements | `index.html` (section *Zone d'intervention*) |
| Traitement du formulaire | `script.js` (remplacer le `mailto` par votre backend) |

## 📁 Structure

```
.
├── index.html    # Structure & contenu
├── styles.css    # Design (thème sombre élégant, responsive)
├── script.js     # Menu mobile, animations, formulaire
└── README.md
```

## 📝 Notes

- Les images de la galerie et des occasions sont des dégradés CSS (placeholders).
  Remplacez-les par vos photos réelles pour la mise en production.
- Le formulaire fonctionne en front uniquement (ouverture de la messagerie).
  Branchez un service (Formspree, Netlify Forms, backend…) pour un envoi automatique.
