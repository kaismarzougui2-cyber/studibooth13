# StudioBooth13 — Site vitrine

Site web de **StudioBooth13**, location de **photobooths et cabines 360°** pour
événements (mariages, anniversaires, soirées d'entreprise) à **Marseille** et
dans tout le **sud de la France**.

Site statique multi-pages (HTML / CSS / JS pur, sans build) — thème clair &
doré, élégant et festif, police **SF Pro**.

## 📄 Pages

| Fichier | Page |
| --- | --- |
| `index.html` | Accueil |
| `photobooth.html` | Photobooth (classique & vintage) |
| `cabine-360.html` | 360 Booth |
| `stand-porte-cles.html` | Stand Porte-clés personnalisés |
| `tarifs.html` | Tarifs (formules + tableau + options + FAQ) |
| `contact.html` | Contact & formulaire de réservation |

Fichiers partagés : `styles.css` (design) et `script.js` (menu mobile,
animations au scroll, formulaire, boutons flottants).

## ✨ Fonctionnalités

- Header sticky + navigation avec état actif par page
- Menu mobile (burger)
- Animations au scroll
- **Bouton WhatsApp flottant** (+ bouton « Réserver » flottant qui apparaît au scroll)
- Cartes produits, étapes, témoignages, grille tarifaire et tableau de prix
- FAQ dépliable
- Formulaire de réservation (génère un email pré-rempli via `mailto`)

## 🚀 Lancer le site

Aucune installation requise. Ouvrez `index.html`, ou servez le dossier :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## 📞 Coordonnées (à jour dans le footer et la page contact)

- **Email** : studiobooth13@outlook.com
- **Téléphone / WhatsApp** : 06 98 95 96 79 (`tel:+33698959679` / `https://wa.me/33698959679`)
- **Instagram** : https://instagram.com/studiobooth13
- **Zone** : Marseille et tout le sud de la France

## 🛠️ Personnalisation

| Élément | Où |
| --- | --- |
| Couleurs / thème doré | variables CSS dans `:root` (`styles.css`) |
| Tarifs & formules | `tarifs.html` |
| Coordonnées / réseaux | footer de chaque page + `contact.html` |
| Envoi du formulaire | `script.js` — remplacer le `mailto` par EmailJS / API |

## 📝 Notes

- Les visuels (galerie, produits, splits) sont des **dégradés CSS** servant de
  placeholders. Remplacez-les par vos vraies photos/vidéos avant mise en ligne,
  et ajoutez une image `og-image.jpg` pour le partage sur les réseaux.
- Le formulaire fonctionne en front (ouverture de la messagerie). Le site
  d'origine utilisait EmailJS (`service_7u97pa8` / `template_sqzrs9y`) — branchez
  la solution d'envoi de votre choix pour un envoi automatique.
- Tarifs intégrés fidèlement depuis le contenu fourni ; vérifiez les montants
  promotionnels avant publication.
