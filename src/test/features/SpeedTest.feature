Feature: Generic speed test functionality check

  @ActivityLog_Sanity
  Scenario Outline: Verify the Activity log date search in secuity manager
    Given as a user navigates to the application
    When as a user enter the username
    Then as a user enter the password
    Then as a user click on the login button
    Then as a user search for test panel
    And user click on Activity Log feature
    Then apply date search for Activity logs
    And logs should be displayed as per the valid dates