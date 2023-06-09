import { v4 as uuidv4 } from 'uuid';
import { PrinterSupplyTypeProps } from "@entity/printerSupplyType/PrinterSupplyTypeProps";
import { printerSupplyTypeSchema } from "@entity/printerSupplyType/printerSupplyTypeSchema";

class PrinterSupplyType {
    private props: PrinterSupplyTypeProps;
    constructor(props: Omit<PrinterSupplyTypeProps, "id">, id?: string) {
        try {
            if (!id) {
                id = uuidv4();
            }
            const data = { id, ...props };
            const validatedProps = printerSupplyTypeSchema.validateSync(data);
            this.props = validatedProps;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getProps(): PrinterSupplyTypeProps {
        return this.props;
    }
    getId(): string {
        return this.props.id;
    }
    getName(): string {
        return this.props.name;
    }
    setName(name: string): void {
        try {
            const validatedProp = printerSupplyTypeSchema.validateSyncAt('name', name, { strict: true });
            this.props.name = validatedProp;
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
            const validatedProp = printerSupplyTypeSchema.validateSyncAt('lastUpdatedAt', lastUpdatedAt, { strict: true });
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
            const validatedProp = printerSupplyTypeSchema.validateSyncAt('lastUpdatedBy', lastUpdatedBy, { strict: true });
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
            const validatedProp = printerSupplyTypeSchema.validateSyncAt('isDeleted', isDeleted, { strict: true });
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
            const validatedProp = printerSupplyTypeSchema.validateSyncAt('deletedAt', deletedAt, { strict: true });
            this.props.deletedAt = validatedProp;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}

export {
    PrinterSupplyType
};
