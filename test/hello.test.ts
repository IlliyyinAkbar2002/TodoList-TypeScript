import { hello } from '../src/hello';

describe('Hello', () => {
    it('should say hello', () => {
        expect(hello()).toBe('Hello, world!');
    });
});