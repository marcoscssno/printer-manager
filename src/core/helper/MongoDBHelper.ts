import { MongoClient } from 'mongodb';

class MongoDBHelper {

    private client: MongoClient;

    async connect(): Promise<void> {
        const uri = "MONGODB_URI";
        const client = new MongoClient(uri);
        this.client = client;
        try {
            await client.connect();
        }
        catch (error) {
            console.error(error);
        }
    }

    getClient(): MongoClient {
        return this.client;
    }
}

const mongoDBHelper = new MongoDBHelper();

export {
    MongoDBHelper,
    mongoDBHelper
}