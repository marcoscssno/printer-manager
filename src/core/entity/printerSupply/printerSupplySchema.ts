import { object, string, number, boolean, date, ObjectSchema } from 'yup';
import { PrinterSupply } from './PrinterSupply';

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
}
