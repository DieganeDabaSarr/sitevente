# ELEGANCE 2.0 — Mini Site E-commerce

Projet final du module Développement Web — Création d'un mini site e-commerce dynamique.

## Membres du groupe

-

## Description du projet

ELEGANCE 2.0 est une boutique en ligne dynamique affichant des produits de luxe (parfums, vêtements, accessoires, montres, chaînes) et permettant aux utilisateurs de gérer un panier d'achat persistant. Le site est entièrement réalisé en HTML, CSS et JavaScript natif.

## Fonctionnalités réalisées

### Obligatoires
- **Affichage des produits** — Récupération via `fetch()`, affichage de l'image, nom, prix et description
- **Panier d'achat** — Ajout, suppression, modification de quantité, compteur d'articles, total calculé
- **Manipulation du DOM** — `getElementById`, `querySelector`, `createElement`, `appendChild`, `textContent`, `innerHTML`
- **Gestion des événements** — `addEventListener` sur les clics, saisies clavier, changements de sélecteur
- **LocalStorage** — Le panier et le mode sombre sont sauvegardés entre les actualisations
- **Responsive Design** — Adapté ordinateur, tablette et mobile

### Bonus
- Recherche de produits en temps réel
- Filtre par catégorie
- Tri par prix (croissant / décroissant) et par nom
- Modal de détail produit avec note et avis
- Animations CSS (cards, sidebar, modal)
- Mode sombre persistant

## Technologies utilisées

- HTML5
- CSS3 (variables CSS, Grid, Flexbox, media queries)
- JavaScript natif (ES6+)
- Fetch API
- LocalStorage

## API utilisée

[Fake Store API](https://fakestoreapi.com) — `https://fakestoreapi.com/products`

## Structure du projet

```
siteDiene/
├── index.html
├── style.css
├── script.js
└── README.md
```
