import { logger } from "../utilities/logger";

export class ProductsPage {
    constructor(page) {
        this.page = page;

        this.firstProductAddToCartButton = page.locator("#add-to-cart-sauce-labs-backpack")
        this.cartButton = page.locator(".shopping_cart_link");
    }

    async addFirstProductToCart() {
        logger.info("Clicking on first product's add to cart button");
        await this.firstProductAddToCartButton.click();
    }

    async goToCart() {
        logger.info("Clicking on cart icon");
        await this.cartButton.click();
    }
}