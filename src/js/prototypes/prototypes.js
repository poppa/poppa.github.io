/*!
  Misc helper functions and stuff

  Author: Pontus Östlund <https://profiles.google.com/poppanator>

  Permission to copy, modify, and distribute this source for any legal
  purpose granted as long as my name is still attached to it. More
  specifically, the GPL, LGPL and MPL licenses apply to this software.
*/
(function() {
  'use strict';

  /* Returns the lowest value in an array
   */
  Array.min = (array) => {
    return Math.min.apply(Math, array);
  };

  /* Returns the highest value in an array
   */
  Array.max = (array) => {
    return Math.max.apply(Math, array);
  };

  /* Allocate an array of length @[len] with @[value]
   */
  Array.allocate = (len, value) => {
    if (value !== undefined) {
      var r = new Array(len);

      for (var i = 0; i < len; i++)
        r[i] = value;

      return r;
    }

    return new Array(len);
  };

  /* Populate an array to length @[len] with the result from @[fun]
   *
   * var arr = Array.populate(5, function() {
   *   return this.length;
   * });
   *
   * arr = [ 0, 1, 2, 3, 4 ]
   */
  Array.populate = (len, fun) => {
    var t = [];
    while (t.length < len)
      t.push(fun.apply(t));

    return t;
  };
}());