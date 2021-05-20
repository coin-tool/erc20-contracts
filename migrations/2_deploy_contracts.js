const TokenMintERC20Token = artifacts.require("TokenMintERC20Token");
const tokenName = 'NiubToken';
const tokenSymbol = 'Niub';
const initialSupply = '10000000000000000000000';

module.exports = function (deployer, network, accounts) {
  deployer.deploy(TokenMintERC20Token, tokenName, tokenSymbol, initialSupply);
};
