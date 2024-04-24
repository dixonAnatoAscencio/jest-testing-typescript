import {characters} from '../../src/js-foundation/02-destructuring';

describe('Test in 02-destructuring.ts', () => {

    test('characters should contain Flash, Superman', () => {

    expect(characters).toContain('Flash');
    expect(characters).toContain('Superman');
})

   test('first character should be Flash and second Superman', () => {
    const [first, second] = characters;
    expect(first).toBe('Flash');
    expect(second).toBe('Superman');
   })


})
