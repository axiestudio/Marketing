const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const generateBanner = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // 1584x396 pixel banner
    await page.setViewport({ width: 1584, height: 396 });

    // Navigate to Banner Mode
    const appUrl = 'http://localhost:5173/?banner=true';
    console.log(`Navigating to ${appUrl}...`);
    try {
        await page.goto(appUrl, { waitUntil: 'networkidle0' });
    } catch (e) {
        console.error("Error connecting to Vite.");
        process.exit(1);
    }

    const outputDir = path.resolve(__dirname, '../../_DELIVERABLES');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, 'AxieStudio_LinkedIn_Banner.png');
    console.log('Capturing Banner...');

    // Screenshot the full viewport
    await page.screenshot({
        path: outputPath,
        fullPage: true
    });

    console.log(`Success! Banner saved to ${outputPath}`);

    await browser.close();
};

generateBanner();
