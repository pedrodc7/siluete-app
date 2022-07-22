import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { NextApiRequest, NextApiResponse } from "next";

const authenticate = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(400).json({ 
      error: "Invalid method. Only POST supported." 
    });
  }

  const PRIVATE_KEY = process.env.PRIVATE_KEY;
  if (!PRIVATE_KEY) {
    console.error("Missing ADMIN_PRIVATE_KEY environment variable");
    return res.status(500).json({ 
      error: "Admin private key not set" 
    })
  }

  // Get access token off cookies
  // *** added 'as string' here due to type needs
  const token = req.cookies.access_token as string;
  if (!token) {
    res.status(401).json({
      error: "Must provide an access token to authenticate"
    })
  }

  const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY as string, "mainnet");

  // Authenticate token with the SDK
  const domain = "thirdweb.com"
  const address = await sdk.auth.authenticate(domain, token);

  res.status(200).json(address);
};

export default authenticate;
