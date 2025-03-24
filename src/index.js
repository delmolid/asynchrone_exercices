const express = require('express');
const app = express();

const port = 3000;

// Middleware pour gérer les CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

// Crée la route qui est censée envoyer le numéro :
app.post('/api/giveNumber', (req, res) => {
  // Simule un délai d'attente pour déclencher l'erreur 408 :
  setTimeout(() => {
    // configure la réponse à renvoyer :
    res.status(200).json({
        message: "Numéro reçu avec succès !",
        girlfriend: true
      });
    }, 500);
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});