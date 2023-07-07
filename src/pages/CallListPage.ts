import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";
import { url } from "inspector";


export default class CallListPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        userInput: "(//label[text()='Username:']/following::input)[1]",
        passwordInput: "(//label[text()='Password:']/following::input)[1]",
        loginBtn: "//p[@class='logonButton']//input[1]",
        errorMessage: "alert",
        panelName: "//a[contains(text(),'Test Panel - AGB Account')]",
        UpdateList: "//input[@value='Update List']",
        UpdateList2: "//input[@value='Update List 2']",
        Dialogbox: "//label[@id='CallListUpdateSuccess']",
        Searchbox: "(//span[text()='Search']/following::input)[1]",
        SearchButton: "//span[text()='Search']",
        UpdateContact: "//button[@class='btn btn-primary']",
        AlertMessage: "//div[@class='toast-message']"

    }

    async navigateToLoginPage() {
        await this.base.goto(process.env.BASEURL);
        console.log(await this.page.viewportSize().width)
        console.log(await this.page.viewportSize().height)
        await fixture.page.waitForTimeout(6000);
        await expect(this.page).toHaveTitle("Log In - Security Manager - Interface Security Systems");
    }
    async enterUserName(username: string) {
        await this.page.locator(this.Elements.userInput).fill(username);
    }
    async enterPassword(Password: string) {
        await this.page.locator(this.Elements.passwordInput).fill(Password);
    }

    async clickLoginButton() {
        await this.base.waitAndClick(this.Elements.loginBtn);
    }

    async SearchPanel(string) {

        await this.page.locator(this.Elements.Searchbox).type(string);

    }

    async SearchButton() {

        await this.page.locator(this.Elements.SearchButton).click();
        await this.page.locator(this.Elements.panelName).click();

    }

    async UpdateCallList() {

        await this.base.waitAndClick(this.Elements.UpdateList);
        await fixture.page.waitForTimeout(6000);
        const toast = this.page.locator(this.Elements.Dialogbox);
        await expect(toast).toBeVisible();
        await expect(toast).toHaveText("Update to Call List \"List\" successful.");
    }

    async UpdateCallListII() {

        await fixture.page.waitForTimeout(6000);
        await fixture.page.locator("//select[@id='selCallLists']").selectOption('2');
        await this.base.waitAndClick(this.Elements.UpdateList2);

    }

    async CallListIISuccess() {

        await fixture.page.waitForTimeout(6000);
        const toast = this.page.locator(this.Elements.Dialogbox);
        await expect(toast).toBeVisible();
        await expect(toast).toHaveText("Update to Call List \"List 2\" successful.");

    }
}