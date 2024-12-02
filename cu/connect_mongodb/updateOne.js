
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://oohataaoi:T6SyRWOQsNxQblvQ@cluster0.g8sqb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
    const database = client.db('notes');
    const movies = database.collection('notes');

    // idが1のデータを更新
    const movie = await movies.replaceOne(
        {
            id: 1,
            title: 'ノート1のタイトルです',
            subTitle: 'ノート1のサブタイトルです',
            bodyText: 'ノート1の本文です'
        },
        {
            id: 1,
            title: 'ノート1のタイトル更新しました',
            subTitle: 'ノート1のサブタイトルです',
            bodyText: 'ノート1の本文です'
        }
    );

    console.log(movie);
    // 最後にクローズする
    await client.close();
}
run();
