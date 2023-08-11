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
        captcha: "//label[@id='recaptcha-anchor-label']",
        GoButton: "(//label[text()='City']/following::input)[1]",
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
        console.log(await this.page.viewportSize().width)
        console.log(await this.page.viewportSize().height)
        await fixture.page.waitForTimeout(6000);
        await expect(this.page).toHaveTitle("Broadband Speed Tester ");
    }

    async ClickonGO() {
        await this.page.locator(this.Elements.GoButton).fill("LA");
    }
}