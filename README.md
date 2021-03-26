<p align=center><img src=https://user-images.githubusercontent.com/36158/112562506-52184100-8dcf-11eb-95ae-88d5dfb06f4a.png>

[![npm version](https://badgen.net/npm/v/use-nft)](https://www.npmjs.com/package/use-nft) [![bundle size](https://badgen.net/bundlephobia/minzip/use-nft)](https://bundlephobia.com/result?p=use-nft) [![License](https://badgen.net/github/license/spectrexyz/use-nft)](https://github.com/spectrexyz/use-nft/blob/main/LICENSE)

useNft() allows to access the metadata of any NFT ([EIP 721](https://eips.ethereum.org/EIPS/eip-721), [EIP 1155](https://eips.ethereum.org/EIPS/eip-1155) and [more](https://www.larvalabs.com/cryptopunks)) on the Ethereum blockchain.

## Install

```console
yarn add use-nft
```

## Usage

```jsx
import ethers from "ethers"
import { ethersFetcher, NftProvider, useNft } from "use-nft"

// Create the fetcher. Here we are using the Ethers.js fetcher
const provider ethers.getDefaultProvider()
const fetcher = ethersFetcher({ ethers, provider })

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
