require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue remember stick honey hidden arctic army gate'; 
let testAccounts = [
"0xf0bd9287f026acb6f88bb51221ba9df427b583977581b8f0308ffe7d6478fe39",
"0x129b83da4feaa4c8fb7afc61a3293741056926deae11f863e903af6be77ee0bc",
"0x7885c06106134b7d79b29183389e5df808c1eb05582d5567734065a224b6a702",
"0x58543447935a59e38ec6acf1abff19c813de70f57accf48a91686365ab50d4ad",
"0x5c49de90c49a593de018f9d7b6063619f1edd37ffc203c807dae86fc1af4bb9d",
"0x4f6cd4e7e2d3116798071afe050541e4b3306de7b09f355b561cec58c7f511bd",
"0xe52b1ab8ddc7164bdc07b09206d017aef7060f339218b22f9200c699c9760cb5",
"0x3645b6c440d78e91cef7233674e3721f4b3ba8e3c3db948dbb57303f33eff77f",
"0x5c866240998a7c05312170e3ca005c181548021f2a08ec21f99787276e69f668",
"0x8f1811ce4c540550b352c12607b5ce27c2b2724f07af23820fa7088711aa1248"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


