Feature: Update call lists in security manager

  Scenario Outline: Security manager - Call List update functionality
    Given User navigates to the application
    When User enter the username 
    Then User enter the password             
    Then User click on the login button
    Then user search for test panel
    And user click on Update call list button
    Then call list should be updated successfully
  
