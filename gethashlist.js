const { Metaplex } = require('@metaplex-foundation/js')
const { Connection, PublicKey } = require('@solana/web3.js')
const fs = require('node:fs')
// Your variables
const endpoint = "Your Quicknode Endpoint"
const creatorAddress = "First Creator Address"

const connection = new Connection(endpoint);
const metaplex = new Metaplex(connection);

async function GetHashlist() {
    const creator = new PublicKey(creatorAddress)
    const nfts = await metaplex.nfts().findAllByCreator({ creator });
    console.log(nfts[0].mintAddress.toString())
    var hashlist = []
    for (const nft of nfts) {
        hashlist.push(nft.mintAddress.toString())
    }
    fs.writeFile(`./hashlist.json`, JSON.stringify(hashlist, null, 2), finished);
    function finished(err) {
        console.log(`Written Hashlist for creator ${creatorAddress}`);
        console.log(`${hashlist.length} items detected`)
    }
}

GetHashlist()