export class Enum {
  /**
   *
   * @param {String} values a single comma delimited string or separate
   *                        string parameters
   */
  constructor( ...values ) {
    // Iterate through values and split any comma-separated strings,
    // and replace the single value with all of the split strings
    values.forEach(
      (value, index, array) => {
        if ( value.indexOf(',') === -1 ) {
          return;
        }
        Array.prototype.splice.apply(
          array, [index, 1].concat( value.split(',') )
        ).splice(index, 1, value.split(','));
      }
    );

    // Assign
    values.forEach(
      (value, index) => {
        // Enum['FOO','BAR','FOOBAR']
        // Enum['FOO'] = 0
        // Enum[0] = 'FOO'
        // ...
        this[this[value] = index] = value;
      }
    );
  }

}

export default Enum;
