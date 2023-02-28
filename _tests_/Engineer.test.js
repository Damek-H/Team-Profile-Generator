const Engineer = require('../lib/Engineer');
 
test('Will create new engineer.', () => {
    const engineer = new Engineer('John', 25, 'johndoe@email.com', 'johndoe007');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('Will create engineer GitHub.', () => {
    const engineer = new Engineer('John', 25, 'johndoe@email.com', 'johndoe007');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('Will get employee role.', () => {
    const engineer = new Engineer('John', 25, 'johndoe@email.com', 'johndoe007');

    expect(engineer.getRole()).toEqual("Engineer");
});