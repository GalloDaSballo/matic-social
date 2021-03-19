import { task } from "hardhat/config";

task("PublishPost", "Prints the list of accounts", async (_taskArgs, hre) => {
    const { getNamedAccounts, ethers } = hre;

    const { deployer } = await getNamedAccounts();
    console.log("deployer", deployer);
    const poster = await ethers.getContract("Poster");
    const tx = await poster.publish("I can now post a shitton of stuff and not even needing to store it", "An image");
    console.log("tx", tx);
});
