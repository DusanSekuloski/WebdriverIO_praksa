class ProductSortContainer {
    
    get usernameField () {
        return $("//input[@id='user-name']");
    }

    get passwordField () {
        return $("//input[@id='password']");
    }

    get submitButton () {
        return $('input[type="submit"]');
    }
    get productSortOption () {
        return $("//select[@class='product_sort_container']");
    }
    get sortFromAtoZ () {
        return $("//select/option[@value='az']");
    }
    get sortFromZtoA () {
        return $("//select/option[@value='za']");
    }
    get sortFromLowtoHigh () {
        return $("//select/option[@value='lohi']");
    }
    get sortFromHightoLow () {
        return $("//select/option[@value='hilo']");
    }


    async enterUsernameandPassword() {
        await this.usernameField.setValue("standard_user");
        await this.passwordField.setValue("secret_sauce");

    }
    async clickLoginButton() {
        await this.submitButton.click();
    }
    async clickProductSortOption() {
        await this.productSortOption.click();
    }
    async clickSortProductAtoZ() {
        await this.sortFromAtoZ.click();
    }
    async clickSortProductZtoA() {
        await this.sortFromZtoA.click();
    }
    async clickSortProductLowtoHigh() {
        await this.sortFromLowtoHigh.click();
    }
    async clickSortProductHightoLow() {
        await this.sortFromHightoLow.click();
    }
    
    
}

export default new ProductSortContainer();