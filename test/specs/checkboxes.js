

describe('CSS test', () => {
    it('Checkboxes', async () => {

        // Go to the webpage
        await browser.url('https://www.practiceautomatedtesting.com/webelements/checkboxes.html');

        // Verify the correct page is loaded
        await expect(browser).toHaveUrlContaining('checkboxes');

        // Get the CSS of the CHECKBOX1 element
        const checkbox1 = await $('[id="checkbox1"]');

        // Check checkbox1
        await checkbox1.click();

        // Get the CSS of the CHECKBOX2 element
        const checkbox2 = await $('[id="checkbox2"]');

        // Check checkbox2
        await checkbox2.click();

        // Uncheck CHECKBOX1
        await checkbox1.click();

        // Unheck CHECKBOX2
        await checkbox2.click();

    });
});