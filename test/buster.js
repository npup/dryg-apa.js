var module
  , config = module.exports;

config["tests"] = {
  env: "node" // or "node"
  , "rootPath": "../"
  , "sources": [ // Paths are relative to config file
    "dist/index.js"
  ]
  , "tests": [
    "test/test.js"
  ]
};
