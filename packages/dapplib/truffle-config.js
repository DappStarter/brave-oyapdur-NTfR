require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski street royal magic arrive install muscle army gaze'; 
let testAccounts = [
"0xfd77e69ffc88eece54c2cb631ee38f37353b1ab1a4fdba75ae003ee2d9b07937",
"0xcf1524537ffde6e104c697b7d0b020fd5d7e5c68910860152240d78bb0af4391",
"0x0a0119aa6afd8ba10b69f67adceefc4b4ac451262c53ede3b6b0c989d6b83ed5",
"0x794dbab42828367802b6d14d806e06dec795c5256e0d651e3213b4a69082646f",
"0xf5a0a74c52dbce759304b85116ad746a31542ceba3a008b05e54f937941613b7",
"0xbe6ee6aec434d0c6c4d3bbd0cb2718677c523e16ae194900addc33e2bc4050bb",
"0x7ec559a1ab15387c9eeabf924237b877d6e30c5746b3a2c434662f5e6d2f3ae9",
"0x0d8f4d77825a186f1c58cd4c696f9e428fc32145e1b93e70a887561fc5c69a76",
"0xf745b5b9ac45d645b0d130bc5c391a05b3f0102d45364e520c24d79457840b1c",
"0xaeba6fe37ac14e9316bf8dbed814175fb97efe8d7a8d93c22f12c1c5fd38594c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

