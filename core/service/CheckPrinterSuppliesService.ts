import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import { PrinterSuppliesDTO } from './PrinterSuppliesDTO';

class CheckPrinterSuppliesService {
    constructor() { }
    async execute(url: string): Promise<PrinterSuppliesDTO> {
        try {
            
            const browser = await puppeteer.launch({ headless: "new", args: ['--proxy-server="192.168.14.1:3128" --proxy-bypass-list="192.168.14.*,192.168.8.*"'] });
            const page = await browser.newPage();
            await page.goto(url);
            await page.waitForSelector('li#TonerSupplies');
            const htmlContent = await page.content();
            const $ = cheerio.load(htmlContent);
            const tonerLevel = $('li#TonerSupplies > div > div > div.contentBody > div > div > div.progress-slider > span').text();
            const pcdrumLevel = $('li#PCDrumStatus > div > div > div.contentBody > div > div > div.progress-slider > span').text();
            const fuserLevel = $('li#FuserSuppliesStatus > div > div > div.contentBody > div > div > div.progress-slider > span').text();
            await browser.close();
            return {
                tonerLevel,
                pcdrumLevel,
                fuserLevel,
                error: false,
                errorMessage: null,
            }
        }
        catch (error) {
            return {
                tonerLevel: null,
                pcdrumLevel: null,
                fuserLevel: null,
                error: true,
                errorMessage: error.message,
            }
        }
    }
}

export {
    CheckPrinterSuppliesService
}