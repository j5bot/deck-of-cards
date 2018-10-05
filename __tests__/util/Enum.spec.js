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

    test('object element', () => {
      const object = {
        name:  'FOO',
        index: 1,
        value: {
          foo: 'FOO'
        }
      };
      const enumerated = new Enum(object);

      expect(enumerated.FOO).toBe(1);
      expect(enumerated[1].name).toBe('FOO');
      expect(enumerated[1].value).toMatchObject(object);

    });

    test('object element, no index', () => {
      const object = {
        name:  'FOO',
        value: {
          foo: 'FOO'
        }
      };

      const enumerated = new Enum(object);

      expect(enumerated.FOO).toBe(0);
      expect(enumerated[0].name).toBe('FOO');
      expect(enumerated[0].value).toMatchObject(object);

    });

    test('no numerical elements', () => {
      const enumerated = new Enum(1);

      expect(enumerated).toHaveLength(0);

    });

    test('no elements', () => {
      const enumerated = new Enum();

      expect(enumerated).toHaveLength(0);
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
