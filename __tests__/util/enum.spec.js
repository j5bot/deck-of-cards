import { Enum } from '../../src/util/Enum.js';

// Test the implementation of the Enum class
describe('enum', () => {

  describe('constructor', () => {

    test('single parameter', () => {
      const enumerated = new Enum('FOO');

      expect(enumerated.FOO).toBe(0);
      expect(enumerated[0]).toBe('FOO');
    });

    test('multiple parameters', () => {
      const enumerated = new Enum('FOO', 'BAR');

      expect(enumerated.FOO).toBe(0);
      expect(enumerated.BAR).toBe(1);
      expect(enumerated[0]).toBe('FOO');
      expect(enumerated[1]).toBe('BAR');
    });

    test('single delimited parameter', () => {
      const enumerated = new Enum('FOO,BAR');

      expect(enumerated.FOO).toBe(0);
      expect(enumerated.BAR).toBe(1);
      expect(enumerated[0]).toBe('FOO');
      expect(enumerated[1]).toBe('BAR');
    });

  });

  describe('methods', () => {

    const enumerated = new Enum('FOO,BAR,FOOBAR');

    test('length', () => {
      expect(enumerated).toHaveProperty('length');
      expect(enumerated).toHaveLength(3);
    });

  });

});
