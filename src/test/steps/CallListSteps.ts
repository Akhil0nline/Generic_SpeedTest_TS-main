import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 2)

import { fixture } from "../../hooks/pageFixture";
import * as data from "../../helper/util/test-data/SMdata.json"
import UpdateCallList from "../../pages/CallListPage";



let CallListPage: UpdateCallList

Given('User navigates to the application', async function () {
    CallListPage = new UpdateCallList(fixture.page);
    await CallListPage.navigateToLoginPage();

})

When('User enter the username', async function () {

    await CallListPage.enterUserName(data.userName);
})

Then('User enter the password', async () => {

    await CallListPage.enterPassword(data.password);
})

Then('User click on the login button', async function () {

    await CallListPage.clickLoginButton();

})

Given('user search for test panel', async function () {
    fixture.logger.info("Searching for test panel: " + data.Panel)
    await CallListPage.SearchPanel(data.Panel)
    await fixture.page.waitForTimeout(3000);
    await CallListPage.SearchButton();
});

When('user click on Update call list button', async function () {

    await fixture.page.waitForTimeout(2000);
    await CallListPage.UpdateCallList();

});

Then('call list should be updated successfully', async function () {
    await CallListPage.UpdateCallListII();
    await CallListPage.CallListIISuccess();

});

