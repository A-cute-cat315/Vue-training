
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://oohataaoi:T6SyRWOQsNxQblvQ@cluster0.g8sqb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
    const database = client.db('notes');
    const notes = database.collection('notes');

    // idが2のドキュメントを削除
    const note = await notes.deleteOne({ id: 2 });
    console.log(note);
    // 最後にクローズする
    await client.close();
}

run();
