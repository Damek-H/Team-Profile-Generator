const Employee = require('../lib/Employee');

test('Will create new employee.', () => {
    const employee = new Employee('John', 25, 'johndoe@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Will get employee name.', () => {
    const employee = new Employee('John', 25, 'johndoe@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('Will get employee ID.', () => {
    const employee = new Employee('John', 25, 'johndoe@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('Will get employee email.', () => {
    const employee = new Employee('John', 25, 'johndoe@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('Will get employee role.', () => {
    const employee = new Employee('John', 25, 'johndoe@email.com');

    expect(employee.getRole()).toEqual("Employee");
}); 