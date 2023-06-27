import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '@shared/environment';

class MongoDBHelper {
    private client: MongoClient | null = null;
    private uri: string | null = null
    async connect(uri: string | null = null): Promise<void> {
        this.uri = uri;
        if (!this.uri) {
            throw new Error('MongoDB uri is not defined');
        }
        this.client = await MongoClient.connect(this.uri);
    }
    async getClient(): Promise<MongoClient> {
        if(!this.client) {
            await this.connect();
            return this.client!;
        }
        return this.client;
    }
}

const mongoDBHelper = new MongoDBHelper();

// const mongoDBHelper = async () => {
//     if (!MONGODB_URI) {
//         throw new Error('MONGODB_URI is not defined');
//     }
//     const client = new MongoClient(MONGODB_URI);
//     try {
//         await client.connect();
//     }
//     catch (error) {
//         throw new Error(error);
//     }
//     return client;
// };

export {
    mongoDBHelper
}