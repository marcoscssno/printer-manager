import { CheckPrinterSuppliesService } from "./core/service/CheckPrinterSuppliesService";

(async () => {
    const checkPrinterSuppliesService = new CheckPrinterSuppliesService();
    const supplies = await checkPrinterSuppliesService.execute('http://192.168.8.15');
    console.log(supplies);
})();