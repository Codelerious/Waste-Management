export const TODO_LIST_ADDRESS = '0xfec4d771Ad0B6c6a25a8492Bbebe92F969B4dEE9'

export const TODO_LIST_ABI = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "int256",
        "name": "totalCost",
        "type": "int256"
      }
    ],
    "name": "UpdateWalletBalance",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "wasteMaterial",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "int256",
        "name": "quantity",
        "type": "int256"
      },
      {
        "indexed": false,
        "internalType": "int256",
        "name": "cost",
        "type": "int256"
      }
    ],
    "name": "WasteDeposited",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "id",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalCost",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "wastes",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "wasteId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "wasteMaterial",
        "type": "string"
      },
      {
        "internalType": "int256",
        "name": "quantity",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "cost",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_wasteMaterial",
        "type": "string"
      },
      {
        "internalType": "int256",
        "name": "_quantity",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "_cost",
        "type": "int256"
      }
    ],
    "name": "depositWaste",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "int256",
        "name": "_quantity",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "_cost",
        "type": "int256"
      }
    ],
    "name": "updateWalletBalance",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "get",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]
