const { network: { provider }, expect, artifacts } = require('hardhat');
const fs = require('fs')

require('dotenv').config();

const NiceCoin = artifacts.require("NiceCoin");

async function main() {

    // deploy erc20 contract
    let niceCoin = await NiceCoin.new();
    console.log(niceCoin.address);

}


main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });