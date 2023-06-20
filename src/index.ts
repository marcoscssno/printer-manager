import { mongoDBHelper } from '@helper/MongoDBHelper';
import { MongoDBPrinterSupplyVerificationRepository } from "@repository/printerSupplyVerification/implementation/MongoDBPrinterSupplyVerificationRepository";
import { CheckPrinterSuppliesService } from "@service/checkPrinterSupply/CheckPrinterSuppliesService";

(async () => {
    await mongoDBHelper.connect();
    const client = mongoDBHelper.getClient();
    const checkPrinterSuppliesService = new CheckPrinterSuppliesService();
    const supplies = await checkPrinterSuppliesService.execute('http://192.168.14.15');
    console.log(supplies);
    const mongoDBPrinterSupplyVerificationRepository = new MongoDBPrinterSupplyVerificationRepository(client);
    await mongoDBPrinterSupplyVerificationRepository.register(supplies);
})();
