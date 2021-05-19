pragma solidity ^0.5.0;

contract WasteManagement {
    uint public id = 0;
    int  public totalCost;

    struct Waste {
        uint wasteId;
        string wasteMaterial;
        uint quantity;
        int  cost;
    }


    event WasteDeposited (uint id, string wasteMaterial, uint quantity, int cost);

    mapping (uint => Waste) public wastes;

    constructor () public{
        depositWaste("Non-Recyclable Waste", 1 , -10);
    }

    function depositWaste (string memory _wasteMaterial, uint _quantity, int _cost) public {
        id ++;
        wastes[id] = Waste(id, _wasteMaterial, _quantity, _cost);
        emit WasteDeposited(id, _wasteMaterial, _quantity, _cost);
    }

    // uint storedData;

    // function set(uint x) public {
    // storedData = x;
    // }

    function get() public view returns (uint) {
    return id;
    }
}