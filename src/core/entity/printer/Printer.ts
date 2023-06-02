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
    getId() {
        return this.props.id;
    }
    getIpAddress() {
        return this.props.ipAddress;
    }
    setIpAddress(ipAddress: string): void {
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
        if(!this.props.model) return null;
        return this.props.model;
    }
    setModel(model: string): void {
        try {
            const validatedProp = printerSchema.validateSyncAt('model', model, { strict: true });
            this.props.model = validatedProp;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getSerialNumber() {
        return this.props.serialNumber;
    }
    setSerialNumber(serialNumber: string): void {
        try {
            const validatedProp = printerSchema.validateSyncAt('serialNumber', serialNumber, { strict: true });
            this.props.serialNumber = validatedProp;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getPropertyNumber() {
        return this.props.propertyNumber;
    }
    setPropertyNumber(propertyNumber: number): void {
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
    setCreatedAt(createdAt: Date): void {
        try {
            const validatedProp = printerSchema.validateSyncAt('createdAt', createdAt, { strict: true });
            this.props.createdAt = validatedProp;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getCreatedBy(): string {
        return this.props.createdBy;
    }
    setCreatedBy(createdBy: string): void {
        try {
            const validatedProp = printerSchema.validateSyncAt('createdBy', createdBy, { strict: true });
            this.props.createdBy = validatedProp;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getLastUpdatedAt() {
        return this.props.lastUpdatedAt;
    }
    setLastUpdatedAt(lastUpdatedAt: Date): void {
        try {
            const validatedProp = printerSchema.validateSyncAt('lastUpdatedAt', lastUpdatedAt, { strict: true });
            this.props.lastUpdatedAt = validatedProp;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getLastUpdatedBy() {
        return this.props.lastUpdatedBy;
    }
    setLastUpdatedBy(lastUpdatedBy: string): void {
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
    getDeletedAt() {
        return this.props.deletedAt;
    }
    setDeletedAt(deletedAt: Date): void {
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