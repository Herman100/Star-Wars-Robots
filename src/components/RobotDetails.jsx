export const robots = fetch("https://swapi.dev/api/people/")
  .then((response) => response.json())
  .then((characters) => characters.results);
