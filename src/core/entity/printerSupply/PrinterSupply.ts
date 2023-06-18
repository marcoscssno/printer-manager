import { v4 as uuidv4 } from 'uuid';
import { PrinterSupplyProps } from '@entity/printerSupply/PrinterSupplyProps';
import { printerSupplySchema } from './printerSupplySchema';

class PrinterSupply {
    private props: PrinterSupplyProps;

    constructor(props: Omit<PrinterSupplyProps, 'id'>, id?: string) {
        try {
            if (!id) {
                id = uuidv4();
            }
            const data = { id, ...props };
            const validatedProps = printerSupplySchema.validateSync(data);
            this.props = validatedProps;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getProps(): PrinterSupplyProps {
        return this.props;
    }
    getId(): string {
        return this.props.id;
    }
    getPrinterSupplyTypeId(): string {
        return this.props.printerSupplyTypeId;
    }
    setPrinterSupplyTypeId(printerSupplyTypeId: string): void {
        try {
            const validatedProp = printerSupplySchema.validateSyncAt('printerSupplyTypeId', printerSupplyTypeId, { strict: true });
            this.props.printerSupplyTypeId = validatedProp;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getName(): string | undefined {
        return this.props.name;
    }
    setName(name: string): void {
        try {
            const validatedProp = printerSupplySchema.validateSyncAt('name', name, { strict: true });
            this.props.name = validatedProp;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getLevel(): number | null {
        return this.props.level || null;
    }
    setLevel(level: number): void {
        try {
            const validatedProp = printerSupplySchema.validateSyncAt('level', level, { strict: true });
            this.props.level = validatedProp;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getCreatedAt(): Date {
        return this.props.createdAt;
    }
    getCreatedBy(): string {
        return this.props.createdBy;
    }
    getLastUpdatedAt(): Date | null {
        return this.props.lastUpdatedAt || null;
    }
    setLastUpdatedAt(lastUpdatedAt: Date | null): void {
        try {
            const validatedProp = printerSupplySchema.validateSyncAt('lastUpdatedAt', lastUpdatedAt, { strict: true });
            this.props.lastUpdatedAt = validatedProp;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getLastUpdatedBy(): string | null {
        return this.props.lastUpdatedBy || null;
    }
    setLastUpdatedBy(lastUpdatedBy: string | null): void {
        try {
            const validatedProp = printerSupplySchema.validateSyncAt('lastUpdatedBy', lastUpdatedBy, { strict: true });
            this.props.lastUpdatedBy = validatedProp;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getIsDeleted(): boolean {
        return this.props.isDeleted;
    }
    setIsDeleted(isDeleted: boolean): void {
        try {
            const validatedProp = printerSupplySchema.validateSyncAt('isDeleted', isDeleted, { strict: true });
            this.props.isDeleted = validatedProp;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getDeletedAt(): Date | null {
        return this.props.deletedAt || null;
    }
    setDeletedAt(deletedAt: Date | null): void {
        try {
            const validatedProp = printerSupplySchema.validateSyncAt('deletedAt', deletedAt, { strict: true });
            this.props.deletedAt = validatedProp;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}

export {
    PrinterSupply
};
