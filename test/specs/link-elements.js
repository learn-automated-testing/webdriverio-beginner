

describe('CSS test', () => {
    it('Link Elements', async () => {

        // Go to the webpage
        await browser.url('https://www.practiceautomatedtesting.com/webelements/link-elements.html');

        // Verify the correct page is loaded
        await expect(browser).toHaveUrlContaining('link-elements');

        // Get the CSS of the HYPERLINK element
        const hyperlink = await $('[id="testLink"]');

        // Click the hyperlink
        await hyperlink.click();

        // Verify the successful submission
        const successfulClick = await $('[id="targetSection"] p');

        await successfulClick.waitForDisplayed();

        await expect(successfulClick).toHaveText('You have reached the target section!');

    });
});