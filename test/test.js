/* linter, global declarations: */
/* global
    require
*/

var buster = require("buster")
  , assert = buster.assert;


var apa = require("../dist/index.js");

buster.testCase("setup", {
  "module exists": function () {
      assert.isObject(apa);
    }
  , "module API": function () {
      assert.isFunction(apa.isDryg);
      console.log(apa.dryg);
      for (var prop in apa) {

        buster.refute("isDryg"!=prop, "API should not expose property \""+prop+"\"");
      }
    }
  , "safe": function () {
      apa.isDryg = null;
      assert.equals(typeof apa.isDryg, "function", "isDryg should not be overwitten");
    }
});


buster.testCase("usage", {
  "dryghet": function () {
      assert(apa.isDryg(), "Apa should be dryg");
    }
});
