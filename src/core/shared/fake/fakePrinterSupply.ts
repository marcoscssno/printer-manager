import { PrinterSupplyProps } from "@entity/printerSupply/PrinterSupplyProps";
import { fakeId, fakeLevel } from "./fakeProp";

const fakePrinterSupply = () => {
    return {
        printerSupplyTypeId: fakeId(),
        name: "Black Toner",
        level: fakeLevel()
    }
}

export {
    fakePrinterSupply
};
