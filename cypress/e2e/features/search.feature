Feature: Search functionality suite

   Testing the main scenarios of the transactions history search functionality at George dummy website

Background: As an existing user, User logs-in successfully
    Given User navigates to the website
    And User logs-in successfully

Scenario Outline: Search results are relevant to the search keyword
    Given User is at the homepage Url
    When User searches with "<keyword>"
    Then Search results titles should contain "<keyword>"
    And Number of Results should match the <transactionsCount> of the user
    Examples:
    | keyword  | transactionsCount  |
    | Liftago  |        7           |
    |   GTH    |        12          |

Scenario Outline: FE displays non-matching results response when searching using invalid data
    Given User is at the homepage Url
    When User searches with "<invalidData>"
    Then "Omlouvám se, nic jsem nenašel. Zkuste zadat jiná kritéria." gets displayed in the search results
    Examples:
    | invalidData|
    |    test     |
    |    +@_$     |

Scenario: Clearing the search keyword should update the results page
    Given User is at the homepage Url
    When User searches with "liftago"
    Then Search results titles should contain "liftago"
    And Search text-box displays the clear button
    When User clicks the clear button
    Then Results are cleared and "Omlouvám se, nic jsem nenašel." gets displayed in the search results

Scenario Outline: Searching transactions history of a keyword within date range
    Given User is at the homepage Url
    When User searches with "liftago"
    And User filters search results page using "<startDate>" and "<endDate>"
    Then Results are cleared and "Omlouvám se, nic jsem nenašel." gets displayed in the search results
    Examples:
    | startDate  |   endDate    |
    | 05.05.2020 |   05.05.2021 |