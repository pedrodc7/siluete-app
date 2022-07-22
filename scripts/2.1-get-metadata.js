import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";


(async () => {
    const CONTRACT_ADDRESS = "0x900012AcC88Da5b10d8A729FE8a559f379912fd5"

    try {
        // this initialization returns the address of our contract
        // we use this to initialize the contract on the thirdweb sdk
        const NFTCollection = await sdk.getEditionDrop(CONTRACT_ADDRESS);

        // with this, we can get the metadata of our contract
        const metadata = await NFTCollection.metadata.get();

        console.log("metadata:", metadata);
    } catch (error) {
        console.log("failed to get metada: ", error);
    }
})();