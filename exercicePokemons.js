async function fetchPokemonWeight(pokemonName) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); // fetch the api
   
    const data = await res.json(); // get the response as json
    // console.log(data.weight)
    return data.weight / 10; // convert weight to kg
  }

//   async function checkLuggageLimit() {
// 	const startTime = performance.now();
//   let totalWeight = 0;
//   totalWeight += await fetchPokemonWeight("snorlax");
//   totalWeight += await fetchPokemonWeight("pikachu");
//   totalWeight += await fetchPokemonWeight("ditto");
//   totalWeight += await fetchPokemonWeight("bulbasaur");
//   console.log(`Total weight: ${totalWeight}kg`);
//   console.log(`Execution time: ${performance.now() - startTime}ms`);
  
// }

// checkLuggageLimit();


async function checkLuggageLimit2 () {
    const startTime = performance.now();
    let totalWeight = 0;
    const totalWeightweight = await Promise.all([
        fetchPokemonWeight("snorlax"),
        fetchPokemonWeight("pikachu"),
        fetchPokemonWeight("ditto"),
        fetchPokemonWeight("bulbasaur")]).then((values) => {
            console.log(values)
            values.forEach((value) => {
                totalWeight += value;
             
            });

        });
    console.log(`Total weight: ${totalWeight}kg`)
    console.log(`Execution time: ${performance.now() - startTime}ms`);

}


// Version avec Promise.all et gestion des erreurs
async function checkLuggageLimit3() {
	const startTime = performance.now();
    let totalWeight = 0;
    const allWeights = await Promise.all([
		fetchPokemonWeight("snorlax").catch((error) => {
            console.error(error);
            return 0;
          }),
		fetchPokemonWeight("pikachu").catch((error) => {
            console.error(error);
            return 0;
          }),
		fetchPokemonWeight("ditto").catch((error) => {
            console.error(error);
            return 0;
          }),
		fetchPokemonWeight("bulbasaur").catch((error) => {
            console.error(error);
            return 0;
          }),
	]);

    allWeights.forEach(weight => {
        totalWeight += weight
    });

    console.log(allWeights)
    console.log(`Total weight: ${totalWeight}kg`);
    console.log(`Execution time: ${performance.now() - startTime}ms`);
}

// Version avec Promise.all et gestion des erreurs
async function checkLuggageLimit3() {
	const startTime = performance.now();
    let totalWeight = 0;
    const allWeights = await Promise.all([
		fetchPokemonWeight("snorlax").catch((error) => {
            console.error(error);
            return 0;
          }),
		fetchPokemonWeight("pikachu").catch((error) => {
            console.error(error);
            return 0;
          }),
		fetchPokemonWeight("ditto").catch((error) => {
            console.error(error);
            return 0;
          }),
		fetchPokemonWeight("bulbasaur").catch((error) => {
            console.error(error);
            return 0;
          }),
	]);

    allWeights.forEach(weight => {
        totalWeight += weight
    });

    console.log(allWeights)
    console.log(`Total weight: ${totalWeight}kg`);
    console.log(`Execution time: ${performance.now() - startTime}ms`);
}

// // Version avec Promise.allSettled et gestion d'erreur différente
async function checkLuggageLimit4() {
	const startTime = performance.now();
    let totalWeight = 0;
    const allPromises = await Promise.allSettled([
		fetchPokemonWeight("snorlax"),
		fetchPokemonWeight("pikuchu"),
		fetchPokemonWeight("ditto"),
		fetchPokemonWeight("bulbasaur")
	]);

    allPromises.forEach(promise => {
        if (promise.status == "fulfilled")
            totalWeight += promise.value
    });

    console.log(allPromises)
    console.log(`Total weight: ${totalWeight}kg`);
    console.log(`Execution time: ${performance.now() - startTime}ms`);
}

checkLuggageLimit4();