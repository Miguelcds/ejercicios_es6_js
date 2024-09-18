// Dado el siguiente javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si  introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const input = document.querySelector("input");

const lowerCase = streamers.map(streamers => streamers.name.toLowerCase())


 input.addEventListener("input", () => {
   const streamerFilter = lowerCase.filter((streamer) =>
    streamer.includes(input.value)
  );

   //   [const {name,b,c} ]= streamerFilter

   console.log(streamerFilter);
 });
