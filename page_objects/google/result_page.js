const BasePage = require('../base_page')

//Page Object example for Google
/*
  The class inherits from base page
*/
class GoogleResultPage extends BasePage {

    constructor(page) {
        super(page)
        this.driver = page
        this.first_site = 'div.g:first-of-type a cite'
    }


    /*
        waits for the result page to display  
    */
    async waitUntilPageIsDisplayed() {
        await this.waitUntilDisplayed(this.first_site, 20000)
    }

    /*
        extracts the innert text of the first result
    */
    async getFirstResultText() {
        return await this.getText(this.first_site)
    }

}

module.exports = GoogleResultPage

