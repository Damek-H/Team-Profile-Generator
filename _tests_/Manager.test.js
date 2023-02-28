const Manager = require('../lib/Manager');
 
test('Will create new manager.', () => {
    const manager = new Manager('John', 25, 'johndoe@email.com', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Will get manager role.', () => {
    const manager = new Manager('John', 25, 'johndoe@email.com.com');

    expect(manager.getRole()).toEqual("Manager");
});