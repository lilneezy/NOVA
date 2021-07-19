const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('206c30b25a174b1ec5324eb3b71e174a1410e7288d60e11ec2d33af284ba4584');
const myWalletAddress = myKey.getPublic('hex');

let myCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
myCoin.addTransaction(tx1);

myCoin.minePendingTransactions(myWalletAddress);
myCoin.minePendingTransactions(myWalletAddress);

console.log('balance of myWalletAddress is ' + myCoin.getBalanceOfAddress(myWalletAddress));

myCoin.chain[1].transactions[0].amount = 70;
console.log(myCoin.isChainValid())