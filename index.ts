import { MongoDBPrinterSupplyVerificationRepository } from "./core/repository/implementation/MongoDBPrinterSupplyVerificationRepository";
import { CheckPrinterSuppliesService } from "./core/service/CheckPrinterSuppliesService";
import { mongoDBHelper } from './core/helpers/MongoDBHelper';

(async () => {
    await mongoDBHelper.connect();
    const checkPrinterSuppliesService = new CheckPrinterSuppliesService();
    const supplies = await checkPrinterSuppliesService.execute('http://192.168.14.15');
    console.log(supplies);
    const mongoDBPrinterSupplyVerificationRepository = new MongoDBPrinterSupplyVerificationRepository();
    await mongoDBPrinterSupplyVerificationRepository.register(supplies);
})();