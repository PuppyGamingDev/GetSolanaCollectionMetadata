# Puppy's Get Metadata on Solana

### Import modules
`npm i @metaplex-foundation/js @solana/web3.js`

## Get a Hashlist (Not currently reliable)

### Set your values
In `gethashlist.js` you will need to set a custom Endpoint and Creator Address (Not the Candy Machine ID) on lines 5 & 6. The endpoint will need to be one from QuickNode.com (They have a free tier)

### Run it!
Run it with `node gethashlist.js` and leave it to go. It will generate a `hashlist.json file in the root folder which can be used for the GetMetadata script.

## Get Metadata

### Set your collection
Test using the provided `hashlist.json` or replace it with one for your desired collection of NFTs.

### Give it a run!
Make sure the JsonMetadata folder exists in the home directory then simply run it by using `node getmetadata.js`

### Sit and wait
This may take a while depending on collection size, but just leave it running and it'll get there. It will displaay in the console as each one is saved and will create individual URI metadata files in the `JsonMetadata` folder

#

### Credits
*Credits to authors of the Metaplex & SolanaWeb3 modules used in this repo*

https://puppy.tools