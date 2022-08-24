const Intern = require('../lib/Intern');

describe('test', () => {
    it('should have an intern role', () => {
        const intern = new Intern('name', 'id', 'email', 'school');

        const role = intern.getRole();

        expect(role).toBe('Intern');
    });
});

describe('schoolTest', () => {
    it('should have a school', () => {
        const intern = new Intern('name', 'id', 'email', 'school');

        const school = intern.getSchool();

        expect(school).toBe('this.school');
    });
});
