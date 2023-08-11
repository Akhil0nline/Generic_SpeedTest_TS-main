Feature: Generic speed test functionality check

  @Mandatory_Field
  Scenario Outline: Verify the Validation message for speed test form page
    Given user navigates to the generic speed test site
    When user click on captach check box and other field should be blank
    Then user click on GO button
    When validation message should be displayed to user
