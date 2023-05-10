import { PrinterSupply } from "./PrinterSupply";
import { PrinterProperties } from './PrinterProperties';
import { v4 as uuidv4 } from 'uuid';

class Printer {
    private readonly id: string;
    private ipAddress: string;
    private manufacturer: string;
    private model: string;
    private serialNumber: string;
    private propertyNumber: string;
    private supply: PrinterSupply[];
    private createdAt: Date;
    private createdBy: string;
    private lastUpdatedAt: Date;
    private lastUpdatedBy: string;
    private isDeleted: boolean;
    private deletedAt: Date;
    constructor(properties: PrinterProperties, id?: string) {
        Object.assign(this, properties);
        if(!id) {
            this.id = uuidv4();
        }
    }
    getId(): string {
        return this.id;
    }
    getIpAddress(): string {
        return this.ipAddress;
    }
    setIpAddress(ipAddress: string): void {
        this.ipAddress = ipAddress;
    }
    getManufacturer(): string {
        return this.manufacturer;
    }
    setManufacturer(manufacturer: string): void {
        this.manufacturer = manufacturer;
    }
    getModel(): string {
        return this.model;
    }
    setModel(model: string): void {
        this.model = model;
    }
    getSerialNumber(): string {
        return this.serialNumber;
    }
    setSerialNumber(serialNumber: string): void {
        this.serialNumber = serialNumber;
    }
    getPropertyNumber(): string {
        return this.propertyNumber;
    }
    setPropertyNumber(propertyNumber: string): void {
        this.propertyNumber = propertyNumber;
    }
    getSupply(): PrinterSupply[] {
        return this.supply;
    }
    setSupply(supply: PrinterSupply[]): void {
        this.supply = supply;
    }
    getCreatedAt(): Date {
        return this.createdAt;
    }
    setCreatedAt(createdAt: Date): void {
        this.createdAt = createdAt;
    }
    getCreatedBy(): string {
        return this.createdBy;
    }
    setCreatedBy(createdBy: string): void {
        this.createdBy = createdBy;
    }
    getLastUpdatedAt(): Date {
        return this.lastUpdatedAt;
    }
    setLastUpdatedAt(lastUpdatedAt: Date): void {
        this.lastUpdatedAt = lastUpdatedAt;
    }
    getLastUpdatedBy(): string {
        return this.lastUpdatedBy;
    }
    setLastUpdatedBy(lastUpdatedBy: string): void {
        this.lastUpdatedBy = lastUpdatedBy;
    }
    getIsDeleted(): boolean {
        return this.isDeleted;
    }
    setIsDeleted(isDeleted: boolean): void {
        this.isDeleted = isDeleted;
    }
    getDeletedAt(): Date {
        return this.deletedAt;
    }
    setDeletedAt(deletedAt: Date): void {
        this.deletedAt = deletedAt;
    }
}

export {
    Printer
}