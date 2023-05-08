import { MongoDBPrinterSupplyVerification } from "./core/repository/implementation/MongoDBPrinterSupplyVerification";
import { CheckPrinterSuppliesService } from "./core/service/CheckPrinterSuppliesService";

(async () => {
    const checkPrinterSuppliesService = new CheckPrinterSuppliesService();
    const supplies = await checkPrinterSuppliesService.execute('http://192.168.14.15');
    console.log(supplies);
    const mongoDBPrinterSupplyVerification = new MongoDBPrinterSupplyVerification();
    mongoDBPrinterSupplyVerification.register(supplies);
})();