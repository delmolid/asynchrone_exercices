const API_URL = 'http://localhost:3000';
async function giveNumber() {
    const response = await fetch(`${API_URL}/api/giveNumber`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{ "number": "06XXXXXXXX" }`,
    });
	
	// affiche la réponse entière :
	console.log('Response: ', response);
	 
	 // on vérifie le statut pour voir si Malcolm a reçu le mot :
	if (response.status === 200) {
	    console.log(`Malcolm is 🥳!`);
	} else if (response.status === 408) {
	    console.log(`Malcolm is 😭`);
	} else {
	    console.log('Something went wrong 🤔');
	}
	// on recupère le body (qui est un json) :
	const body = await response.json();
	console.log(body);
}

// on appelle la fonction
giveNumber();