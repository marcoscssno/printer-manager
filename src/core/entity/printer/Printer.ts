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
        this.props.ipAddress = ipAddress;
    }
    getManufacturer(): string {
        return this.props.manufacturer;
    }
    setManufacturer(manufacturer: string): void {
        this.props.manufacturer = manufacturer;
    }
    getModel(): string | null {
        if(!this.props.model) return null;
        return this.props.model;
    }
    setModel(model: string): void {
        this.props.model = model;
    }
    getSerialNumber() {
        return this.props.serialNumber;
    }
    setSerialNumber(serialNumber: string): void {
        this.props.serialNumber = serialNumber;
    }
    getPropertyNumber() {
        return this.props.propertyNumber;
    }
    setPropertyNumber(propertyNumber: number): void {
        this.props.propertyNumber = propertyNumber;
    }
    getCreatedAt(): Date {
        return this.props.createdAt;
    }
    setCreatedAt(createdAt: Date): void {
        this.props.createdAt = createdAt;
    }
    getCreatedBy(): string {
        return this.props.createdBy;
    }
    setCreatedBy(createdBy: string): void {
        this.props.createdBy = createdBy;
    }
    getLastUpdatedAt() {
        return this.props.lastUpdatedAt;
    }
    setLastUpdatedAt(lastUpdatedAt: Date): void {
        this.props.lastUpdatedAt = lastUpdatedAt;
    }
    getLastUpdatedBy() {
        return this.props.lastUpdatedBy;
    }
    setLastUpdatedBy(lastUpdatedBy: string): void {
        this.props.lastUpdatedBy = lastUpdatedBy;
    }
    getIsDeleted(): boolean {
        return this.props.isDeleted;
    }
    setIsDeleted(isDeleted: boolean): void {
        this.props.isDeleted = isDeleted;
    }
    getDeletedAt() {
        return this.props.deletedAt;
    }
    setDeletedAt(deletedAt: Date): void {
        this.props.deletedAt = deletedAt;
    }
}

export {
    Printer
}