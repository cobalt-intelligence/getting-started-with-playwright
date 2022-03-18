import playwright from 'playwright';

(async () => {
    const browser = await playwright.chromium.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://cobaltintelligence.com');
    let title = await page.$eval('title', element => element.textContent);
    console.log('title', title);

    await page.click('.nav-link:nth-of-type(4)');
    title = await page.$eval('title', element => element.textContent);
    console.log('title', title);

    await page.waitForSelector('.topics');
    const topics = await page.$eval('.topics', element => element.textContent);
    console.log('topics', topics);

    await page.waitForTimeout(15000);
    await page.goto('https://businesssearch.ohiosos.gov/');
    await page.type('#bSearch', 'pizza');

    await page.click('#BusinessNameDiv [value="SEARCH"]');

    await page.waitForTimeout(25000);

    await browser.close();
})();