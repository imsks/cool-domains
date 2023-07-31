const { ethers } = require("hardhat")

async function main() {
    const [owner, randomPerson] = await ethers.getSigners()

    const deployedContract = await ethers.deployContract("Domains")
    await deployedContract.waitForDeployment("ninja")

    console.log(
        "Domains Contract Address:",
        await deployedContract.getAddress()
    )
    console.log("Domains Contract Owned by:", owner.address)

    let txn = await deployedContract.register("mortal", {
        value: ethers.parseEther("0.1")
    })
    await txn.wait()

    const domainOwner = await deployedContract.getAddress("mortal")
    console.log("Domains Contract Owned by:", domainOwner)

    const balance = await ethers.provider.getBalance(domainOwner)
    console.log("Contract Balance", ethers.formatEther(balance))
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
