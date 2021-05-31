export default shuffle<[string, string, string, string]>([
  [
    "0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d",
    "29264283555200707857850216239132066185199",
    "Decentraland Parcels",
    "https://market.decentraland.org/contracts/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/tokens/29264283555200707857850216239132066185199",
  ],

  [
    "0x959e104e1a4db6317fa58f8295f586e1a978c297",
    "3168",
    "Decentraland Estates",
    "https://market.decentraland.org/contracts/0x959e104e1a4db6317fa58f8295f586e1a978c297/tokens/3168",
  ],

  [
    "0x32b7495895264ac9d0b12d32afd435453458b1c6",
    "5055",
    "Decentraland Wearables",
    "https://market.decentraland.org/contracts/0x32b7495895264ac9d0b12d32afd435453458b1c6/tokens/4087",
  ],

  // ERC-1155
  [
    "0xd07dc4262bcdbf85190c01c996b4c06a461d2430",
    "90473",
    "Rarible",
    "https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:90473",
  ],

  [
    "0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405",
    "13201",
    "Foundation",
    "https://foundation.app/jenstark/multiverse-13201",
  ],

  [
    "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
    "2914",
    "CryptoPunks",
    "https://www.larvalabs.com/cryptopunks/details/2914",
  ],

  [
    "0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0",
    "22072",
    "SuperRare",
    "https://superrare.co/artwork-v2/pool-22072",
  ],

  [
    "0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7",
    "2299",
    "Zora",
    "https://zora.co/leafilipo/2299",
  ],

  [
    "0x06012c8cf97bead5deae237070f9587f8e7a266d",
    "1976426",
    "CryptoKitties",
    "https://www.cryptokitties.co/kitty/1976426",
  ],

  [
    "0xda98f59e1edecb2545d7b07b794e704ed6cf1f7a",
    "139",
    "Portion.io",
    "https://app.portion.io/#exchange?ID=QmYdqAwiMsb7s1mCTgVE4ZQwohjf8nvUdGnra1J6dx5TDd",
  ],

  [
    "0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432",
    "11000010018",
    "Nifty Gateway",
    "https://niftygateway.com/itemdetail/secondary/0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432/11000010006",
  ],

  // ERC-1155
  [
    "0x495f947276749ce646f68ac8c248420045cb7b5e",
    "63990428236934811571513178702512145453357596655980286527887248477662016962561",
    "OpenSea",
    "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/63990428236934811571513178702512145453357596655980286527887248477662016962561",
  ],

  [
    "0xb6dae651468e9593e4581705a09c10a76ac1e0c8",
    "1230",
    "Async Art",
    "https://async.art/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-1230",
  ],

  // [
  //   "0x79986af15539de2db9a5086382daeda917a9cf0c",
  //   "1162",
  //   "Cryptovoxels",
  //   "https://www.cryptovoxels.com/parcels/1162",
  // ],

  [
    "0x7c40c393dc0f283f318791d746d894ddd3693572",
    "8549",
    "MoonCats",
    "https://opensea.io/assets/0x7c40c393dc0f283f318791d746d894ddd3693572/8549",
  ],

  [
    "0xfbeef911dc5821886e1dda71586d90ed28174b7d",
    "307801",
    "KnownOrigin",
    "https://knownorigin.io/gallery/307800-red-forest-fires",
  ],

  [
    "0xb55c5cac5014c662fdbf21a2c59cd45403c482fd",
    "0x555559a5669969a96a656a995aa55555",
    "Clovers",
    "https://clovers.network/clovers/0xdfffdfffd557fd7ff55fdfdffff7ffff",
  ],

  [
    "0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756",
    "52832",
    "MakersPlace",
    "https://makersplace.com/jeffreylee1/garden-delights-1-of-1-60178/",
  ],

  [
    "0xd07dc4262bcdbf85190c01c996b4c06a461d2430",
    "344495",
    "Aito",
    "https://thisisaito.xyz/n/0xd07dc4262bcdbf85190c01c996b4c06a461d2430/344495",
  ],

  [
    "0x6c7B6cc55d4098400aC787C8793205D3E86C37C9",
    "84",
    "JOYWORLD",
    "https://www.joy.world/joy/the-fry-cult",
  ],

  [
    "0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7",
    "13396",
    "Meebit",
    "https://meebits.larvalabs.com/meebits/detail?index=13396",
  ],
])

function shuffle<T = unknown>(arr: T[]): T[] {
  const _arr = [...arr]
  for (let i = _arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[_arr[i], _arr[j]] = [_arr[j], _arr[i]]
  }
  return _arr
}
