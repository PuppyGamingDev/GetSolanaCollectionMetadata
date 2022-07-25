const fs = require("fs");
const { Connection, programs } = require('@metaplex/js');
const metaplexConnection = new Connection('mainnet-beta');
const hashlist = require('./hashlist.json');
const { metadata: { Metadata } } = programs;
const axios = require("axios");

const metadataList = [];

const getMetadata = async (tokenPubKey) => {
    try {
        const addr = await Metadata.getPDA(tokenPubKey);
        const resp = await Metadata.load(metaplexConnection, addr);
        const { data } = await axios.get(resp.data.data.uri);

        return data;
    } catch (error) {
        console.log("error fetching metadata: ", error);
    }
};

async function GrabData() {
    var count = 0;
    for (const token of hashlist) {
        count += 1;
        console.log(count);
        console.log(token)
        const metadata = await getMetadata(token);
        metadataList.push(metadata);
    }
    fs.writeFile("./CollectionMetadata.json", JSON.stringify(metadataList), finished);
    function finished(err) {
        console.log('Finished');
    }
}

GrabData();