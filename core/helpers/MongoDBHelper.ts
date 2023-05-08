import { MongoClient } from 'mongodb';

class MongoDBHelper {

    private client: MongoClient;

    async connect(): Promise<void> {
        const uri = "mongodb+srv://marcoscssno:7slgsXMroSCdl0q5@cluster0.xvy4wor.mongodb.net/?retryWrites=true&w=majority";
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