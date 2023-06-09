import { MongoClient } from "mongodb";
import { PrinterSuppliesDTO } from "@service/checkPrinterSupply/PrinterSuppliesDTO";
import { PrinterSupplyVerificationRepositoryInterface } from "@repository/printerSupplyVerification/PrinterSupplyVerificationRepositoryInterface";

class MongoDBPrinterSupplyVerificationRepository implements PrinterSupplyVerificationRepositoryInterface {
    private client: MongoClient;
    constructor(client: MongoClient) {
        this.client = client;
    }
    async register(data: PrinterSuppliesDTO): Promise<void> {
        try {
            await this.client.db('printers').collection('printerSupplyVerifications').insertOne(data);
        }
        catch (error) {
            console.error(error);
        }
    }
    async findAll(): Promise<any[] | []> {
        try {
            const printerSupplyVerifications = await this.client.db('printers').collection('printerSupplyVerifications').find().toArray();
            return printerSupplyVerifications;
        }
        catch (error) {
            console.error(error);
            return [];
        }
    }
}

export {
    MongoDBPrinterSupplyVerificationRepository
};
