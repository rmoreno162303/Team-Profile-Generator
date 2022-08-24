const Engineer = require('../lib/Engineer');

describe('test', () => {
    it('should have an engineer role', () => {
        const engineer = new Engineer('name', 'id', 'email', 'gitHub');

        const role = engineer.getRole();

        expect(role).toBe('Engineer');
    });
});

describe('gitHubTest', () => {
    it('should have a github username', () => {
        const engineer = new Engineer('name', 'id', 'email', 'gitHub');

        const gitHub = engineer.getGitHub();

        expect(gitHub).toBe('this.gitHub');
    });
});