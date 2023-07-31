const { ethers } = require("hardhat")

async function main() {
    const [owner, randomPerson] = await ethers.getSigners()

    const deployedContract = await ethers.deployContract("Domains")
    await deployedContract.waitForDeployment()

    console.log(
        "Domains Contract Address:",
        await deployedContract.getAddress()
    )
    console.log("Domains Contract Owned by:", owner.address)

    let txn = await deployedContract.register("doom")
    await txn.wait()

    const domainOwner = await deployedContract.getAddress("doom")
    console.log("Domains Contract Owned by:", domainOwner)

    txn = await deployedContract
        .connect(randomPerson)
        .setRecord("doom", "Doom DNS Record")
    await txn.wait()
    console.log("task completed")
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
