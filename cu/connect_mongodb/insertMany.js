
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://oohataaoi:T6SyRWOQsNxQblvQ@cluster0.g8sqb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
    const database = client.db('notes');
    const notes = database.collection('notes');

    // データを登録
    const query = [{
        id: 1,
        title: 'ノート1のタイトルです',
        subTitle: 'ノート1のサブタイトルです',
        bodyText: 'ノート1の本文です'
    },
    {
        id: 2,
        title: 'ノート2のタイトルです',
        subTitle: 'ノート2のサブタイトルです',
        bodyText: 'ノート2の本文です'
    }];

    const note = await notes.insertMany(query);
    console.log(note);
    // 最後にクローズする
    await client.close();
}
run()
