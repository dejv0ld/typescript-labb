// Funktionen getUsers
function getUsers(): Promise<{ name: string; group: number }[]> {
  return Promise.resolve([
    { "name": "Erik", "group": 1 },
    { "name": "Lisa", "group": 2 },
    { "name": "Hampus", "group": 2 },
    { "name": "Linda", "group": 3 },
    { "name": "Eva", "group": 1 },
    { "name": "Anna", "group": 3 }
  ]);
}

export default getUsers;
