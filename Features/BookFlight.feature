Feature: Flight Booking Action
Description: This feature will select the flight based on the search results. 

Background: 

   Given User navigates to Login Page
   And User enters valid credentials  
   And the User enters the search Criteria
   Then available flight status displayed Successfully
 
@BookTest   
Scenario: Select the flight to book

	When the User selects the flight
	Then Flight Details Page Displayed Successfully.



	
	
	