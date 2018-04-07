Feature: Flight Booking Action
Description: This feature will select the flight based on the search results. 

Background: 

   Given User navigates to Login Page
   And User enters valid credentials  
   And the User enters the search Criteria
   When the User selects the flight
   Then Flight Details Page Displayed Successfully.
   
Scenario Outline: Provide Travel Details	

	Given the user is in TravellerDetail Page
	When the user enters the traveller_details "<name>""<surname>""<date>""<month>""<year>"
	And the user enters the passport_details "<passport_no>" and date_of_expiry "<pdate>""<pmonth>""<pyear>"
	Then the user proceed to payment_gateway

	Examples: 
	  | name | surname | date | month | year | passport_no | pdate | pmonth | pyear |
      | Jayasre | Manchari | 09 | 06 | 1992 | K8347229 | 09 | 04 | 2020 |















