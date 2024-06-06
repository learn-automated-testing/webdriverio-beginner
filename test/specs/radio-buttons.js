



describe('CSS test', () => {
    it('Radiobuttons', async () => {

        // Go to the webpage
        await browser.url('https://www.practiceautomatedtesting.com/webelements/radio-buttons.html');

        // Verify the correct page is loaded
        await expect(browser).toHaveUrlContaining('radio-buttons');

        // Get the CSS of the RADIOBUTTON1 element
        const checkbox1 = await $('[id="radio1"]');

        // Check radio button1
        await checkbox1.click();

        // Verify the correct radio button is enabled 
        let message = await $('[id="message"]');
        await expect(message).toHaveText('You selected: Radio 1');

        // Get the CSS of the RADIOBUTTON2 element
        const checkbox2 = await $('[id="radio2"]');

        // Check radio button2
        await checkbox2.click();

       // Verify the correct radio button is enabled 
       await expect(message).toHaveText('You selected: Radio 2');

    });
});