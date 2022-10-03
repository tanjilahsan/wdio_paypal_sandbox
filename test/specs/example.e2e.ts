import LoginPage from  '../pageobjects/login.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await browser.switchToFrame(await $("#paypal-button-container>div>iframe[id^='jsx-iframe-']"));
        await $('#buttons-container > div > div.paypal-button-row.paypal-button-number-0.paypal-button-layout-vertical.paypal-button-shape-rect.paypal-button-number-multiple.paypal-button-env-sandbox.paypal-button-color-gold.paypal-button-text-color-black.paypal-logo-color-blue > div').click();
        await browser.pause(10000);
    });
});


