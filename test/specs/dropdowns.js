

describe('CSS test', () => {
    it('Dropdowns', async () => {

        // Go to the webpage
        await browser.url('https://www.practiceautomatedtesting.com/webelements/dropdown-elements.html');

        // Verify the correct page is loaded
        await expect(browser).toHaveUrlContaining('dropdown-elements');

        // Get the CSS of the DROPDOWN element
        const options = await $('[id="dropdown"]');

        // Select OPTION2
        await options.selectByAttribute('value', 'option2');

        // Verify the correct radio button is enabled 
        let message = await $('[id="message"]');
        await expect(message).toHaveText('You selected: Option 2');

        // Select OPTION3
        await options.selectByAttribute('value', 'option3');

        // Verify the correct radio button is enabled 
        await expect(message).toHaveText('You selected: Option 3');

        // Select OPTION1
        await options.selectByAttribute('value', 'option1');

        // Verify the correct radio button is enabled 
        await expect(message).toHaveText('You selected: Option 1');

    });
});