import { v4 as uuidv4 } from 'uuid';

class PrinterSupply {
    private readonly id: string;
    private name: string;
    private level: string;
    private createdAt: Date;
    private createdBy: string;
    private lastUpdatedAt: Date;
    private lastUpdatedBy: string;
    private isDeleted: boolean;
    private deletedAt: Date;

    constructor(props: Omit<PrinterSupply, 'id'>, id?: string) {
        Object.assign(this, props);
        if(!id) {
            this.id = uuidv4();
        }
    }
}

export {
    PrinterSupply
}