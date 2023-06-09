import { ObjectSchema, boolean, date, number, object, string } from 'yup';
import { PrinterSupply } from '@entity/printerSupply/PrinterSupply';

const printerSupplySchema: ObjectSchema<PrinterSupply> = object({
    name: string(),
    level: number().min(0).max(100),
    createdAt: date(),
    createdBy: string(),
    lastUpdatedAt: date().nullable(),
    lastUpdatedBy: string().nullable(),
    isDeleted: boolean(),
    deletedAt: date().nullable()
});

export {
    printerSupplySchema
};
