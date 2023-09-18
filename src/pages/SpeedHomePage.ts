import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";
import { url } from "inspector";


export default class SpeedTestHomePage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        captcha: "//html[contains(@class,'js flexbox')]//body[1]",
        GoButton: "//div[text()[normalize-space()='Go']]",
        loginBtn: "//p[@class='logonButton']//input[1]",
        errorMessage: "alert",
        panelName: "//a[contains(text(),'Test Panel - AGB Account')]",
        UpdateList: "//input[@value='Update List']",
        UpdateList2: "//input[@value='Update List 2']",
        Dialogbox: "//label[text()='Please input the required fields.']",
        Searchbox: "(//span[text()='Search']/following::input)[1]",
        SearchButton: "//span[text()='Search']",
        UpdateContact: "//button[@class='btn btn-primary']",
        AlertMessage: "//div[@class='toast-message']"

    }

    async navigateToSite() {
        await this.base.goto(process.env.BASEURL);
        await fixture.page.waitForTimeout(6000);
        await expect(this.page).toHaveTitle("Broadband Speed Tester ");
    }

    async ClickonGO() {
        await fixture.page.waitForTimeout(6000);
        await this.page.click(this.Elements.GoButton);


    }

    async ValidationMessage() {

        await fixture.page.waitForTimeout(6000);
        const toast = this.page.locator(this.Elements.Dialogbox);
        await expect(toast).toBeVisible();
        await expect(toast).toHaveText("Please input the required fields.");
        await fixture.page.waitForTimeout(6000);

    }
}