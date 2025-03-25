const API_URL = 'http://localhost:3000';
let result = document.getElementById('result');

// Fonction pour obtenir les langages
async function getdata() {
    try { 
        const response = await fetch(`${API_URL}/languages`);
        const langages = await response.json();
        console.log('Langages actuels:', langages);
        result.textContent = `Il y a ${langages} langages dans la base de données`;
    } catch (error) {
        console.error('Erreur lors de la récupération des langages:', error);
    }
}

// Nouvelle fonction pour mettre à jour un langage
async function updateLanguage(oldLang, newLang) {
    try {
        const response = await fetch(`${API_URL}/languages/${oldLang}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ language: newLang })
        });
        const result = await response.json();
        console.log('Résultat après mise à jour:', result);
    } catch (error) {
        console.error('Erreur lors de la mise à jour:', error);
    }
}

// Fonction pour ajouter un language dans la base des données
async function addlanguage(language) {
    try {
        const response = await fetch(`${API_URL}/languages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ language: language })
        });
        const result = await response.json();
        console.log('Résultat après ajout:', result);
    } catch (error) {
        console.error('Erreur lors de l\'ajout:', error);
    }
}


// Fonction pour supprimer un language de la base des données 
async function deletelanguage(language) {
    try {
    const response = await fetch(`${API_URL}/languages/${language}`, {
        method:'DELETE',
    })
    const result = await response.json();
    console.log('Résultat après suppression:', result);

    } catch (error){
        console.error('Erreur lors de la suppression')
    }
}
getdata();


