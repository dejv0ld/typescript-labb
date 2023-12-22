// Funktionen getGroups
function getGroups(): Promise<{ id: number; groupName: string }[]> {
  return Promise.resolve([
    { "id": 1, "groupName": "Hajarna" },
    { "id": 2, "groupName": "Valarna" },
    { "id": 3, "groupName": "Zebrorna" }
  ]);
}

export default getGroups;
