const express = require('express');
const app = express();
const port = 3000;

// Import des données du fichier JSON
const menuData = require('./data.json');

// Middleware pour gérer les CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Route pour obtenir tout le menu
app.get('/api/menu', (req, res) => {
    res.json(menuData);
});

// Route pour obtenir un plat spécifique par son nom
app.get('/api/menu/:plate', (req, res) => {
    const plate = menuData.find(item => 
        item.plate.toLowerCase() === req.params.plate.toLowerCase()
    );
    
    if (plate) {
        res.json(plate);
    } else {
        res.status(404).json({ error: "Plat non trouvé" });
    }
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});