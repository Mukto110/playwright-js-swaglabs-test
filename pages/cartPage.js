import { logger } from "../utilities/logger";

export class CartPage {
    constructor(page) {
        this.cartProductName = page.locator(".inventory_item_name");
        this.menuIcon = page.locator("#react-burger-menu-btn");
        this.logoutLink = page.locator("#logout_sidebar_link");
    }

    async getCartProductName() {
        logger.info("Getting product name from cart page");
        return await this.cartProductName.innerText();
    }

    async logout() {
        logger.info("Clicking on menu icon");
        await this.menuIcon.click();
        logger.info("Clicking on logout link");
        await this.logoutLink.click();
    }
}