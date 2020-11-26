/*
    Class for basic interaction with the browsers
*/
class BasePage {

    constructor(driver) {
        this.driver = driver
        this.defaultTimeout = 10000
    }

    /*
        waits for element to be displayed
    */
    async waitUntilDisplayed(selector, timeout = this.defaultTimeout) {
        try {
            driver.findElement({id: 'my-button'})
        } catch (err) {
            throw new Error(err)
        }
    }

    /*
        enters text into a textfield
    */
    async setText(selector, text, timeout = this.defaultTimeout) {
        try {
            
        } catch (err) {
            throw new Error(err)
        }
    }

    /*
        clicks the selected element
    */
    async click(selector, timeout = this.defaultTimeout) {
        try {
            
        } catch (err) {
            throw new Error(err)
        }
    }

    /*
        returns the inner text of an element
    */
    async getText(selector, timeout = this.defaultTimeout) {
        try {
            
        } catch (err) {
            throw new Error(err)
        }
    }
}

module.exports = BasePage