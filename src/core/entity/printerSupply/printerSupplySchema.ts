import { PrinterSupplyProps } from '@entity/printerSupply/PrinterSupplyProps';
import { ObjectSchema, boolean, date, number, object, string } from 'yup';

const printerSupplySchema: ObjectSchema<PrinterSupplyProps> = object({
    id: string().uuid().required(),
    printerSupplyTypeId: string().uuid().required(),
    name: string().optional(),
    level: number().min(0).max(100).nullable().optional(),
    createdAt: date().required(),
    createdBy: string().required(),
    lastUpdatedAt: date().nullable().optional(),
    lastUpdatedBy: string().nullable().optional(),
    isDeleted: boolean().required(),
    deletedAt: date().nullable().optional()
});

export {
    printerSupplySchema
};
