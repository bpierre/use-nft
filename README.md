<p align=center><img src=https://user-images.githubusercontent.com/36158/112562506-52184100-8dcf-11eb-95ae-88d5dfb06f4a.png>

[![npm version](https://badgen.net/npm/v/use-nft)](https://www.npmjs.com/package/use-nft) [![bundle size](https://badgen.net/bundlephobia/minzip/use-nft)](https://bundlephobia.com/result?p=use-nft) [![License](https://badgen.net/github/license/spectrexyz/use-nft)](https://github.com/spectrexyz/use-nft/blob/main/LICENSE)

useNft() allows to access the metadata of any NFT ([EIP 721](https://eips.ethereum.org/EIPS/eip-721), [EIP 1155](https://eips.ethereum.org/EIPS/eip-1155) and [more](https://www.larvalabs.com/cryptopunks)) on the Ethereum blockchain.

## Install

```console
yarn add use-nft
```

## Usage

useNft() uses a concept of “fetchers”, in order to provide different ways to retrieve data from Ethereum. If you use the [Ethers](https://github.com/ethers-io/ethers.js) in your app, using `ethersFetcher()` is recommended. Otherwise you can use `ethereumFetcher()`, which only requires a [standard Ethereum provider](https://eips.ethereum.org/EIPS/eip-1193), like the one provided by MetaMask.

```jsx
import ethers from "ethers"
import { NftProvider, useNft } from "use-nft"

// We are using the "ethers" fetcher here.
const fetcher = ["ethers", { ethers, provider: ethers.getDefaultProvider() }]

// Alternatively, you can use the "ethereum" fetcher. Note
// that we are using window.ethereum here (injected by wallets
// like MetaMask), but any standard Ethereum provider would work.
// const fetcher = ["ethereum", { ethereum }]

// Wrap your app with <NftProvider />.
function App() {
  return (
    <NftProvider fetcher={fetcher}>
      <Nft />
    </NftProvider>
  )
}

// useNft() is now ready to be used in your app. Pass
// the NFT contract and token ID to fetch the metadata.
function Nft() {
  const { loading, error, nft } = useNft(
    "0xd07dc4262bcdbf85190c01c996b4c06a461d2430",
    "90473"
  )

  // nft.loading is true during load.
  if (loading) return "Loading…"

  // nft.error is an Error instance in case of error.
  if (error) return "Error."

  // You can now display the NFT metadata.
  return (
    <section>
      <h1>{nft.name}</h1>
      <img src={nft.image} alt="" />
      <p>{nft.description}</p>
    </section>
  )
}
```

## API

### NftProvider

NftProvider requires one prop to be passed: `fetcher`. It can take a declaration for the embedded fetchers, or you can alternatively pass a custom fetcher.

#### Ethers declaration

```tsx
<NftProvider fetcher={["ethers", { ethers, provider }]} />
```

- `ethers` is the default import of the Ethers library (note that only `{ Contract }` is needed, so you can pass this instead).
- `provider` is a [provider](https://docs.ethers.io/v5/api/providers/) from the Ethers library (not to be mistaken with [standard Ethereum providers](https://eips.ethereum.org/EIPS/eip-1193)).

#### Ethereum declaration

```tsx
<NftProvider fetcher={["ethereum", { ethereum }]} />
```

`ethereum` is a [standard Ethereum providers](https://eips.ethereum.org/EIPS/eip-1193).

#### Custom declaration

A fetcher is an object implementing this type:

```tsx
type Fetcher<Config> = {
  config: Config
  fetchNft: (contractAddress: Address, tokenId: string) => Promise<NftMetadata>
}
type NftMetadata = {
  name: string
  description: string
  image: string
}
```

See the implementation of the [Ethers](https://github.com/spectrexyz/use-nft/blob/38bd803f20e778b9bb684d682c194a812a94a05c/src/fetchers/ethers/index.tsx#L12-L42) and [Ethereum](https://github.com/spectrexyz/use-nft/blob/38bd803f20e778b9bb684d682c194a812a94a05c/src/fetchers/ethereum/index.tsx#L12-L42) fetchers for more details.

## License

[MIT](LICENSE)
