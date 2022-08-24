const Manager = require('../lib/Manager')/

describe('test', () => {
    it('should have an manager role', () => {
        const manager = new Manager('name', 'id', 'email', 'officeNumber');

        const role = manager.getRole();

        expect(role).toBe('Manager');
    });
});

describe('officeTest', () => {
    it('should have an office number', () => {
        const manager = new Manager('name', 'id', 'email', 'this.office');

        const office = manager.getOffice();

        expect(office).toBe('this.office');
    });
});