

describe('CSS test', () => {
    it('Text Elements', async () => {

        // Go to the webpage
        await browser.url('https://www.practiceautomatedtesting.com/webelements/text-elements.html');

        // Verify the correct page is loaded
        await expect(browser).toHaveUrlContaining('text-elements');

        // Get the CSS of the INPUT FIELD element
        const inputField = await $('[id="inputField"]');

        // Fill in List item 1
        await inputField.setValue('List item 1');

        // Get the CSS of the SUBMIT button
        const submitButton = await $('[id="submitButton"]');

        // Click the SUBMIT button
        await submitButton.click();

        // Let WDIO handle the alert() pop-up
        await browser.acceptAlert();

        // Fill in List item 2
        await inputField.setValue('List item 2');

        // Click the SUBMIT button
        await submitButton.click();

        // Let WDIO handle the alert() pop-up
        await browser.acceptAlert();

        // Fill in List item 3
        await inputField.setValue('List item 3');

        // Click the SUBMIT button
        await submitButton.click();

        // Let WDIO handle the alert() pop-up
        await browser.acceptAlert();

    });
});