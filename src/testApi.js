async function testApi() {
    try {
        // Test 1 : Récupérer tout le menu
        console.log('🔍 Récupération du menu complet...');
        const menuResponse = await fetch('http://localhost:3000/api/menu');
        const menu = await menuResponse.json();
        console.log('📋 Menu complet:', menu);



    } catch (error) {
        console.error('❌ Erreur:', error);
    }
}

testApi(); 