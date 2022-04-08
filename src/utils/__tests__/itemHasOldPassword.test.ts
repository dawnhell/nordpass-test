import itemHasOldPassword from '../itemHasOldPassword';

const items = [
   {
      id: "001",
      title: "Google",
      description: "My personal account",
      password: "Password123",
      createdAt: new Date().toISOString()
   },
   {
      id: "002",
      title: "Facebook",
      description: "Facebook account that I manage",
      password: "SuperDuper5trong!",
      createdAt: new Date(new Date().setMonth(new Date().getMonth() - 2)).toISOString()
   },
]

test('should return true if the password is older than 30 days', () => {
   expect(itemHasOldPassword(items[0])).toBe(false);
   expect(itemHasOldPassword(items[1])).toBe(true);
});
