import puppeteer from 'puppeteer';


describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
        jest.setTimeout(100000);
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 250, //slowdown by 250 ms
            ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    }, 100000);

    afterAll(() => {
        browser.close();
    });

    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .description');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('.event .show-details-btn');
        const eventDetails = await page.$('.event .description');
        expect(eventDetails).toBeDefined();
    });

    test('User can collapse an event to hide its details', async () => {
        await page.click('.event .hide-details-btn');
        const eventDetails = await page.$('.event .description');
        expect(eventDetails).toBeNull();
    });
});