import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 2)

import { fixture } from "../../hooks/pageFixture";
import * as data from "../../helper/util/test-data/SMdata.json"
import Homepage from "../../pages/SpeedHomePage";



let SpeedHomePage: Homepage

Given('user navigates to the generic speed test site', async function () {
    SpeedHomePage = new Homepage(fixture.page);
    await SpeedHomePage.navigateToSite();

})

When('user click on GO button', async () => {

    await SpeedHomePage.ClickonGO();

})

Then('Validation message should displayed to user', async () => {

    await SpeedHomePage.ValidationMessage();

})
