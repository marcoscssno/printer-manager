import { PrinterProps } from './PrinterProps';
import { v4 as uuidv4 } from 'uuid';
import { printerSchema } from "./printerSchema";

class Printer {
    private props: PrinterProps;
    constructor(props: Omit<PrinterProps, 'id'>, id?: string) {
        try {
            if(!id) {
                id = uuidv4();
            }
            const data = { id, ...props };
            const validatedProps = printerSchema.validateSync(data);
            this.props = validatedProps;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getProps(): PrinterProps {
        return this.props;
    }
    getId(): string {
        return this.props.id;
    }
    getIpAddress(): string | null {
        return this.props.ipAddress || null;
    }
    setIpAddress(ipAddress: string | null): void {
        try {
            const validatedProp = printerSchema.validateSyncAt('ipAddress', ipAddress, { strict: true });
            this.props.ipAddress = validatedProp;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getManufacturer(): string {
        return this.props.manufacturer;
    }
    setManufacturer(manufacturer: string): void {
        try {
            const validatedProp = printerSchema.validateSyncAt('manufacturer', manufacturer, { strict: true });
            this.props.manufacturer = validatedProp;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getModel(): string | null {
        return this.props.model || null;
    }
    setModel(model: string | null): void {
        try {
            const validatedProp = printerSchema.validateSyncAt('model', model, { strict: true });
            this.props.model = validatedProp;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getSerialNumber(): string | null {
        return this.props.serialNumber || null;
    }
    setSerialNumber(serialNumber: string | null): void {
        try {
            const validatedProp = printerSchema.validateSyncAt('serialNumber', serialNumber, { strict: true });
            this.props.serialNumber = validatedProp;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getPropertyNumber(): number | null {
        return this.props.propertyNumber || null;
    }
    setPropertyNumber(propertyNumber: number | null): void {
        try {
            const validatedProp = printerSchema.validateSyncAt('propertyNumber', propertyNumber, { strict: true });
            this.props.propertyNumber = validatedProp;
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
            const validatedProp = printerSchema.validateSyncAt('lastUpdatedAt', lastUpdatedAt, { strict: true });
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
            const validatedProp = printerSchema.validateSyncAt('lastUpdatedBy', lastUpdatedBy, { strict: true });
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
            const validatedProp = printerSchema.validateSyncAt('isDeleted', isDeleted, { strict: true });
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
            const validatedProp = printerSchema.validateSyncAt('deletedAt', deletedAt, { strict: true });
            this.props.deletedAt = validatedProp;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}

export {
    Printer
}