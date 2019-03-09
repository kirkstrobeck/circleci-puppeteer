const mkdirp = require('mkdirp');
const puppeteer = require('puppeteer');

(async () => {
  mkdirp('./tmp');

  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({
    headless: true,
    // executablePath:
    //   '/home/sagar/workplace/scraping-demo/node_modules/puppeteer/.local-chromium/linux-599821/chrome-linux/chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.goto('https://www.google.com/');

  console.log(await page.$eval('input[name="btnI"]', x => x.value));

  await page.screenshot({ path: 'tmp/example.png' });

  await browser.close();
})();
