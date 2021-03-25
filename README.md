<p align=center><img src=https://user-images.githubusercontent.com/36158/112518000-e31bf780-8d90-11eb-9a52-0d9ed155cb70.png>

useNft() allows to access the metadata of any NFT ([EIP 721](https://eips.ethereum.org/EIPS/eip-721), [EIP 1155](https://eips.ethereum.org/EIPS/eip-1155) and [more](https://www.larvalabs.com/cryptopunks)) on the Ethereum blockchain.

## Install

```console
yarn add use-nft
```

## Usage

```jsx
import ethers from "ethers"
import { ethersFetcher, NftProvider, useNft } from "use-nft"

// Create the fetcher (Ethers.js here)
const fetcher = ethersFetcher({ provider: ethers.getDefaultProvider() })

// Wrap your app with <NftProvider /> and pass a fetcher
function App() {
  return (
    <NftProvider fetcher={fetcher}>
      <Nft />
    </NftProvider>
  )
}

// Pass the contract address and tokenId to useNft()
function Nft() {
  const nft = useNft("0xd07dc4262bcdbf85190c01c996b4c06a461d2430", "90473")

  // nft.loading is true during load
  if (nft.loading) return "Loading…"

  // nft.error is true on error
  if (nft.error) return "Error."

  // ready
  return (
    <section>
      <img src={nft.result.image} alt="" />
      <h1>{nft.result.name}</h1>
      <p>{nft.result.description}</p>
    </section>
  )
}
```

## License

MIT
