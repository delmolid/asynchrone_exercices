# Gestionnaire de Langages de Programmation

Une application web permettant de gérer une liste de langages de programmation avec une interface utilisateur intuitive.

## Installation

```bash
npm install
```

## Démarrer le serveur

```bash
npx nodemon src/exercice.js
```

Le serveur démarre sur : `http://localhost:3000`

## Structure du Projet

```
├── src/
│   ├── exercice.js    # Serveur Express
│   ├── client.js      # Code JavaScript client
│   ├── index.html     # Interface utilisateur
│   └── data.json      # Base de données des langages
├── package.json
└── README.md
```

## Les Routes Disponibles

### API Langages

#### Obtenir tous les langages (GET)
```http
GET /languages
```

Exemple de réponse :
```json
[
    "html",
    "css",
    "javascript",
    "python"
]
```

#### Modifier un langage (PUT)
```http
PUT /languages/:name
```

Body :
```json
{
    "language": "nouveau_langage"
}
```

#### Ajouter un langage (POST)
```http
POST /languages
```

Body :
```json
{
    "language": "nouveau_langage"
}
```

#### Supprimer un langage (DELETE)
```http
DELETE /languages/:name
```

## Interface Utilisateur

L'application propose une interface graphique avec :
- Affichage du nombre de langages
- Formulaire de modification de langage
- Formulaire d'ajout de langage
- Formulaire de suppression de langage

## Différence entre les méthodes HTTP

### GET (/languages)
- Utilisé pour récupérer la liste des langages
- Pas de body nécessaire
- Ne modifie pas les données

### PUT (/languages/:name)
- Utilisé pour modifier un langage existant
- Nécessite un body avec le nouveau nom
- Modifie les données existantes

### POST (/languages)
- Utilisé pour ajouter un nouveau langage
- Nécessite un body avec le nom du langage
- Ajoute de nouvelles données

### DELETE (/languages/:name)
- Utilisé pour supprimer un langage
- Pas de body nécessaire
- Supprime des données existantes

## Utilisation

1. Lancer le serveur avec `npx nodemon src/exercice.js`
2. Ouvrir `index.html` avec Live Server dans VS Code
3. Utiliser l'interface pour gérer les langages
