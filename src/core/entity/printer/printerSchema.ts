import { object, string, boolean, number, date, array, ObjectSchema } from 'yup';
import { printerSupplySchema } from '@entity/printerSupply/printerSupplySchema';
import { PrinterProps } from './PrinterProps';

const printerSchema: ObjectSchema<PrinterProps> = object({
    id: string().uuid().required(),
    ipAddress: string().nullable().optional(),
    manufacturer: string().required(),
    model: string().nullable().optional(),
    serialNumber: string().nullable().optional(),
    propertyNumber: number().nullable().optional(),
    supply: array().of(printerSupplySchema).optional(),
    createdAt: date().required(),
    createdBy: string().required(),
    lastUpdatedAt: date().nullable().optional(),
    lastUpdatedBy: string().nullable().optional(),
    isDeleted: boolean().required(),
    deletedAt: date().nullable().optional()
});

export { 
    printerSchema
}