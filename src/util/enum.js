const createStringElement = (element, index) => {
  if (typeof element !== 'string') {
    return false;
  }

  return {
    index,
    name: element,
    element
  };
};

const createObjectElement = (element, index) => {
  if (typeof element !== 'object') {
    return false;
  }

  return {
    index:   element.index || index,
    name:    element.name,
    element: {
      name:  element.name,
      value: {
        name:  element.name,
        index: element.index || index,
        lower: element.name.toLowerCase(),
        upper: element.name.toUpperCase(),
        value: element.value
      }
    }
  };
};

export class Enum {
  /**
   *
   * @param {String} values a single comma delimited string or separate
   *                        string parameters
   */
  constructor (...elements) {

    // Iterate through values and split any comma-separated strings,
    // and replace the single value with all of the split strings
    elements.forEach(
      (element, index, array) => {
        if (typeof element !== 'string') {
          return;
        }
        Array.prototype.splice.apply(
          array,
          [ index, 1 ]
            .concat(element.split(','))
        );
      }
    );

    // Assign
    this.elements = elements.map(
      (element, index) => {

        const elem = createStringElement(element, index) ||
          createObjectElement(element, index);

        if (!elem) {
          return elem;
        }

        // enum = new Enum('Foo','Bar','FooBar')
        //  enum.Foo === 0, enum.Bar === 1, enum.FooBar === 2
        //  enum.foo === 0, enum.bar === 1, enum.foobar === 2
        //  enum.FOO === 0, enum.BAR === 1, enum.FOOBAR === 2
        //  enum[0] === 'Foo', enum[1] === 'Bar', enum[2] === 'FooBar'
        // enum = new Enum('Foo,Bar,FooBar')
        //  enum.Foo === 0, enum.Bar === 1, enum.FooBar === 2
        //  enum.foo === 0, enum.bar === 1, enum.foobar === 2
        //  enum.FOO === 0, enum.BAR === 1, enum.FOOBAR === 2
        //  enum[0] === 'Foo', enum[1] === 'Bar', enum[2] === 'FooBar'
        // enum = new Enum({ name: 'Foo', index: 0, value: 1 })
        //  enum[0] === {
        //      name: 'Foo',
        //      lower: 'foo',
        //      upper: 'FOO',
        //      index: 0,
        //      value: 1
        //    }
        //  enum.Foo === 0
        //  enum.FOO === 0
        //  enum.foo === 0
        // ...
        this[elem.index] = elem.element;
        this[elem.name] = elem.index;
        this[elem.name.toLowerCase()] = elem.index;
        this[elem.name.toUpperCase()] = elem.index;

        elements[index] = elem;

        return elem;
      }
    ).filter(
      (element) => {
        return element;
      }
    );

    this.length = this.elements.length;

  }

}

export default Enum;
