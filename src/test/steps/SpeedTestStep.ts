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

When('user click on captach check box and other field should be blank', async function () {

    await SpeedHomePage.captchacheckbox;
})

Then('user click on GO button', async () => {

    await SpeedHomePage.ClickonGO;
})

When('validation message should be displayed to user', async function () {

    await SpeedHomePage.ValidationMessage();

});

