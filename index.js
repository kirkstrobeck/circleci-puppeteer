const mkdirp = require('mkdirp');
const puppeteer = require('puppeteer');

(async () => {
  mkdirp('./tmp');

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/');

  console.log(await page.$eval('input[name="btnI"]', x => x.value));

  await page.screenshot({ path: 'tmp/example.png' });

  await browser.close();
})();
