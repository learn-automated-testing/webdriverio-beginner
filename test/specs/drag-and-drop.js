

describe('CSS test', () => {
    it('Drag and Drop', async () => {

        // Go to the webpage
        await browser.url('https://www.practiceautomatedtesting.com/webelements/drag-drop.html');

        // Verify the correct page is loaded
        await expect(browser).toHaveUrlContaining('drag-drop');

        // Get the CSS of the DRAG ME element
        const dragObject = await $('[class="draggable"]');

        // Get the CSS of the DROP HERE element
        const dropZone = await $('[class="dropzone"]');

        // Drag and drop the drag object to the dropzone
        await dragObject.dragAndDrop(dropZone);

        // Get the CSS of the RESET button element
        const resetButton = await $('[id="resetButton"]');

        // Click the reset button
        await resetButton.click();

        // Verify the correct radio button is enabled 
        // const smiley = await $('[class="dropzone"]');
        // await smiley.waitForDisplayed();
        // await expect(smiley).toHaveText('😊');

    });
});