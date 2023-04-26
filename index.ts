import puppeteer from 'puppeteer';

const main = async () => {
    try {
        const url = 'http://192.168.14.15';
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        const toner = await page.waitForSelector('li#TonerSupplies > div > div > div.contentBody > div > div > div.progress-slider > span');
        const tonerLoad = await toner?.evaluate(el => el.textContent);
        console.log('Toner: ' + tonerLoad);
        const pcdrum = await page.waitForSelector('li#PCDrumStatus > div > div > div.contentBody > div > div > div.progress-slider > span');
        const pcdrumLoad = await pcdrum?.evaluate(el => el.textContent);
        console.log('Unidade de Imagem: ' + pcdrumLoad);
        const fuser = await page.waitForSelector('li#FuserSuppliesStatus > div > div > div.contentBody > div > div > div.progress-slider > span');
        const fuserLoad = await fuser?.evaluate(el => el.textContent);
        console.log('Kit de Manutenção: ' + fuserLoad);
        await browser.close();
    }
    catch (error) {
        console.log(error.message);
    }
};

main();