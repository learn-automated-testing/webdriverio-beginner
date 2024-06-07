

describe('CSS test', () => {
    it('Hover', async () => {

        // Go to the webpage
        await browser.url('https://www.practiceautomatedtesting.com/webelements/hover.html');

        // Verify the correct page is loaded
        await expect(browser).toHaveUrlContaining('hover');

        // Get the CSS of the HOVER element
        const hoverObject = await $('[class="hover-text"]');

        // Move the cursor to the hover object
        await hoverObject.moveTo();

    });
});