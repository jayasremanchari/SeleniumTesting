Feature: Flight Search Action
Description: This feature will search search the flight provided with the "from" and "to" destinations 
along with the "date of travel"

Background: 

   Given User navigates to Login Page
   And User enters valid credentials
   
Scenario: Search for the available flights with Valid Inputs
	 
	When User enters "<From>" "<To>" destinations
	And the user enters the "<date_of_travel>" "<no_of_passengers>"
	Then available flight status displayed Successfully





	