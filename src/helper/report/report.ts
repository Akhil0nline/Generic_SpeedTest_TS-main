const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Security Manager| APM | Sanity Automation Report",
    pageTitle: "Security Manager Test Report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "114",
        },
        device: "SUYCOKHWLAP300",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Security Manager | APM" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Sanity" }
        ],
    },
});