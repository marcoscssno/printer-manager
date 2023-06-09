import { object, string, number, boolean, date, ObjectSchema } from 'yup';
import { PrinterSupplyTypeProps } from './PrinterSupplyTypeProps';

const printerSupplyTypeSchema: ObjectSchema<PrinterSupplyTypeProps> = object({
    id: string().uuid().required(),
    name: string().required(),
    createdAt: date().required(),
    createdBy: string().required(),
    lastUpdatedAt: date().nullable().optional(),
    lastUpdatedBy: string().nullable().optional(),
    isDeleted: boolean().required(),
    deletedAt: date().nullable().optional()
});

export {
    printerSupplyTypeSchema
};
