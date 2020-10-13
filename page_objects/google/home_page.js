const BasePage = require('../base_page')

//Page Object example for Google
/*
  The class inherits from base page
*/
class GoogleHomePage extends BasePage {

    constructor(page) {
        super(page)

        this.driver = page
        this.search_bar = "input[name='q']" 
        this.search_button = '.FPdoLc.tfB0Bf input[value="Google Search"]'
    }

    /*
        navigates to google home page  
    */
    async navigateToPageByUrl() {
        await this.driver.get("https://google.com")
    }

    /*
        makes a google search  
    */
    async search(text) {
        await this.setText(this.search_bar, text)
        await this.click(this.search_button)
    }

}

module.exports = GoogleHomePage

