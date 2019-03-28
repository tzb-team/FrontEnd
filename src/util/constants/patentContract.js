/**
 * 以下为链上部署的合约地址与合约的abi；
 * 
 * 部署合约的账户： （部署在ropsten测试网络上）
 *      walletAddr：0x10Ad2F4BB73e23e8B72C56b9EFdc3B7aD8Bb808E
 *      privateKey：CF5815E02E57BF3937BD68A6B749A6DCBBA68454AB2612F981BB800DF329F57D
 */

const address = '0x0c7900f9624dd0e658e9404e8b5b082fbc535f4a'
const ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "string"
			}
		],
		"name": "cancelOrder",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "customer",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "deposit",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "string"
			},
			{
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "makeOrder",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "string"
			},
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "poolid",
				"type": "string"
			}
		],
		"name": "regPatent",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "patentid",
				"type": "string"
			}
		],
		"name": "transaction",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"inputs": [],
		"payable": false,
		"type": "constructor",
		"stateMutability": "nonpayable"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "balance",
				"type": "uint256"
			}
		],
		"name": "Deposit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "poolid",
				"type": "string"
			}
		],
		"name": "RegPatent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "Order",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "owner",
				"type": "address"
			}
		],
		"name": "Transaction",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "address"
			}
		],
		"name": "getBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "string"
			}
		],
		"name": "getOrder",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "string"
			}
		],
		"name": "getPatentInfo",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "v",
				"type": "uint256"
			}
		],
		"name": "uintToString",
		"outputs": [
			{
				"name": "str",
				"type": "string"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	}
]

export {address, ABI}