import { test, expect } from "../utilities/fixtures.js";
import { testData } from '../data/testData.js';
import { logger } from "../utilities/logger.js";

test("User logs in, adds product to cart, verifies it, and logs out", async ({ page, loginPage, productsPage, cartPage }) => {
  

  await loginPage.goto(testData.urls.loginUrl);

  logger.info(`Logging as: ${testData.credentials.username}`);
  await loginPage.login(
    testData.credentials.username,
    testData.credentials.password
  );

  await productsPage.addFirstProductToCart();

  await productsPage.goToCart();

  const itemName = await cartPage.getCartProductName();
  logger.info(`Expected product name: ${testData.product.name}`);
  logger.info(`Actual product name: ${itemName}`);
  expect(itemName, `Product name mismatch! Expected: ${testData.product.name}, Got: ${itemName}`).toBe(testData.product.name);
  logger.info("Product name verification passed");

  await cartPage.logout();

  await expect(page).toHaveURL(testData.urls.loginUrl);
  logger.info("User got landed to the login page");
});