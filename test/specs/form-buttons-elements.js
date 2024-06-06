

describe('CSS test', () => {
    it('Buttons Elements', async () => {

        // Go to the webpage
        await browser.url('https://www.practiceautomatedtesting.com/webelements/form_button_elements.html');

        // Verify the correct page is loaded
        await expect(browser).toHaveUrlContaining('form_button_elements');

        // Get the CSS of the NAME element
        const name = await $('[id="name"]');

        // Fill in a name
        await name.setValue('Test Specialist');

        // Get the CSS of the EMAIL element
        const email = await $('[id="email"]');

        // Fill in an email address
        await email.setValue('my-email@testing.com');

        // Get the CSS of the AGE element
        const age = await $('[id="age"]');

        // Fill in an age 
        await age.setValue('101');

        // Get the CSS of the SUBMIT element
        const submit = await $('[id="submitButton"]');

        // Fill in an age 
        await submit.click();

        // Verify the successful submission
        const successfulSubmission = await $('[id="animation"]');

        await successfulSubmission.waitForDisplayed();

        await expect(successfulSubmission).toHaveText('All fields were filled successfully!');



       
    });
});