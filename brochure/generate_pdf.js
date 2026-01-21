const puppeteer = require('puppeteer');
const path = require('path');
const url = require('url');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // --- ENGLISH VERSION ---
  console.log('Generating English PDF...');
  const htmlPathEn = path.join(__dirname, 'index.html');
  const fileUrlEn = url.pathToFileURL(htmlPathEn).href;
  await page.goto(fileUrlEn, { waitUntil: 'networkidle0' });
  await page.emulateMediaType('print');

  await page.pdf({
    path: path.join(__dirname, 'AxieStudio_Brochure_EN.pdf'),
    format: 'A3',
    landscape: true,
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
  });

  // --- SWEDISH BROCHURE ---
  console.log('Generating Swedish PDF...');
  const htmlPathSv = path.join(__dirname, 'index-sv.html');
  const fileUrlSv = url.pathToFileURL(htmlPathSv).href;

  await page.goto(fileUrlSv, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: path.join(__dirname, 'AxieStudio_Brochure_SV.pdf'),
    format: 'A3',
    landscape: true,
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
  });

  // --- BUSINESS CARDS ---
  console.log('Generating Business Cards...');

  // English Card
  const cardPathEn = path.join(__dirname, 'card.html');
  const cardUrlEn = url.pathToFileURL(cardPathEn).href;
  await page.goto(cardUrlEn, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: path.join(__dirname, 'BusinessCard_EN.pdf'),
    width: '85mm',
    height: '55mm',
    printBackground: true,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' } // Bleed handled by CSS size
  });

  // Swedish Card
  const cardPathSv = path.join(__dirname, 'card-sv.html');
  const cardUrlSv = url.pathToFileURL(cardPathSv).href;
  await page.goto(cardUrlSv, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: path.join(__dirname, 'BusinessCard_SV.pdf'),
    width: '85mm',
    height: '55mm',
    printBackground: true,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
  });

  console.log('Success! Generated Brochures and Business Cards.');

  await browser.close();
})();
