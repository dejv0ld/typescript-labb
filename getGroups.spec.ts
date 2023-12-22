import getGroups from './getGroups';

describe('getGroups', () => {
  it('returns a list of groups', async () => {
    const groups = await getGroups();
    expect(groups).toEqual([
      { "id": 1, "groupName": "Hajarna" },
      { "id": 2, "groupName": "Valarna" },
      { "id": 3, "groupName": "Zebrorna" }
    ]);
  });
});
