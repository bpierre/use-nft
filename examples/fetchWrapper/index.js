const ethers = require("ethers")
const FetchWrapper = require("use-nft").FetchWrapper

// nodejs does not have a fetch function, set it here
// not required for applications that run in a browser
const fetch = require("node-fetch")
if (!globalThis.fetch) {
  globalThis.fetch = fetch
}

const fetchNfts = async () => {
  const fetcher = ["ethers", { ethers, provider: ethers.getDefaultProvider() }]
  const fetchWrapper = new FetchWrapper(fetcher)

  const nft = await fetchWrapper.fetchNft(
    "0xd07dc4262bcdbf85190c01c996b4c06a461d2430",
    "90473"
  )

  console.log(nft)
}

fetchNfts()
