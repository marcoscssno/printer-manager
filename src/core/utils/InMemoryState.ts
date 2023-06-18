import { PrinterProps } from "@entity/printer/PrinterProps";
import { PrinterSupplyTypeProps } from "@entity/printerSupplyType/PrinterSupplyTypeProps";

class InMemoryState {
    public printers: PrinterProps[];
    public printerSupplyTypes: PrinterSupplyTypeProps[];
    constructor() {
        this.printers = [];
        this.printerSupplyTypes = [];
    }
}

const inMemoryState = new InMemoryState();

export {
    InMemoryState,
    inMemoryState
};
