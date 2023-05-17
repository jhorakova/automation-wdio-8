



describe('czechitas kontakty', async () => {

    it ('kontakty', async () => {
        await browser.reloadSession();
        await browser.url('/kontakt');
        await browser.pause(3000);
    })
})


describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');

        const windowSize = await browser.getWindowSize();
        console.log(windowSize);

        await browser.saveScreenshot('login_page.png');

        await browser.pause(5000);

    });

})
