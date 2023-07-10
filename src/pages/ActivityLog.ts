import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";
import { url } from "inspector";
import { Console } from "console";

export default class ActivityLog {

    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {

        logbutton: "//a[contains(text(),'Activity Log')]",
        contactbtn: "//a[contains(text(),'Contacts')]",
        Startdate: "(//input[@class='hasDatepicker'])[1]",
        Date1: "//a[text()='1']",
        Enddate: "(//input[@class='hasDatepicker'])[2]",
        Date2: "//a[contains(text(),'10')]",
        ApplyButton: "//input[@value='Apply']",
        logTable: "//table[@id='tblActivity']"



    }

    async ActivityLog() {

        await this.base.waitAndClick(this.Elements.logbutton);
        await fixture.page.waitForLoadState();
        fixture.logger.info("Waiting for 3 seconds")
        await fixture.page.waitForTimeout(3000);
        const toast = this.page.locator(this.Elements.contactbtn);
        await expect(toast).toBeVisible();
        await expect(toast).toHaveText("Contacts");

    }

    async FilterDates() {

        await this.page.locator(this.Elements.Startdate).click();
        await this.page.locator(this.Elements.Date1).click();
        await this.page.locator(this.Elements.Enddate).click();
        await this.page.locator(this.Elements.Date2).click();
        await this.page.locator(this.Elements.ApplyButton).click();
    }

    async DisplayLogs() {
        const displayed = await this.page.locator(this.Elements.logTable);
        await expect(displayed).toBeVisible();

    }
}