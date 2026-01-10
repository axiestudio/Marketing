import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

// Launch the browser and page
const generatePDF = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set Viewport to verify responsiveness/rendering
    await page.setViewport({ width: 1200, height: 800 });

    // Navigate to Vite Dev Server (Must be running!)
    // In a real automated pipeline, we'd start the server here dynamically.
    // For now, we assume 'npm run dev' is running on port 5173.
    const appUrl = 'http://localhost:5173/';
    console.log(`Navigating to ${appUrl}...`);
    try {
        await page.goto(appUrl, { waitUntil: 'networkidle0' });
    } catch (e) {
        console.error("Error connecting to Vite. Is 'npm run dev' running?");
        process.exit(1);
    }

    // --- Generate English Card ---
    console.log('Generating Business Card (Current Config)...');
    await page.pdf({
        path: path.resolve(__dirname, '../../_DELIVERABLES/BusinessCard_Dynamic_V2.pdf'),
        width: '85mm',
        height: '55mm',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    console.log('Success! PDF saved to _DELIVERABLES/BusinessCard_Dynamic_V2.pdf');

    await browser.close();
};

generatePDF();
