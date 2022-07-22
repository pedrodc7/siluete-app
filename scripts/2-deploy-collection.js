import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
      // we will deploy a NFTCollection and not a NFTDrop (lazymint, but conditions pre-set, including metadata. 
      // Which is no good for us. Although it uses less gas)
    const contractAddress = await sdk.deployer.deployNFTCollection({
      // The collection's name
      name: "Basic info",
      // A description for the collection.
      description: "Main contract for the Basic Info information snipped siluete",
      // The image that will be held on our NFT!
      //image: readFileSync("scripts/assets/info1.png"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the contract.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primary_sale_recipient: AddressZero,
    });

    console.log(
      "✅ Successfully deployed editionDrop contract, address:",
      contractAddress,
    );
  } catch (error) {
    console.log("failed to deploy editionDrop contract", error);
  }
})();