// 3.1 Map()

// const users = [
// 	{id: 1, name: 'Abel'},
// 	{id:2, name: 'Julia'},
// 	{id:3, name: 'Pedro'},
// 	{id:4, name: 'Amanda'}
// ];

// const usersName = users.map(item => item.name)

// console.log(usersName);


// 3.1 

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


const usersFilter = users.map((user) => {
	if (user.name.startsWith("A")) {
		user.name = "Anacleto"
		return user.name
	}

	return user.name

})

// console.log(usersFilter);

// 3.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.


const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const citiesFilter = cities.map((citie) => {
	if (citie.isVisited === true) {
	 return citie.name + ": Visited";
	}
	return citie.name + ": No Visited"
})

console.log(citiesFilter);
