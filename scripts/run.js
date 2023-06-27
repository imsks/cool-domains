const hardhat = require("hardhat")

async function main() {
    const deployedContract = await hardhat.ethers.deployContract("Domains")

    await deployedContract.waitForDeployment()

    console.log("Domains Contract Address:", await deployedContract.getAddress())
}

const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

runMain()