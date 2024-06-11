

describe('CSS test', () => {
    it('Scroll into view', async () => {


        // Go to the webpage
        await browser.url('https://www.practiceautomatedtesting.com/webelements/ScrollButtonPage');

        // Verify the correct page is loaded
        await expect(browser).toHaveUrlContaining('ScrollButtonPage');

        // Get the CSS of the BUTTON element
        const button = await $('[class="scroll-button"]');

        // Scroll down to the click-me button 
        await button.scrollIntoView();
        
        await button.click();

        // Verify the button is clicked correctly
        const message = await $('[class="message"]') 
        await message.waitForDisplayed();
        await expect(message).toHaveText('Found and clicked on the button!');

        await browser.pause(3000);

    });
});