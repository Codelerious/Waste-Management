pragma solidity ^0.5.0;

contract WasteManagement {
    uint public id = 0;
    int  public totalCost = 0;

    struct Waste {
        uint wasteId;
        string wasteMaterial;
        int quantity;
        int  cost;
    }


    event WasteDeposited (uint id, string wasteMaterial, int quantity, int cost);

    event UpdateWalletBalance (int totalCost);

    mapping (uint => Waste) public wastes;

    constructor () public{
        updateWalletBalance(0,0);
    }

    function depositWaste (string memory _wasteMaterial, int _quantity, int _cost) public {
        id ++;
        wastes[id] = Waste(id, _wasteMaterial, _quantity, _cost);
        emit WasteDeposited(id, _wasteMaterial, _quantity, _cost);
    }

    function updateWalletBalance (int _quantity, int _cost) public {
        int transactionCost = _quantity * _cost;
        totalCost += transactionCost;
        emit UpdateWalletBalance (totalCost);
    }

    // uint storedData;

    // function set(uint x) public {
    // storedData = x;
    // }

    function get() public view returns (uint) {
    return id;
    }
}