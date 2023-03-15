import { strict as assert } from 'node:assert';

class CalculatorPrice {

    get calculatorTotalPrice() {
        return $("//div[@class='summary_info_label summary_total_label']");
    }

    async checkCalculatorAccuray() {
        assert.strictEqual(await this.calculatorTotalPrice.isDisplayed(), true);
        assert.strictEqual(await this.calculatorTotalPrice.getText(),"Total: $60.45")
        assert.strictEqual(await browser.getUrl(),"https://www.saucedemo.com/checkout-step-two.html")
    }

}

export default new CalculatorPrice();