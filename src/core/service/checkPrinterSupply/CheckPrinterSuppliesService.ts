import puppeteer from 'puppeteer';
import { PrinterSuppliesDTO } from '@service/checkPrinterSupply/PrinterSuppliesDTO';

class CheckPrinterSuppliesService {
    constructor() { }
    async execute(url: string): Promise<PrinterSuppliesDTO> {
        const date = new Date();
        try {
            const browser = await puppeteer.launch({ headless: "new", args: ['--proxy-server="192.168.14.1:3128" --proxy-bypass-list="192.168.14.*,192.168.8.*"'] });
            const page = await browser.newPage();
            await page.goto(url);
            const toner = await page.waitForSelector('li#TonerSupplies > div > div > div.contentBody > div > div > div.progress-slider > span');
            const tonerLevel = await toner?.evaluate(el => el.textContent)!;
            const pcdrum = await page.waitForSelector('li#PCDrumStatus > div > div > div.contentBody > div > div > div.progress-slider > span');
            const pcdrumLevel = await pcdrum?.evaluate(el => el.textContent)!;
            const fuser = await page.waitForSelector('li#FuserSuppliesStatus > div > div > div.contentBody > div > div > div.progress-slider > span');
            const fuserLevel = await fuser?.evaluate(el => el.textContent)!;
            await browser.close();
            return {
                printerId: url,
                tonerLevel,
                pcdrumLevel,
                fuserLevel,
                checkedAt: date,
                error: false,
                errorMessage: null,
            }
        }
        catch (error) {
            return {
                printerId: url,
                tonerLevel: null,
                pcdrumLevel: null,
                fuserLevel: null,
                checkedAt: date,
                error: true,
                errorMessage: error.message,
            }
        }
    }
}

export {
    CheckPrinterSuppliesService
};
