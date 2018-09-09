import { Enum } from '../../src/util/Enum.js';

// Test the implementation of the Enum class
describe('enum', () => {

  describe('constructor', () => {

    test('single parameter', () => {
      const e = new Enum('FOO');

      expect(e.FOO).toBe(0);
      expect(e[0]).toBe('FOO');
    });

    test('multiple parameters', () => {
      const e = new Enum('FOO', 'BAR');
      expect(e.FOO).toBe(0);
      expect(e.BAR).toBe(1);
      expect(e[0]).toBe('FOO');
      expect(e[1]).toBe('BAR');
    });

    test('single delimited parameter', () => {
      const e = new Enum('FOO,BAR');
      expect(e.FOO).toBe(0);
      expect(e.BAR).toBe(1);
      expect(e[0]).toBe('FOO');
      expect(e[1]).toBe('BAR');
    });

  });

});
