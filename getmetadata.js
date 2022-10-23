const fs = require("node:fs");
const hashlist = require('./hashlist.json');
const { Metaplex } = require('@metaplex-foundation/js')
const { Connection, PublicKey } = require('@solana/web3.js')
const connection = new Connection("https://solana-api.projectserum.com");
const metaplex = Metaplex.make(connection)

async function GetHashList() {
    for (const hash of hashlist) {
        mintAddress = new PublicKey(hash)
        try {
            const nft = await metaplex.nfts().findByMint({ mintAddress });
            fs.writeFile(`./JsonMetadata/${nft.json.name}`, JSON.stringify(nft.json, null, 4), finished);
            function finished(err) {
                console.log(`Written file for ${nft.json.name}`);
            }
        } catch (err) {
            fs.writeFile(`./JsonMetadata/ERROR_${hash}`, `No Data, Probably burned, Mint address: ${hash}`, finished);
            function finished(err) {
                console.log(`Written Error for ${hash}`);
            }
        }
    }
}

GetHashList();