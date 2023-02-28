const Intern = require('../lib/Intern');
 
test('Will create new intern.', () => {
    const intern = new Intern('John', 25, 'johndoe@email.com', 'UCB');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('Will get intern school.', () => {
    const intern = new Intern('John', 25, 'johndoe@email.com', 'UCB');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Will get role of intern.', () => {
    const intern = new Intern('John', 25, 'johndoe@email.com.com', 'UCB');

    expect(intern.getRole()).toEqual("Intern");
}); 