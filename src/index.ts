import { MongoDBPrinterSupplyVerificationRepository } from "./core/repository/printerSupplyVerification/implementation/MongoDBPrinterSupplyVerificationRepository";
import { CheckPrinterSuppliesService } from "./core/service/checkPrinterSupply/CheckPrinterSuppliesService";
import { mongoDBHelper } from './core/helper/MongoDBHelper';

(async () => {
    await mongoDBHelper.connect();
    const client = mongoDBHelper.getClient();
    const checkPrinterSuppliesService = new CheckPrinterSuppliesService();
    const supplies = await checkPrinterSuppliesService.execute('http://192.168.14.15');
    console.log(supplies);
    const mongoDBPrinterSupplyVerificationRepository = new MongoDBPrinterSupplyVerificationRepository(client);
    await mongoDBPrinterSupplyVerificationRepository.register(supplies);
})();