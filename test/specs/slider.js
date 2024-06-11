

describe('CSS test', () => {
    it('Slider', async () => {


        // Go to the webpage
        await browser.url('https://www.practiceautomatedtesting.com/webelements/Slider');

        // Verify the correct page is loaded
        await expect(browser).toHaveUrlContaining('Slider');

        // Get the CSS of the SLIDER element
        const sliderObject = await $('[type="range"]');

        // Increment the slider with a step of 0.5
        const newValue = 4.5;
        await sliderObject.addValue(newValue);

        await browser.pause(3000);

    });
});