class InventoryPage {


    async clickCartButton() {
        await this.cartButton.click();
    }
    
    async clickHamburgerMenuButton() {
        await this.hamburgerMenuButton.click();
    }
    
    async clickAddToCartButton() {
        await this.addToCartButton.click();
    }

    async clickRemoveFromCartButton() {
        await this.removeFromCartButton.click();
    }
    
    async openItemDescriptionPageViaTextLink() {
        await this.itemDescriptionPageTextLink.click();
    }
    
    async openItemDescriptionPageViaImageLink() {
        await this.itemDescriptionPageImageLink.click();
    }
    
    async clickInventorySortButton() {
        await this.inventorySortButton.click();
    }
    
    async clickInventorySortButtonAlphabeticalOrderOption() {
        await this.inventorySortButtonAlphabeticalOrderOption.click();
    }
    
    async clickInventorySortButtonReverseAlphabeticalOrderOption() {
        await this.inventorySortButtonReverseAlphabeticalOrderOption.click();
    }
    
    async clickInventorySortButtonLowToHighPriceOption() {
        await this.inventorySortButtonLowToHighPriceOption.click();
    }
    
    async clickInventorySortButtonHighToLowPriceOption() {
        await this.inventorySortButtonHighToLowPriceOption.click();
    }


get cartButton() {
    return $("//div[@id='shopping_cart_container']");
}

get hamburgerMenuButton() {
    return $("//button[@id='react-burger-menu-btn']");
}

get addToCartButton() {
    return $("//button[@id='add-to-cart-sauce-labs-onesie']"); 
}

get removeFromCartButton() {
    return $("//button[@id='remove-sauce-labs-onesie']"); 
}


get itemDescriptionPageTextLink() {
    return $("//*[@class='inventory_item_name' and normalize-space()='Sauce Labs Onesie']");
}

get itemDescriptionPageImageLink() {
    return $("//*[@class='inventory_item_name' and normalize-space()='Sauce Labs Onesie']");
}

get inventorySortButton() {
    return $("//select[@data-test='product_sort_container']");
}

get inventorySortButtonAlphabeticalOrderOption() {
    return $("//option[@value='az']");
}

get inventorySortButtonReverseAlphabeticalOrderOption() {
    return $("//option[@value='za']");
}

get inventorySortButtonLowToHighPriceOption() {
    return $("//option[@value='lohi']");
}

get inventorySortButtonHighToLowPriceOption() {
    return $("//option[@value='hilo']");
}

}

export default new LoginPage();

