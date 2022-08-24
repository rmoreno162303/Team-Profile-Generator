const Employee = require('../lib/Employee');

describe('test', () => {
    it('should have an employee role', () => {
        const employee = new Employee('name', 'id', 'email');

        const role = employee.getRole();

        expect(role).toBe('Employee')
    });
});

describe('nameTest', () => {
    it('should have a name', () => {
        const employee = new Employee('name', 'id', 'email');

        const name = employee.getName();

        expect(name).toBe('this.name');
    });
});

describe('idTest', () => {
    it('should have an id', () => {
        const employee = new Employee('name', 'id', 'email');

        const id = employee.getId();

        expect(id).toBe('this.id');
    });
});

describe('emailTest', () => {
    it('should have an email', () => {
        const employee = new Employee('name', 'id', 'email');

        const email = employee.getEmail();

        expect(email).toBe('this.email');
    });
});