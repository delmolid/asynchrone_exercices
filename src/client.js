const API_URL = 'http://localhost:3000';

// Fonction pour obtenir les langages
async function getdata() {
    try { 
        const response = await fetch(`${API_URL}/languages`);
        const langages = await response.json();
        console.log('Langages actuels:', langages);
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

getdata();
updateLanguage('css', 'python');

// 
