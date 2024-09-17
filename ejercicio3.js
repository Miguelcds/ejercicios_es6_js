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

console.log(usersFilter);
