import { PrinterSuppliesDTO } from "../../service/PrinterSuppliesDTO";
import { PrinterSupplyVerificationRepositoryInterface } from "../PrinterSupplyVerificationRepositoryInterface";
import { mongoDBHelper } from "../../helper/MongoDBHelper";

class MongoDBPrinterSupplyVerificationRepository implements PrinterSupplyVerificationRepositoryInterface {
    async register(data: PrinterSuppliesDTO): Promise<void> {
        const client = mongoDBHelper.getClient();
        try {
            await client.db('printers').collection('printers').insertOne(data);
        }
        catch(error) {
            console.error(error);
        }
    }
    async findAll(): Promise<any[] | []> {
        try {
            const client = mongoDBHelper.getClient();
            const printerSupplyVerifications = await client.db('printers').collection('printers').find().toArray();
            return printerSupplyVerifications;
        }
        catch(error) {
            console.error(error);
            return [];
        }
    }   
}

export {
    MongoDBPrinterSupplyVerificationRepository
}