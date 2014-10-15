/** eslint */
/* global
    module
*/
var apa = Object.create(null, {
  "dryg": {
      "value": true
      , "enumerable": false
    }
  , "isDryg": {
    "value": function () {
        return this.dryg;
      }
    }
});

module.exports = apa;
