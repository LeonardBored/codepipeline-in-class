const { alertMessage } = require('./script');

describe('alertMessage', () => {
    test('should be defined', () => {
        expect(alertMessage).toBeDefined();
        expect(typeof alertMessage).toBe('function');
    });
});
