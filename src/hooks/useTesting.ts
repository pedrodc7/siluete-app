import { setRevalidateHeaders } from "next/dist/server/send-payload"

export default function useTesting() {

  async function getSomething() {
    const response = await fetch("https://node-server-pi.vercel.app/api")
    const data = await response.json();
  }

  return { 
    getSomething
  }
}