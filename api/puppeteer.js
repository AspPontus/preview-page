const puppeteer = require('puppeteer');

const fetchIframe = async (link) => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    await page.goto(link)
    await page.waitForSelector('.build-preview iframe');

    const iframe = await page.evaluate(() => {
        return document.querySelector('.build-preview iframe').src
    })

    return iframe
}

module.exports.fetchIframe = fetchIframe;