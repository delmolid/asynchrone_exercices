const express = require('express');
const app = express();
const port = 3000;

// Ajout des headers CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

const database = ["html", "css", "javascript", "java", "python"];
app.use(express.json());

//Ajoute un language dans "database"

app.post("/languages", (req, res) => {
    database.push(req.body.language);
    res.status(201).json({ language: req.body.language});

})
// TODO: GET /languages (renvoie la liste des langages de la database en json)
app.get("/languages", (req, res) => {
    res.json(database);
})

// TODO: PUT /languages/:name (remplace le langage passé dans l'url par celui passé dans le body)
app.put("/languages/:name", (req, res) => {
    // Trouve l'index du langage à remplacer en ignorant la casse
    const searchName = req.params.name.toLowerCase();
    const index = database.findIndex(lang => lang.toLowerCase() === searchName);
    
    // Vérifie si le langage existe
    if (index === -1) {
        return res.status(404).json({
            error: `Le langage ${req.params.name} n'existe pas dans la base de données`
        });
    }
    
    // Remplace le langage
    database[index] = req.body.language;
    res.json({ 
        message: "Le langage a été modifié avec succès", 
        database: database 
    });
})

// TODO: DELETE /languages (supprime le langage passé dans le body, par exemple {"language": "c++"})

app.delete("/languages/:name", (req, res) => {
const search = req.params.name.toLowerCase();
const index2 = database.findIndex(lang => lang.toLowerCase() === search);

// Vérifie si le langage existe
if ((index2) === false ) {
    return res.status(404).json({
        error: `Le langage ${req.params.name} n'existe pas dans la base de données`
    });

} else {  
// Supprimer le language
database.splice(index2, 1);
res.json({ message: "le langage a été supprimé avec succès", database: database });
}
    
})



app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });