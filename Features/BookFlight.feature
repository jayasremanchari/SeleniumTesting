Feature: Flight Booking Action
Description: This feature will select the flight based on the search results. 

Background: 

   Given User navigates to Login Page
   And User enters valid credentials  
   When User enters "<From>" "<To>" destinations
   And the user enters the "<date_of_travel>" "<no_of_passengers>"
   Then available flight status displayed Successfully
   
Scenario: Select the flight to book

	When the User selects the flight
	Then Flight Details Page Displayed Successfully.

	
	
	