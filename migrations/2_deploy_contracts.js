var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var WasteManagement = artifacts.require("./WasteManagement.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(WasteManagement);
};
