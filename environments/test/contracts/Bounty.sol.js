// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"owners","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"}],"name":"claimBounty","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"createTarget","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"contribute","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"claimed","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"totalBounty","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"createdAddress","type":"address"}],"name":"TargetCreation","type":"event"}],
    binary: "6060604052610403806100126000396000f3606060405236156100565760e060020a6000350463022914a7811461005857806398ff807514610079578063c98165b614610192578063d7bb99ba1461022b578063e834a83414610238578063f19d96eb14610244575b005b61024d600435600260205260009081526040902054600160a060020a031681565b610056600435600160a060020a038181166000908152600260205260408120549091161480159061010257507f18160ddd000000000000000000000000000000000000000000000000000000006060908152600160a060020a0382168031916318160ddd906064906020906004816000876161da5a03f115610002575050604051519190911190505b156102805760006000600050819055506001600160006101000a81548160ff021916908302179055506002600050600082600160a060020a0316815260200190815260200160002060009054906101000a9004600160a060020a0316600160a060020a03166000600060005054604051809050600060405180830381858888f19350505050151561028057610002565b61024d600080606061018080610283833901809050604051809103906000f090507f4421e6e29c0aaca1204d167f59a9aa9ccfc85d8b1bbf5e7946072b007903c469816040518082600160a060020a0316815260200191505060405180910390a1600160a060020a038116825260026020526040909120805473ffffffffffffffffffffffffffffffffffffffff191633179055805090565b6100566000805434019055565b61026a60015460ff1681565b61027660005481565b60408051600160a060020a03929092168252519081900360200190f35b15156060908152602090f35b6060908152602090f35b5056606060405261016e806100126000396000f3606060405260e060020a600035046318160ddd81146100475780633ccfd60b1461005057806370a08231146100c5578063a9059cbb146100dd578063b6b55f2514610135575b005b61016460015481565b610045600160a060020a0333166000818152602081905260408120549190829060609081818185876185025a03f192505050156100c25760006000600050600033600160a060020a03168152602001908152602001600020600050819055508060016000828282505403925050819055505b50565b61016460043560006020819052908152604090205481565b610045600435602435600160a060020a0333166000908152602081905260409020548190106101315760406000818120600160a060020a038086168352928220805485019055339092169052805482900390555b5050565b610045600435600160a060020a0333166000908152602081905260409020805482019055600180548201905550565b6060908152602090f3",
    unlinked_binary: "6060604052610403806100126000396000f3606060405236156100565760e060020a6000350463022914a7811461005857806398ff807514610079578063c98165b614610192578063d7bb99ba1461022b578063e834a83414610238578063f19d96eb14610244575b005b61024d600435600260205260009081526040902054600160a060020a031681565b610056600435600160a060020a038181166000908152600260205260408120549091161480159061010257507f18160ddd000000000000000000000000000000000000000000000000000000006060908152600160a060020a0382168031916318160ddd906064906020906004816000876161da5a03f115610002575050604051519190911190505b156102805760006000600050819055506001600160006101000a81548160ff021916908302179055506002600050600082600160a060020a0316815260200190815260200160002060009054906101000a9004600160a060020a0316600160a060020a03166000600060005054604051809050600060405180830381858888f19350505050151561028057610002565b61024d600080606061018080610283833901809050604051809103906000f090507f4421e6e29c0aaca1204d167f59a9aa9ccfc85d8b1bbf5e7946072b007903c469816040518082600160a060020a0316815260200191505060405180910390a1600160a060020a038116825260026020526040909120805473ffffffffffffffffffffffffffffffffffffffff191633179055805090565b6100566000805434019055565b61026a60015460ff1681565b61027660005481565b60408051600160a060020a03929092168252519081900360200190f35b15156060908152602090f35b6060908152602090f35b5056606060405261016e806100126000396000f3606060405260e060020a600035046318160ddd81146100475780633ccfd60b1461005057806370a08231146100c5578063a9059cbb146100dd578063b6b55f2514610135575b005b61016460015481565b610045600160a060020a0333166000818152602081905260408120549190829060609081818185876185025a03f192505050156100c25760006000600050600033600160a060020a03168152602001908152602001600020600050819055508060016000828282505403925050819055505b50565b61016460043560006020819052908152604090205481565b610045600435602435600160a060020a0333166000908152602081905260409020548190106101315760406000818120600160a060020a038086168352928220805485019055339092169052805482900390555b5050565b610045600435600160a060020a0333166000908152602081905260409020805482019055600180548201905550565b6060908152602090f3",
    address: "0x89ed15c4aaecaa350185e7d63f7c048ec6936f78",
    generated_with: "2.0.9",
    contract_name: "Bounty"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Bounty error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Bounty error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Bounty error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Bounty error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Bounty = Contract;
  }

})();