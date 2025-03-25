# API Restaurant et Contact

Ce projet contient deux APIs distinctes :
1. Une API de menu de restaurant
2. Une API de contact

## Installation

```bash
npm install
```

## Démarrer le serveur

```bash
node src/index.js
```

Le serveur démarre sur : `http://localhost:3000`

## Structure du Projet

```
├── src/
│   ├── index.js      # Serveur principal
│   ├── data.json     # Données du menu
│   ├── testApi.js    # Tests de l'API menu
│   └── jessica.js    # Tests de l'API contact
├── package.json
└── README.md
```

## Les Routes Disponibles

### 1. API Menu (GET)

#### Obtenir tout le menu
```http
GET /api/menu
```

Exemple de réponse :
```json
[
    {
        "plate": "Hello World Burger",
        "description": "Un cheeseburger classique",
        "image": "🍔"
    },
    ...
]
```

#### Obtenir un plat spécifique
```http
GET /api/menu/:plate
```

### 2. API Contact (POST)

#### Envoyer un numéro
```http
POST /api/giveNumber
```

Body :
```json
{
    "number": "06XXXXXXXX"
}
```

## Tests des APIs

### Tester l'API Menu
```bash
node src/testApi.js
```

### Tester l'API Contact
```bash
node src/jessica.js
```

## Différence entre GET et POST

### GET (/api/menu)
- Utilisé pour récupérer les données du menu
- Paramètres dans l'URL
- Ne modifie pas les données
- Exemple : `http://localhost:3000/api/menu`

### POST (/api/giveNumber)
- Utilisé pour envoyer un numéro
- Données dans le body de la requête
- Peut modifier les données
- Exemple avec fetch :
```javascript
fetch('http://localhost:3000/api/giveNumber', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ number: "06XXXXXXXX" })
})
```

Ce README est maintenant basé sur votre structure de projet actuelle et inclut tous vos fichiers existants. Il montre comment :
1. Installer et démarrer le projet
2. La structure de vos fichiers
3. Les différentes routes disponibles
4. Comment tester les APIs
5. La différence entre GET et POST avec des exemples concrets de votre code
