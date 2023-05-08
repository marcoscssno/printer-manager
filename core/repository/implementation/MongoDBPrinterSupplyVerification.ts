import { PrinterSuppliesDTO } from "../../service/PrinterSuppliesDTO";
import { PrinterSupplyVerificationInterface } from "../PrinterSupplyVerificationInterface";
import { MongoDBHelper } from "../helpers/MongoDBHelper";

const mongoDBHelper = new MongoDBHelper();

(async (mongoDBHelper) => {
    await mongoDBHelper.connect()!;
})(mongoDBHelper);

class MongoDBPrinterSupplyVerification implements PrinterSupplyVerificationInterface {
    async register(data: PrinterSuppliesDTO): Promise<void> {
        const client = mongoDBHelper.getClient();
        try {
            await client.db('printers').collection('printers').insertOne(data);
        }
        catch(error) {
            console.error(error);
        }
    }
    findAll(): Promise<any[] | []> {
        throw new Error("Method not implemented.");
    }   
}

export {
    MongoDBPrinterSupplyVerification
}