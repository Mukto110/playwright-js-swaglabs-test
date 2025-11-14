import { logger } from "../utilities/logger";

export class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameInput = page.locator("#user-name");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.locator("#login-button");
    }


    async goto(url) {
        logger.info(`Navigating to: ${url}`);
        await this.page.goto(url);
    }

    async login(username, password) {
        logger.info(`Filling username: ${username}`);
        await this.usernameInput.fill(username);
        logger.info("Filling password: [Protected]");
        await this.passwordInput.fill(password);
        logger.info("Clicking on login button");
        await this.loginButton.click();
    }
}