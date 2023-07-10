import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import * as data from "../../helper/util/test-data/SMdata.json"
import UpdateCallList from "../../pages/CallListPage";
import ActivityLog from "../../pages/ActivityLog";

let CallListPage: UpdateCallList
let ActivityLogPage: ActivityLog

Given('as a user navigates to the application', async function () {
    ActivityLogPage = new ActivityLog(fixture.page);
    CallListPage = new UpdateCallList(fixture.page);
    await CallListPage.navigateToLoginPage();

});


When('as a user enter the username', async function () {
    await CallListPage.enterUserName(data.userName);

});


Then('as a user enter the password', async function () {
    await CallListPage.enterPassword(data.password);

});




Then('as a user click on the login button', async function () {
    await CallListPage.clickLoginButton();

});

Then('as a user search for test panel', async function () {
    fixture.logger.info("Searching for test panel: " + data.Panel)
    await CallListPage.SearchPanel(data.Panel)
    await fixture.page.waitForTimeout(3000);
    await CallListPage.SearchButton();

});

Then('user click on Activity Log feature', async function () {
    await fixture.page.waitForTimeout(2000);
    await ActivityLogPage.ActivityLog();

});




Then('apply date search for Activity logs', async function () {

    await ActivityLogPage.FilterDates();

});



Then('logs should be displayed as per the valid dates', async function () {
    await ActivityLogPage.DisplayLogs();

});